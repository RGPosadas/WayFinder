import {
  FloorPath,
  Line,
  POI,
  POICategory,
  MarkerLocation,
  BuildingId,
} from "../types/main";
import { getAllPOI, getBuildingById } from "../constants";
import PathFindingService from "./pathfinding.service";

class IndoorPathPlanningService {
  private static instance = new IndoorPathPlanningService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return IndoorPathPlanningService.instance;
  }

  /**
   * returns all the lines in all floors in all buildings and campuses
   * from the algorithm
   * Note: since no outdoor direction, the destination buildings entrance will be
   * set to the starting location if it's the users current location
   * @param startLocation
   * @param endLocation
   */
  public updateFloorPaths = (
    startLocation: MarkerLocation,
    endLocation: MarkerLocation,
    accessible: boolean
  ): FloorPath[] => {
    let startPOI = this.getPOI(startLocation);
    const endPOI = this.getPOI(endLocation);

    if (endPOI === null) {
      return null;
    }

    if (startPOI === null) {
      startPOI = this.getEndBuildingExit(endPOI);
    }

    return PathFindingService.getInstance().findPathBetweenPOIs(
      startPOI,
      endPOI,
      accessible
    );
  };

  /**
   * Returns all the lines to render
   * @param startLocation
   * @param endLocation
   * @param accessible boolean to enable accessibility mode
   * @param chosenFloorLevel the level which the user selects
   */
  public getPathLines = (
    startLocation: MarkerLocation,
    endLocation: MarkerLocation,
    accessible: boolean,
    chosenFloorLevel: number
  ): Line[][] => {
    const floorPaths = this.updateFloorPaths(
      startLocation,
      endLocation,
      accessible
    );
    if (floorPaths === null) return null;
    return this.filterPaths(floorPaths, chosenFloorLevel).map(
      (floorPath) => floorPath.path
    );
  };

  /**
   * Steps to the destion to be displayed in the slider pannel
   * @param floorPaths all the paths on every floor
   */
  public getDirectionsText = (floorPaths: FloorPath[]): string[] => {
    const directionsText: string[] = [];
    let skip: number;

    if (floorPaths.length !== 1) {
      floorPaths.forEach((floorPath, index) => {
        if (skip === index) {
          return;
        }

        if (
          index + 1 !== floorPaths.length &&
          "connector" in floorPath &&
          "connector" in floorPaths[index + 1] &&
          floorPath.connector.category ===
            floorPaths[index + 1].connector.category
        ) {
          skip = index + 1;
          directionsText.push(
            `Take the ${
              "connector" in floorPath
                ? POICategory[floorPath.connector.category]
                : "entrance/exit"
            } on floor ${floorPath.level} to floor ${
              floorPaths[index + 1].level
            } in the ${floorPath.buildingId} building.`
          );
        } else {
          directionsText.push(
            `Take the ${
              "connector" in floorPath
                ? POICategory[floorPath.connector.category]
                : "entrance/exit"
            } on floor ${floorPath.level} in the ${
              floorPath.buildingId
            } building.`
          );
        }

        if (
          index + 1 !== floorPaths.length &&
          floorPaths[index].buildingId !== floorPaths[index + 1].buildingId
        ) {
          directionsText.push(
            `Go to the ${floorPaths[index + 1].buildingId} building.`
          );
        }
      });
    }
    directionsText.push("Head to your Destination.");

    return directionsText;
  };

  /** ***************
   * Helper Methods
   *************** */

  /**
   * Check if building has floor plans
   * @param location which to check for floor plans
   */
  private isBuildingWithFloorPlan = (location: MarkerLocation) => {
    if (
      getBuildingById(location.id as BuildingId) !== undefined &&
      (location.id === "H" || location.id === "MB" || location.id === "CC")
    ) {
      return true;
    }
    return false;
  };

  /**
   * Searches and return either the POI, building, User Location or undefined
   * @param object any time that has an id
   */
  private getPOI = (object: MarkerLocation) => {
    let retrievedPOI: POI;
    retrievedPOI = getAllPOI().find((poi) => poi.id === object.id);

    if (retrievedPOI === undefined) {
      if (!this.isBuildingWithFloorPlan(object)) return null;

      retrievedPOI = getAllPOI().find(
        (poi) =>
          poi.buildingId === object.id && poi.category === POICategory.Exit
      );
    }

    return retrievedPOI;
  };

  /**
   * returns the exit/entrance of the building where the destination
   * is located
   */
  private getEndBuildingExit = (endPOI: POI) => {
    return getAllPOI().find(
      ({ buildingId, category }) =>
        buildingId === endPOI.buildingId && category === POICategory.Exit
    );
  };

  /**
   * returns if the path line is on the chosen level. Only for H building at
   * the moment since it's the only building with multiple floors
   * @param floorPath
   */
  private isPathOnFloor = (
    floorPath: FloorPath,
    chosenFloorLevel: number
  ): boolean => {
    if (floorPath.buildingId === "H") {
      return chosenFloorLevel === floorPath.level;
    }
    return true;
  };

  /**
   * Filters out the paths that are not from the chosen level
   * @param floorPaths
   */
  private filterPaths = (
    floorPaths: FloorPath[],
    chosenFloorLevel: number
  ): FloorPath[] => {
    return floorPaths.filter((floorPath) => {
      return this.isPathOnFloor(floorPath, chosenFloorLevel);
    });
  };
}

export default IndoorPathPlanningService;
