import {
  FloorPath,
  Line,
  POI,
  POICategory,
  MarkerLocation,
  Building,
} from "../types/main";
import { getAllPOI, getBuildingById } from "../constants";
import PathFindingService from "./pathfinding.service";

/**
 *
 */
class PathPlanningService {
  private static instance = new PathPlanningService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return PathPlanningService.instance;
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
    endLocation: MarkerLocation
  ): FloorPath[] => {
    let startPOI = this.getPOI(startLocation);
    const endPOI = this.getPOI(endLocation);

    if (endPOI === null) {
      return null;
    }

    if (startPOI === null) {
      startPOI = getAllPOI().find(
        ({ buildingId, category }) =>
          buildingId === endPOI.buildingId && category === POICategory.Exit
      );
    }

    return PathFindingService.getInstance().findPathBetweenPOIs(
      startPOI,
      endPOI
    );
  };

  /**
   * Returns all the lines to render
   * @param startLocation
   * @param endLocation
   * @param chosenFloorLevel the level which the user selects
   */
  public getPathLines = (
    startLocation: MarkerLocation,
    endLocation: MarkerLocation,
    chosenFloorLevel: number
  ): Line[][] => {
    const floorPaths = this.updateFloorPaths(startLocation, endLocation);
    if (floorPaths === null) return null;
    return this.filterPaths(floorPaths, chosenFloorLevel).map(
      (floorPath) => floorPath.path
    );
  };

  /**
   * Steps to the destion to be displayed in the slider pannel
   * Only for indoors
   * @param floorPaths all the paths on every floor
   */
  public getDirectionsText = (floorPaths: FloorPath[]): string[] => {
    const directionsText: string[] = [];
    floorPaths.forEach((floorPath, index) => {
      directionsText.push(
        `Take the ${
          floorPath.connectorType
            ? POICategory[floorPath.connectorType]
            : "entrance/exit"
        } on floor ${floorPath.level} in the ${floorPath.buildingId} building.`
      );

      if (
        index + 1 !== floorPaths.length &&
        floorPaths[index].buildingId !== floorPaths[index + 1].buildingId
      ) {
        directionsText.push(
          `Go to the ${floorPaths[index + 1].buildingId} building.`
        );
      }
    });
    directionsText.push("Go to your Destination.");

    return directionsText;
  };

  public isBuildingWithFloorPlan = (location: MarkerLocation) => {
    if (
      getBuildingById(location.id) !== undefined &&
      (location.id === "H" || location.id === "MB" || location.id === "CC")
    ) {
      return true;
    }
    return false;
  };

  /** **************
   * Helper Methods
   ************** */

  /**
   * Searches and return either the POI, building, User Location or undefined
   * @param object any time that has an id
   */
  private getPOI = (object: MarkerLocation) => {
    let poi: POI;
    poi = getAllPOI().find((poi) => poi.id === object.id);

    if (poi === undefined) {
      if (!this.isBuildingWithFloorPlan(object)) return null;
      poi = getAllPOI().find(
        (poi) =>
          poi.buildingId === object.id && poi.category === POICategory.Exit // needs an exit for the building
      );
    }

    return poi;
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

export default PathPlanningService;
