import { Line, Location, TravelNode, PQItem } from "../types/main";
import { buildingFloors } from "../constants/floors.data";
import { getDistanceFromLine, getDistance } from "geolib";
import PriorityQueue from "ts-priority-queue";

/**
 * Find the shortest path between two locations on a given floor
 * @param floorId
 * @param start
 * @param end
 */
export const findPathOnFloor = (
  floorId: number,
  start: Location,
  end: Location
): Line[] => {
  let { travelNodes } = buildingFloors.find(({ id }) => id === floorId);
  //deep copy of travelNodes
  let nodes = JSON.parse(JSON.stringify(travelNodes));

  let edges: Line[] = traverseNodes(nodes);
  let startEdge: Line = findClosestLine(edges, start);
  let endEdge: Line = findClosestLine(edges, end);

  let initial: TravelNode = {
    id: nodes.length,
    location: start,
    children: [startEdge[0].id, startEdge[1].id]
  };
  let goal: TravelNode = {
    id: nodes.length + 1,
    location: end,
    children: [endEdge[0].id, endEdge[1].id]
  };

  nodes.push(initial, goal);
  nodes[startEdge[0].id].children.push(initial.id);
  nodes[startEdge[1].id].children.push(initial.id);
  nodes[endEdge[0].id].children.push(goal.id);
  nodes[endEdge[1].id].children.push(goal.id);

  let searchPaths = search(nodes, initial, goal);
  let shortestPath: Line[] = [];
  let id: number = goal.id;
  while (id != initial.id) {
    let parentId: number = searchPaths[id];
    shortestPath.push([nodes[id], nodes[parentId]]);
    id = parentId;
  }
  return shortestPath;
};

/**
 * A* implementation for indoor pathfinding
 * @param nodes
 * @param initial
 * @param goal
 */
const search = (
  nodes: TravelNode[],
  initial: TravelNode,
  goal: TravelNode
): {} => {
  let closed = {};
  let open: PriorityQueue<PQItem> = new PriorityQueue<PQItem>({
    comparator: (a, b) => {
      return f(nodes[a.id], goal, a.g) - f(nodes[b.id], goal, b.g);
    }
  });
  open.queue({ id: initial.id, parent: null, g: 0 });
  while (open.length > 0) {
    let current = open.dequeue();
    if (current.id in closed) continue;
    else closed[current.id] = current.parent;
    if (current.id === goal.id) break;
    nodes[current.id].children.forEach(child => {
      if (child in closed) return;
      let g =
        current.g +
        getDistance(nodes[current.id].location, nodes[child].location);
      open.queue({ id: child, parent: current.id, g: g });
    });
  }
  return closed;
};

const findEdge = (edges: Line[], point: Location): Line => {
  let minDistance: number = Number.MAX_SAFE_INTEGER;
  let line: Line;
  edges.forEach(edge => {
    let distance: number = getDistanceFromLine(
      point,
      edge.point1.location,
      edge.point2.location
    );
    if (distance < minDistance) {
      minDistance = distance;
      line = edge;
    }
  });
  return line;
};

/**
 * The sum of the distance from the destination to a node and the distance from the start location to a node
 * @param travelNode
 * @param goal
 * @param g
 */
const f = (travelNode: TravelNode, goal: TravelNode, g: number): number => {
  return getDistance(goal.location, travelNode.location) + g;
};

/**
 * Find the closest line from a given point
 * @param lines
 * @param point
 */
const findClosestLine = (lines: Line[], point: Location): Line => {
  let minDistance: number = Number.MAX_SAFE_INTEGER;
  let closestLine: Line;
  lines.forEach(line => {
    let distance: number = getDistanceFromLine(
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

/**
 * Function which traverses a floor's travel node and returns a set of lines.
 *
 * This function takes in a floorId, and will return all lines which correspond to
 * connections between nodes.
 * @param travelNodes
 */
const traverseNodes = (travelNodes: TravelNode[]): Line[] => {
  let lines: Line[] = [];
  for (let i = 0; i < travelNodes.length; i++) {
    let parent: TravelNode = travelNodes[i];
    parent.children.forEach(nodeId => {
      if (nodeId > i) {
        let child: TravelNode = travelNodes[nodeId];
        lines.push([parent, child]);
      }
    });
  }
  return lines;
};
