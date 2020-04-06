import * as testData from "./__testData__/pathfinding.data";
import { POIInfo, buildingFloors } from "../src/constants";
import { BuildingId, POICategory } from "../src/types/main";
import PathFindingService from "../src/services/pathfinding.service";

describe("Find the shortest path on a given floor", () => {
  const {
    findPathOnFloor,
    findPathBetweenPOIs
  } = PathFindingService.getInstance();
  it("should return the shortest path between two given locations on H 8th floor", () => {
    const travelNodes = buildingFloors.find(
      (floor) => floor.buildingId === BuildingId.H && floor.level === 8
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H851.03")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H815")[0].location
    );
    expect(shortest).toEqual(testData.h85103toH815);
  });

  it("should return the shortest path between two given locations on H 9th floor", () => {
    const travelNodes = buildingFloors.find(
      (floor) => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H911")[0].location
    );
    expect(shortest).toEqual(testData.h96119toH911);
  });

  it("should return null when no path is found", () => {
    const travelNodes = testData.brokenGraph;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H911")[0].location
    );

    expect(shortest).toBeNull();
  });

  it("should return one line only between two locations next to each other", () => {
    const travelNodes = buildingFloors.find(
      (floor) => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H923")[0].location,
      POIInfo.filter(({ displayName }) => displayName === "H921")[0].location
    );
    expect(shortest.length).toBe(1);
    expect(shortest).toEqual(testData.h923toH921);
  });

  it("should return one line only between two locations near the edges of a line", () => {
    const travelNodes = buildingFloors.find(
      (floor) => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H961-9")[0].location
    );
    expect(shortest.length).toBe(1);
    expect(shortest).toEqual(testData.h96119toH9619);
  });

  it("should return the shortest path between two given locations on H 8th floor", () => {
    const path = findPathBetweenPOIs(
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
    expect(path).toEqual(null);
  });
});
