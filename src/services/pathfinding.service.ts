import { getDistanceFromLine, getDistance } from "geolib";
import PriorityQueue from "ts-priority-queue";
import _ from "lodash";
import { TravelEdge, Location, TravelNode, PQItem } from "../types/main";

class PathFindingService {
  private static instance = new PathFindingService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return PathFindingService.instance;
  }

  /**
   * Find the shortest path between two locations on a given floor.
   * Returns an array of lines if the path is found.
   * Returns null if no path is found.
   * @param travelNodes the travel nodes to traverse
   * @param start
   * @param end
   * @returns A list of TravelEdges
   */
  public findPathOnFloor = (
    travelNodes: TravelNode[],
    start: Location,
    end: Location
  ): TravelEdge[] | null => {
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
    return shortestPath;
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
  public travelPathToLinePath = (travelPath: TravelEdge[]) => {
    return travelPath.map((edge) => [edge[0].location, edge[1].location]);
  };

  /**
   * A* implementation for indoor pathfinding
   * @param nodes
   * @param initial
   * @param goal
   * @returns A hashmap of the nodes in the closed and their parents.
   */
  public search = (
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
  public f = (travelNode: TravelNode, goal: TravelNode, g: number): number => {
    return getDistance(goal.location, travelNode.location) + g;
  };

  /**
   * Find the closest line from a given point
   * @param lines
   * @param point
   * @returns the line closest to the point
   */
  public findClosestLine = (
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
