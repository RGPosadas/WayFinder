import { Line, Location, TravelNode, PQItem } from "../types/main";
import { buildingFloors } from "../constants/floors.data";
import { getDistanceFromLine, getDistance } from "geolib";
import PriorityQueue from "ts-priority-queue";

/**
 * TASK-14
 * A* implementation for indoor pathfinding
 *
 * TODO:
 *
 * 1. Use traverseNodes() to get a list of lines which correspond to connections between nodes.
 * @see Line
 *
 * 2. Go through each line and check distance between the line and the start location. The
 * line closest to the start location is made up of the travel nodes which are connect to the start location.
 * @see getDistanceFromLine() from geolib.
 *
 * 3. Go through each line and check distance between the line and the end location. The
 * line closest to the end location is made up of the travel nodes which are connect to the start location.
 * @see getDistanceFromLine() from geolib.
 *
 * 4. Make a copy of the floor's travel node list and update it with the new relation found in 2. and 3.
 *
 * 5. Now that the tree is set properly. Do A* (pref. someone who did COMP472 would do this):
 *
 * 1. Initialize the open list with the initial node so (top node)
 * 2. Initialize the closed list to empty
 * 3. Repeat
 *  a) If the open list is empty, then exit with failure.
 *  b) Else, take the first node s from the open list.
 *  c) If s is a goal state, exit with success. Extract the solution path from s to so
 *  d) Else, insert s in the closed list (s has been visited /expanded)
 *  e) Insert the successors of s in the open list in a certain order if
 *  they are not already in the closed and/or open lists (to avoid
 *  cycles)
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

  let path: Line[] = [];
  let id: number = goal.id;
  while (id != initial.id) {
    let parentId: number = closed[id];
    path.push([nodes[id], nodes[parentId]]);
    id = parentId;
  }
  return path;
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
