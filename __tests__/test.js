import PathFindingService from "../src/services/pathfinding.service";
import { POIInfo } from "../src/constants/poi.data";
import { BuildingId, POICategory } from "../src/types/main";

describe("Find the shortest path on a given floor", () => {
  const { findPathIndoor } = PathFindingService.getInstance();
  const { getPathsToConnectors } = PathFindingService.getInstance();
  it("should return the shortest path between two given locations on H 8th floor", () => {
    const startFloorConnectors = findPathIndoor(
      {
        id: "4772ab52-ecf7-4711-990d-86b4c53871e4",
        displayName: "H961-17",

        description: "",
        location: {
          latitude: 45.497643,
          longitude: -73.578983
        },
        buildingId: BuildingId.H,
        level: 9,
        category: POICategory.Classroom
      },
      {
        id: "8819617a-ad2e-4090-b929-8ee8c0951dc1",
        displayName: "Men's Bathroom",

        description: "JMBS first 1st floor men's washroom",
        location: {
          latitude: 45.49533465172625,
          longitude: -73.57934289831273
        },
        buildingId: BuildingId.MB,
        level: 1,
        category: POICategory.Washroom
      }
    );
    expect(startFloorConnectors).toEqual(0);
  });
});
