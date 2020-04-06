import { getDistanceFromLine, getDistance } from "geolib";
import PriorityQueue from "ts-priority-queue";
import _ from "lodash";
import {
  TravelEdge,
  Location,
  TravelNode,
  PQItem,
  POI,
  Line,
  POICategory,
  FloorPath,
  ConnectorPOICategory,
  ConnectorPOI,
} from "../types/main";
import * as floors from "../constants/floors.data";
import { POIInfo } from "../constants/poi.data";

class PathFindingService {
  private static instance = new PathFindingService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return PathFindingService.instance;
  }

  /**
   * Returns a list of paths between two pois.
   *
   * These POI's can be within the same building, or in two different buildings.
   *
   * @param start The start POI
   * @param end The end POI
   *
   * @returns The list of paths to travese between the start and end POIs
   */
  public findPathBetweenPOIs = (start: POI, end: POI): FloorPath[] | null => {
    if (start.buildingId === end.buildingId) {
      return this.findBuildingPath(start, end);
    }

    const startBuildingExit = POIInfo.find(
      ({ category, buildingId }) =>
        category === POICategory.Exit && buildingId === start.buildingId
    ) as ConnectorPOI;
    const endBuildingExit = POIInfo.find(
      ({ category, buildingId }) =>
        category === POICategory.Exit && buildingId === end.buildingId
    ) as ConnectorPOI;

    // TODO: connect these paths to the outdoor path.
    return this.findBuildingPath(start, startBuildingExit).concat(
      this.findBuildingPath(end, endBuildingExit)
    );
  };

  /**
   * Returns a list of paths between two pois within the same building
   *
   * @param start The start POI
   * @param end The end POI
   *
   * @returns The list of paths to travese between the start and end POIs
   */
  public findBuildingPath = (start: POI, end: POI): FloorPath[] | null => {
    // Get travel nodes for the floors of the start and end of path
    const startFloorNodes = floors.buildingFloors.find(
      (floor) =>
        floor.buildingId === start.buildingId && floor.level === start.level
    ).travelNodes;
    const endFloorNodes = floors.buildingFloors.find(
      (floor) =>
        floor.buildingId === end.buildingId && floor.level === end.level
    ).travelNodes;

    if (start.level === end.level) {
      return [
        {
          path: this.findPathOnFloor(
            startFloorNodes,
            start.location,
            end.location
          ),
          buildingId: start.buildingId,
          level: start.level,
        },
      ];
    }

    const escalatorDirection =
      start.level < end.level
        ? POICategory.EscalatorUp
        : POICategory.EscalatorDown;

    const startFloorConnectors: ConnectorPOI[] = this.findReachableConnectorsFromPOI(
      start,
      escalatorDirection
    );
    const endFloorConnectors: ConnectorPOI[] = this.findReachableConnectorsFromPOI(
      end,
      escalatorDirection
    );

    const pathsFromStartToConnectors = this.getPathsBetweenPOIAndConnectors(
      start,
      startFloorConnectors,
      startFloorNodes
    );
    const pathsFromEndToConnectors = this.getPathsBetweenPOIAndConnectors(
      end,
      endFloorConnectors,
      endFloorNodes
    );

    return this.getShortestPathThroughBuilding(
      pathsFromStartToConnectors,
      pathsFromEndToConnectors
    );
  };

  /**
   * Returns all connector POIs which are in the same floor and building as the given POI.
   *
   * @param poi POI whose building/floor is searched for conenctors
   * @param escalatorDirection Accepted escalator direction for current travel plan
   *
   * @returns A list of connectorPOIs
   */
  public findReachableConnectorsFromPOI = (
    poi: POI,
    escalatorDirection: POICategory
  ): ConnectorPOI[] => {
    const connectors = POIInfo.filter(
      ({ category, level, buildingId }) =>
        poi.level === level &&
        poi.buildingId === buildingId &&
        (category === POICategory.Exit ||
          category === POICategory.Stairs ||
          category === escalatorDirection ||
          category === POICategory.Elevator)
    ) as ConnectorPOI[];
    return connectors;
  };

  /**
   * Returns the path distance
   *
   * @param path path for which to calculate distance
   *
   * @returns The distance traversed by the path
   */
  public getPathDistance = (path: Line[]): number => {
    let distance = 0;
    path.forEach((line) => {
      distance += getDistance(line[0], line[1]);
    });
    return distance;
  };

  /**
   * Returns a list of valid paths between a POI and all the other connectors on the same building/floor
   *
   * @param poi POI which serves as the start point for per-floor navigation
   * @param connectors List of reachable connectors. These POI must be on the
   * same building/floor as the starting POI
   * @param nodes Travel nodes for the given floor
   *
   * @returns List of valid paths
   */
  public getPathsBetweenPOIAndConnectors = (
    poi: POI,
    connectors: ConnectorPOI[],
    nodes: TravelNode[]
  ): FloorPath[] => {
    const pathsToConnectors: FloorPath[] = [];

    connectors.forEach((connector) => {
      pathsToConnectors.push({
        buildingId: connector.buildingId,
        level: connector.level,
        connectorType: connector.category,
        path: this.findPathOnFloor(nodes, poi.location, connector.location),
      });
    });

    return pathsToConnectors;
  };

  /**
   * Searches through valid paths between start and end POI to find the shortest one.
   *
   * @param startFloorPathsToConnectors
   * @param endFloorPathsToConnectors
   *
   * @returns The shortest FloorPath
   */
  public getShortestPathThroughBuilding = (
    startFloorPathsToConnectors: FloorPath[],
    endFloorPathsToConnectors: FloorPath[]
  ): FloorPath[] | null => {
    const shortestPath: [FloorPath, FloorPath] = [null, null];
    let minDistance = Number.MAX_SAFE_INTEGER;

    startFloorPathsToConnectors.forEach((startFloorPath) => {
      // for each start floor path, find the connected end floor path
      const endFloorPath = endFloorPathsToConnectors.find(
        ({ connectorType: category }) =>
          category === startFloorPath.connectorType
      );

      if (endFloorPath === null) {
        return;
      }
      const distance =
        this.getPathDistance(startFloorPath.path) +
        this.getPathDistance(endFloorPath.path);
      if (distance < minDistance) {
        minDistance = distance;
        shortestPath[0] = startFloorPath;
        shortestPath[1] = endFloorPath;
      }
    });
    return shortestPath;
  };

  /**
   * Find the shortest path between two locations on a given floor.
   * Returns an array of lines if the path is found.
   * Returns null if no path is found.
   *
   * @param travelNodes the travel nodes to traverse
   * @param start
   * @param end
   *
   * @returns A list of TravelEdges
   */
  public findPathOnFloor = (
    travelNodes: TravelNode[],
    start: Location,
    end: Location
  ): Line[] | null => {
    const nodes = _.cloneDeep(travelNodes);

    const edges: TravelEdge[] = this.traverseNodes(nodes);
    const startEdge: TravelEdge = this.findClosestLine(edges, start);
    const endEdge: TravelEdge = this.findClosestLine(edges, end);

    const initial: TravelNode = {
      id: nodes.length,
      location: start,
      children: [startEdge[0].id, startEdge[1].id],
    };
    const goal: TravelNode = {
      id: nodes.length + 1,
      location: end,
      children: [endEdge[0].id, endEdge[1].id],
    };

    if (_.isEqual(startEdge, endEdge)) {
      initial.children.push(goal.id);
      goal.children.push(initial.id);
    }
    nodes.push(initial, goal);

    nodes[startEdge[0].id].children.push(initial.id);
    nodes[startEdge[0].id].children = nodes[startEdge[0].id].children.filter(
      (c) => startEdge[1].id !== c
    );

    nodes[startEdge[1].id].children.push(initial.id);
    nodes[startEdge[1].id].children = nodes[startEdge[1].id].children.filter(
      (c) => startEdge[0].id !== c
    );

    nodes[endEdge[0].id].children.push(goal.id);
    nodes[endEdge[0].id].children = nodes[endEdge[0].id].children.filter(
      (c) => endEdge[1].id !== c
    );

    nodes[endEdge[1].id].children.push(goal.id);
    nodes[endEdge[1].id].children = nodes[endEdge[1].id].children.filter(
      (c) => endEdge[0].id !== c
    );

    const searchPath = this.search(nodes, initial, goal);

    if (searchPath === null) return null;

    const shortestPath: TravelEdge[] = [];
    let { id } = goal;
    while (id !== initial.id) {
      const parentId: number = searchPath[id];
      shortestPath.push([nodes[id], nodes[parentId]]);
      id = parentId;
    }
    return shortestPath.map((edge) => [edge[0].location, edge[1].location]);
  };

  /**
   * Function which traverses a floor's travel node and returns a set of lines.
   *
   * This function takes in a floorId, and will return all lines which correspond to
   * connections between nodes.
   * @param travelNodes
   * @returns A list of TravelEdges
   */
  public traverseNodes = (travelNodes: TravelNode[]): TravelEdge[] => {
    const lines: TravelEdge[] = [];
    for (let i = 0; i < travelNodes.length; i += 1) {
      const parent: TravelNode = travelNodes[i];
      parent.children.forEach((nodeId) => {
        if (nodeId > i) {
          const child: TravelNode = travelNodes[nodeId];
          lines.push([parent, child]);
        }
      });
    }
    return lines;
  };

  /**
   * Returns a list of lines equivalent to a list of TravelNodes
   * @param travelPath List of TravelEdges
   * @returns List of equivalent Lines
   */
  public travelPathToLinePath = (travelPath: TravelEdge[]): Line[] => {
    return travelPath.map((edge) => [edge[0].location, edge[1].location]);
  };

  /**
   * A* implementation for indoor pathfinding
   * @param nodes
   * @param initial
   * @param goal
   * @returns A hashmap of the nodes in the closed and their parents.
   */
  private search = (
    nodes: TravelNode[],
    initial: TravelNode,
    goal: TravelNode
  ): {
    [id: number]: number;
  } | null => {
    const closed = {};
    const open: PriorityQueue<PQItem> = new PriorityQueue<PQItem>({
      comparator: (a, b) => {
        return this.f(nodes[a.id], goal, a.g) - this.f(nodes[b.id], goal, b.g);
      },
    });
    open.queue({ id: initial.id, parent: -1, g: 0 } as PQItem);
    while (open.length > 0) {
      const current = open.dequeue();
      if (!(current.id in closed)) {
        closed[current.id] = current.parent;
        if (current.id === goal.id) return closed;
        nodes[current.id].children.forEach((child) => {
          if (child in closed) return;
          const g =
            current.g +
            getDistance(nodes[current.id].location, nodes[child].location);
          open.queue({ id: child, parent: current.id, g });
        });
      }
    }
    return null;
  };

  /**
   * The sum of the distance from the destination to a node and the distance from the start location to a node
   * given by:
   *
   * f(n) = g(n) + h(n)
   *
   * where:
   *  n is the next node on the path, g(n) is the cost of the path from the start node to n, and h(n) is a
   *  heuristic function that estimates the cost of the cheapest path from n to the goal.
   *
   *  source: https://en.wikipedia.org/wiki/A*_search_algorithm
   *
   * @param travelNode current node
   * @param goal destination node
   * @param g g(n)
   * @returns The f(n) score of a given node
   */
  private f = (travelNode: TravelNode, goal: TravelNode, g: number): number => {
    return getDistance(goal.location, travelNode.location) + g;
  };

  /**
   * Find the closest line from a given point
   * @param lines
   * @param point
   * @returns the line closest to the point
   */
  private findClosestLine = (
    lines: TravelEdge[],
    point: Location
  ): TravelEdge => {
    let minDistance: number = Number.MAX_SAFE_INTEGER;
    let closestLine: TravelEdge = lines[0];
    lines.forEach((line) => {
      const distance: number = getDistanceFromLine(
        point,
        line[0].location,
        line[1].location
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestLine = line;
      }
    });
    return closestLine;
  };
}

export default PathFindingService;
