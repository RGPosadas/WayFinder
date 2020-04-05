import * as testData from "./__testData__/pathfinding.data";
import { POIInfo, buildingFloors } from "../src/constants";
import { BuildingId } from "../src/types/main";
import PathFindingService from "../src/services/pathfinding.service";

describe("Find the shortest path on a given floor", () => {
  const {
    findPathOnFloor,
    travelPathToLinePath
  } = PathFindingService.getInstance();
  it("should return the shortest path between two given locations on H 8th floor", () => {
    const travelNodes = buildingFloors.find(
      floor => floor.buildingId === BuildingId.H && floor.level === 8
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H851.03")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H815")[0].location
    );
    expect(travelPathToLinePath(shortest)).toEqual(testData.h85103toH815);
  });

  it("should return the shortest path between two given locations on H 9th floor", () => {
    const travelNodes = buildingFloors.find(
      floor => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H911")[0].location
    );
    expect(travelPathToLinePath(shortest)).toEqual(testData.h96119toH911);
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
      floor => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H923")[0].location,
      POIInfo.filter(({ displayName }) => displayName === "H921")[0].location
    );
    expect(shortest.length).toBe(1);
    expect(travelPathToLinePath(shortest)).toEqual(testData.h923toH921);
  });

  it("should return one line only between two locations near the edges of a line", () => {
    const travelNodes = buildingFloors.find(
      floor => floor.buildingId === BuildingId.H && floor.level === 9
    ).travelNodes;
    const shortest = findPathOnFloor(
      travelNodes,
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0]
        .location,
      POIInfo.filter(({ displayName }) => displayName === "H961-9")[0].location
    );
    expect(shortest.length).toBe(1);
    expect(travelPathToLinePath(shortest)).toEqual(testData.h96119toH9619);
  });
});
