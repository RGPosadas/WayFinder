import * as testData from "./__testData__/pathfinding.data";
import { POIInfo, buildingFloors } from "../src/constants";
import * as constants from "../src/constants";
import { POICategory } from "../src/types/main";
import PathFindingService from "../src/services/pathfinding.service";

describe("Find the shortest path between two locations/POI's", () => {
  const {
    findPathOnFloor,
    findPathBetweenPOIs,
  } = PathFindingService.getInstance();
  it("should return the shortest path between two given locations on H 8th floor", () => {
    const { travelNodes } = buildingFloors.find(
      (floor) => floor.buildingId === "H" && floor.level === 8
    );
    const shortest = findPathOnFloor(
      POIInfo.filter(({ displayName }) => displayName === "H851.03")[0],
      POIInfo.filter(({ displayName }) => displayName === "H815")[0],
      false
    );
    expect(shortest).toEqual(testData.h85103toH815);
  });

  it("should return the shortest path between two given locations on H 9th floor", () => {
    const { travelNodes } = buildingFloors.find(
      (floor) => floor.buildingId === "H" && floor.level === 9
    );
    const shortest = findPathOnFloor(
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0],
      POIInfo.filter(({ displayName }) => displayName === "H911")[0],
      false
    );
    expect(shortest).toEqual(testData.h96119toH911);
  });

  it("should return one line only between two locations next to each other", () => {
    const { travelNodes } = buildingFloors.find(
      (floor) => floor.buildingId === "H" && floor.level === 9
    );
    const shortest = findPathOnFloor(
      POIInfo.filter(({ displayName }) => displayName === "H923")[0],
      POIInfo.filter(({ displayName }) => displayName === "H921")[0],
      false
    );
    expect(shortest.length).toBe(1);
    expect(shortest).toEqual(testData.h923toH921);
  });

  it("should return one line only between two locations near the edges of a line", () => {
    const { travelNodes } = buildingFloors.find(
      (floor) => floor.buildingId === "H" && floor.level === 9
    );
    const shortest = findPathOnFloor(
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0],
      POIInfo.filter(({ displayName }) => displayName === "H961-9")[0],
      false
    );
    expect(shortest.length).toBe(1);
    expect(shortest).toEqual(testData.h96119toH9619);
  });

  it("should return a path that uses stairs as connectors", () => {
    constants.buildingFloors = buildingFloors.push(testData.h3rdFloorPoiMock);
    constants.POIInfo.push(testData.h3rdFloorMock);

    const path = findPathBetweenPOIs(
      POIInfo.find(({ displayName, level }) => displayName === "H961-17"),
      POIInfo.find(
        ({ displayName, level }) => displayName === "Stairs 1" && level === 3
      ),
      false
    );

    constants.buildingFloors.pop();
    constants.POIInfo.pop();

    expect(path[0].connectorType).toEqual(POICategory.Stairs);
    expect(path[1].connectorType).toEqual(POICategory.Stairs);
  });

  it("should return the shortest path between two given POI's in Hall and JMSB", () => {
    const path = findPathBetweenPOIs(
      POIInfo.find(({ displayName }) => displayName === "H961-17"),
      POIInfo.find(
        ({ buildingId, displayName, level }) =>
          buildingId === "MB" && displayName === "Men's Bathroom" && level === 1
      ),
      false
    );
    expect(path.length).toBe(3);
    expect(path).toEqual(testData.h96117toMBMensBathroom);
  });

  it("should return the shortest path between two given POIs on H 9th floor", () => {
    const path = findPathBetweenPOIs(
      POIInfo.find(({ displayName }) => displayName === "H961-17"),
      POIInfo.find(
        ({ displayName, level }) =>
          displayName === "Men's Bathroom" && level === 9
      ),
      false
    );
    expect(path.length).toBe(1);
    expect(path).toEqual(testData.h96117toH9MensBathroom);
  });

  it("should return the shortest path between two given POI's from H 9th to 8th floor", () => {
    const path = findPathBetweenPOIs(
      POIInfo.find(({ displayName }) => displayName === "H961-17"),
      POIInfo.find(
        ({ buildingId, displayName, level }) =>
          displayName === "Women's Bathroom" && level === 8
      ),
      false
    );
    expect(path.length).toBe(2);
    expect(path).toEqual(testData.h9117toH8WomensBathroom);
  });

  it("should return the shortest path between two given POI's from H 8th to 9th floor", () => {
    const path = findPathBetweenPOIs(
      POIInfo.find(
        ({ buildingId, displayName, level }) =>
          displayName === "Women's Bathroom" && level === 8
      ),
      POIInfo.find(({ displayName }) => displayName === "H961-17"),
      false
    );
    expect(path.length).toBe(2);
    expect(path).toEqual(testData.h8WomensBathroomToH9117);
  });

  it("should return null when no path is found", () => {
    constants.buildingFloors.find(
      (floor) => floor.buildingId === "H" && floor.level === 9
    ).travelNodes = testData.brokenGraph;
    const shortest = findPathOnFloor(
      POIInfo.filter(({ displayName }) => displayName === "H961-19")[0],
      POIInfo.filter(({ displayName }) => displayName === "H911")[0],
      false
    );

    expect(shortest).toBeNull();
  });
});
