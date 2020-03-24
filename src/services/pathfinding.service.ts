import { getDistanceFromLine, getDistance } from "geolib";
import PriorityQueue from "ts-priority-queue";
import { Line, Location, TravelNode, PQItem } from "../types/main";
import { buildingFloors } from "../constants/floors.data";

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
  const { travelNodes } = buildingFloors.find(({ id }) => id === floorId);
  const nodes = JSON.parse(JSON.stringify(travelNodes));

  const edges: Line[] = traverseNodes(nodes);
  const startEdge: Line = findClosestLine(edges, start);
  const endEdge: Line = findClosestLine(edges, end);

  const initial: TravelNode = {
    id: nodes.length,
    location: start,
    children: [startEdge[0].id, startEdge[1].id]
  };
  const goal: TravelNode = {
    id: nodes.length + 1,
    location: end,
    children: [endEdge[0].id, endEdge[1].id]
  };

  if (isEqual(startEdge, endEdge)) {
    initial.children.push(goal.id);
    goal.children.push(initial.id);
  }
  nodes.push(initial, goal);
  nodes[startEdge[0].id].children.push(initial.id);
  nodes[startEdge[1].id].children.push(initial.id);
  nodes[endEdge[0].id].children.push(goal.id);
  nodes[endEdge[1].id].children.push(goal.id);

  const searchPaths = search(nodes, initial, goal);
  const shortestPath: Line[] = [];
  let { id } = goal;
  while (id !== initial.id) {
    const parentId: number = searchPaths[id];
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
  const closed = {};
  const open: PriorityQueue<PQItem> = new PriorityQueue<PQItem>({
    comparator: (a, b) => {
      return f(nodes[a.id], goal, a.g) - f(nodes[b.id], goal, b.g);
    }
  });
  open.queue({ id: initial.id, parent: null, g: 0 });
  while (open.length > 0) {
    const current = open.dequeue();
    if (!(current.id in closed)) {
      closed[current.id] = current.parent;
      if (current.id === goal.id) break;
      nodes[current.id].children.forEach(child => {
        if (child in closed) return;
        const g =
          current.g +
          getDistance(nodes[current.id].location, nodes[child].location);
        open.queue({ id: child, parent: current.id, g });
      });
    }
  }
  return closed;
};

const isEqual = (a: Line, b: Line): boolean => {
  return JSON.stringify(a) === JSON.stringify(b);
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

/**
 * Function which traverses a floor's travel node and returns a set of lines.
 *
 * This function takes in a floorId, and will return all lines which correspond to
 * connections between nodes.
 * @param travelNodes
 */
const traverseNodes = (travelNodes: TravelNode[]): Line[] => {
  const lines: Line[] = [];
  for (let i = 0; i < travelNodes.length; i += 1) {
    const parent: TravelNode = travelNodes[i];
    parent.children.forEach(nodeId => {
      if (nodeId > i) {
        const child: TravelNode = travelNodes[nodeId];
        lines.push([parent, child]);
      }
    });
  }
  return lines;
};
