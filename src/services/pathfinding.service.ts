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
  ConnectorPOI,
  BuildingId,
} from "../types/main";
import { POIInfo, buildingFloors } from "../constants";

class PathFindingService {
  private static instance = new PathFindingService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return PathFindingService.instance;
  }

  /**
   * Returns a list of paths between two POI's.
   *
   * These POI's can be within the same building, or in two different buildings.
   *
   * @param start The start POI
   * @param end The end POI
   *
   * @returns The list of paths to travese between the start and end POI's
   */
  public findPathBetweenPOIs = (
    start: POI,
    end: POI,
    accessibilityMode: boolean
  ): FloorPath[] | null => {
    if (start.buildingId === end.buildingId) {
      return this.findBuildingPath(start, end, accessibilityMode);
    }
    const startBuildingExit = this.findPOI(POICategory.Exit, start.buildingId);
    const endBuildingExit = this.findPOI(POICategory.Exit, end.buildingId);

    // TODO: connect these paths to the outdoor path.
    const startBuildingPath = this.findBuildingPath(
      start,
      startBuildingExit,
      accessibilityMode
    );
    const endBuildingPath = this.findBuildingPath(
      end,
      endBuildingExit,
      accessibilityMode
    );
    return startBuildingPath.concat(endBuildingPath);
  };

  /**
   * Finds the exit of a building
   *
   * @param start The start POI
   *
   * @Returns the exit of a building
   */
  private findPOI = (
    categorization: POICategory,
    building: BuildingId
  ): ConnectorPOI => {
    return POIInfo.find(
      ({ category, buildingId }) =>
        category === categorization && buildingId === building
    ) as ConnectorPOI;
  };

  /**
   * Returns a list of paths between two POI's within the same building
   *
   * @param start The start POI
   * @param end The end POI
   *
   * @returns The list of paths to travese between the start and end POI's
   */
  private findBuildingPath = (
    start: POI,
    end: POI,
    accessibilityMode: boolean
  ): FloorPath[] | null => {
    if (start.level === end.level) {
      return [
        {
          path: this.findPathOnFloor(start, end, accessibilityMode),
          buildingId: start.buildingId,
          level: start.level,
        },
      ];
    }

    let POIcategories;
    if (accessibilityMode) {
      POIcategories = [POICategory.Elevator];
    } else {
      const escalatorDirection =
        start.level < end.level
          ? POICategory.EscalatorUp
          : POICategory.EscalatorDown;
      POIcategories = [
        POICategory.Stairs,
        escalatorDirection,
        POICategory.Elevator,
      ];
    }

    const startFloorConnectors: ConnectorPOI[] = this.findReachableConnectorsFromPOI(
      start,
      POIcategories
    );
    const endFloorConnectors: ConnectorPOI[] = this.findReachableConnectorsFromPOI(
      end,
      POIcategories
    );

    const pathsFromStartToConnectors = this.getPathsBetweenPOIAndConnectors(
      start,
      startFloorConnectors,
      accessibilityMode
    );
    const pathsFromEndToConnectors = this.getPathsBetweenPOIAndConnectors(
      end,
      endFloorConnectors,
      accessibilityMode
    );

    return this.getShortestPathThroughBuilding(
      pathsFromStartToConnectors,
      pathsFromEndToConnectors
    );
  };

  /**
   * Returns all connector POI's which are in the same floor and building as the given POI.
   *
   * @param poi POI whose building/floor is searched for conenctors
   * @param escalatorDirection Accepted escalator direction for current travel plan
   *
   * @returns A list of connectorPOI's
   */
  private findReachableConnectorsFromPOI = (
    poi: POI,
    POICategories: POICategory[]
  ): ConnectorPOI[] => {
    const connectors = POIInfo.filter(
      ({ category, level, buildingId }) =>
        poi.level === level &&
        poi.buildingId === buildingId &&
        POICategories.includes(category)
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
  private getPathDistance = (path: Line[]): number => {
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
   * @param connectors List of reachable connectors. These POI's must be on the
   * same building/floor as the starting POI
   *
   * @returns List of valid paths
   */
  private getPathsBetweenPOIAndConnectors = (
    poi: POI,
    connectors: ConnectorPOI[],
    accessibilityMode: boolean
  ): FloorPath[] => {
    const pathsToConnectors: FloorPath[] = [];

    connectors.forEach((connection) => {
      pathsToConnectors.push({
        buildingId: connection.buildingId,
        level: connection.level,
        connector: connection,
        path: this.findPathOnFloor(poi, connection, accessibilityMode),
      });
    });

    return pathsToConnectors;
  };

  /**
   * Searches through valid paths between start and end POI to find the shortest one.
   *
   * @param startFloorPathsToConnectors List of all paths from the start POI to a connector on the same floor
   * @param endFloorPathsToConnectors List of all paths from the end POI to a connector on the same floor
   *
   * @returns The shortest FloorPath
   */
  private getShortestPathThroughBuilding = (
    startFloorPathsToConnectors: FloorPath[],
    endFloorPathsToConnectors: FloorPath[]
  ): FloorPath[] | null => {
    const shortestPath: [FloorPath, FloorPath] = [null, null];
    let minDistance = Number.MAX_SAFE_INTEGER;

    startFloorPathsToConnectors.forEach((startFloorPath) => {
      // for each start floor path, find the connected end floor path
      const paths = endFloorPathsToConnectors.filter(
        ({ connector }) =>
          connector.category === startFloorPath.connector.category
      );
      if (paths.length < 1) {
        return;
      }

      let endFloorPath: FloorPath;
      let minDistanceBtweenConnectors = Number.MAX_SAFE_INTEGER;
      if (paths.length > 1) {
        paths.forEach((path) => {
          const distanceBetweenConnectors = getDistance(
            startFloorPath.connector.location,
            path.connector.location
          );
          if (distanceBetweenConnectors < minDistanceBtweenConnectors) {
            endFloorPath = path;
            minDistanceBtweenConnectors = distanceBetweenConnectors;
          }
        });
      } else {
        [endFloorPath] = paths;
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
   * @param start start location
   * @param end end location
   *
   * @returns A list of TravelEdges
   */
  public findPathOnFloor = (
    start: POI,
    end: POI,
    accessibilityMode: boolean
  ): Line[] | null => {
    const { travelNodes } = buildingFloors.find(
      (floor) =>
        floor.buildingId === start.buildingId && floor.level === start.level
    );
    const nodes = _.cloneDeep(travelNodes);

    const edges: TravelEdge[] = this.traverseNodes(nodes);
    const startEdge: TravelEdge = this.findClosestLine(edges, start.location);
    const endEdge: TravelEdge = this.findClosestLine(edges, end.location);

    const initial: TravelNode = {
      id: nodes.length,
      location: start.location,
      children: [startEdge[0].id, startEdge[1].id],
    };
    const goal: TravelNode = {
      id: nodes.length + 1,
      location: end.location,
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

    if (accessibilityMode) {
      const { disabledUnfriendly } = buildingFloors.find(
        (floor) =>
          floor.buildingId === start.buildingId && floor.level === start.level
      );
      disabledUnfriendly.forEach((nodeId) => {
        nodes[nodeId].children = nodes[nodeId].children.filter(
          (child) => !disabledUnfriendly.includes(child)
        );
      });
    }

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
   * @param travelNodes List of travel nodes for a building floor
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
   * A* implementation for indoor pathfinding
   * @param nodes List of travel nodes
   * @param initial Start travel node
   * @param goal End travel node
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
