import { getDistanceFromLine } from "geolib";
import { Line } from "../types/main";

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
  return [];
};

/**
 * TASK-15
 * Function which traverses a floor's travel node and returns a set of lines.
 *
 * This function takes in a floorId, and will return all lines which correspond to
 * connections between nodes. Use a set to avoid duplicates.
 * @see buildingFloors from src/constants/floors.data.ts
 */
export const traverseNodes = (floorId: number): Line[] => {
  return [];
};
