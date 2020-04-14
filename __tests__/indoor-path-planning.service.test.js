import IndoorPathPlanningService from "../src/services/indoor-path-planning.service";
import * as testData from "./__testData__/indoor-travel-route";

describe("Indoor Path Finding Service", () => {
  const {
    getPathLines,
    getDirectionsText,
    updateFloorPaths,
  } = IndoorPathPlanningService.getInstance();
  it("should return the path lines on floor of the start location when start and end are in the same building", () => {
    const paths = getPathLines(
      testData.mockPOIs[1],
      testData.mockPOIs[0],
      false,
      8
    );
    expect(paths).toEqual(testData.sameBuildingSameFloor);
  });

  it("should return the path lines on floor of the start location of each building", () => {
    const paths = getPathLines(
      testData.mockPOIs[1],
      testData.mockBuilding[2],
      false,
      8
    );
    expect(paths).toEqual(testData.differentBuildingSameCampus);
  });

  it("should have the exit of the end builing if start is current location", () => {
    const paths = getPathLines(
      testData.mockPOIs[2],
      testData.mockPOIs[0],
      false,
      8
    );
    expect(paths).toEqual(testData.currentLocationAsStart);
  });

  it("should have the exit of the end builing if start is current location", () => {
    const paths = updateFloorPaths(
      testData.mockPOIs[4],
      testData.mockPOIs[3],
      false
    );
    expect(paths).toEqual(testData.differentCampus);

    const directionsTest = getDirectionsText(paths);
    expect(directionsTest).toEqual(testData.expectedDirectionSteps);
  });

  it("should return updated floor paths", () => {
    const paths = updateFloorPaths(
      testData.mockPOIs[2],
      testData.mockPOIs[0],
      false
    );
    expect(paths).toEqual(testData.updatedFloorPaths);
  });
});
