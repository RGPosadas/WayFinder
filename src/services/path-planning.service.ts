import { FloorPath, Line, POI, POICategory } from "../types/main";
import { getAllPOI } from "../constants";
import PathFindingService from "./pathfinding.service";

/**
 *
 */
class TempService {
  private static instance = new TempService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return TempService.instance;
  }

  /**
   * returns all the lines in all floors in all buildings and campuses
   * from the algorithm
   */
  public updateFloorPaths = (
    startLocation: any,
    endLocation: any
  ): FloorPath[] => {
    return PathFindingService.getInstance().findPathBetweenPOIs(
      this.getPOI(startLocation),
      this.getPOI(endLocation)
    );
  };

  /**
   *
   */
  public getPathLines = (
    startLocation: any,
    endLocation: any,
    chosenFloorLevel: number
  ): Line[][] => {
    return this.getPaths(
      this.updateFloorPaths(startLocation, endLocation),
      chosenFloorLevel
    ).map((floorPath) => floorPath.path);
  };

  /**
   * Searches and return either the POI, building, User Location or undefined
   * @param object any time that has an id
   */
  private getPOI = (object: any) => {
    let poi: POI;
    poi = getAllPOI().find((poi) => poi.id === object.id);

    if (poi === undefined) {
      poi = getAllPOI().find(
        (poi) =>
          poi.buildingId === object.id && poi.category === POICategory.Exit
      );
    }
    // TODO Current Location
    return poi;
  };

  /**
   * returns the path line to the chosen level. Only for H building at
   * the moment since it's the only building with multiple floors
   * @param floorPath
   */
  private getPathPerFloor = (
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
   * pa
   */
  private getPaths = (floorPaths: FloorPath[], chosenFloorLevel: number) => {
    return floorPaths.filter((floorPath) => {
      return this.getPathPerFloor(floorPath, chosenFloorLevel);
    });
  };
}

export default TempService;