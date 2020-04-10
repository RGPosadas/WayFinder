import UtilityService from "../src/services/utility.service";
import { ZoomLevel } from "../src/types/main";
import { CURRENT_LOCATION_DISPLAY_TEXT } from "../src/styles";

describe("UtilityService", () => {
  const utilityService = UtilityService.getInstance();

  describe("showPickedTime", () => {
    it("should return expected format if date is now", () => {
      expect(utilityService.showPickedTime(null, true)).toEqual("NOW");
    });

    it("should return expected format if date is now", () => {
      let date = new Date();
      date.setHours(0);
      date.setMinutes(0);

      expect(utilityService.showPickedTime(date, false)).toEqual("AT 12:00");
    });
  });

  describe("updateSearchResults", () => {
    it("should call provided functions and return expected objects", () => {
      const mockCurrentLocation = {
        latitude: 45.497237,
        longitude: -73.578913,
      };

      const mockCurrentMarkerLocation = {
        id: CURRENT_LOCATION_DISPLAY_TEXT,
        displayName: CURRENT_LOCATION_DISPLAY_TEXT,
        location: mockCurrentLocation,
        searchName: CURRENT_LOCATION_DISPLAY_TEXT,
        extraInformation: "",
      };

      let mockSetSearchResults = jest.fn();
      let mockSetDisplayValue = jest.fn();

      utilityService.updateSearchResults(
        "test input",
        mockSetSearchResults,
        mockSetDisplayValue,
        mockCurrentLocation
      );

      expect(mockSetSearchResults).toHaveBeenCalledTimes(1);
      expect(mockSetDisplayValue).toHaveBeenCalledTimes(1);
      expect(mockSetSearchResults.mock.calls[0][0][0]).toEqual(
        mockCurrentMarkerLocation
      );
    });

    it("should call provided functions and return expected objects when no input and current location are provided", () => {
      let mockSetSearchResults = jest.fn();
      let mockSetDisplayValue = jest.fn();

      utilityService.updateSearchResults(
        "",
        mockSetSearchResults,
        mockSetDisplayValue,
        null
      );

      expect(mockSetSearchResults).toHaveBeenCalledTimes(1);
      expect(mockSetDisplayValue).toHaveBeenCalledTimes(1);
      expect(mockSetSearchResults.mock.calls[0][0]).toEqual([]);
    });
  });

  describe("inRange", () => {
    it("should return expected value", () => {
      let range = {
        min: 0,
        max: 1,
      };
      expect(utilityService.inRange(range, 1)).toEqual(true);
      expect(utilityService.inRange(range, 0)).toEqual(true);
      expect(utilityService.inRange(range, -0.1)).toEqual(false);
      expect(utilityService.inRange(range, 1.1)).toEqual(false);
    });
  });

  describe("getZoomLevelByLatDelta", () => {
    it("should return expected value", () => {
      expect(utilityService.getZoomLevelByLatDelta(0)).toEqual(
        ZoomLevel.INDOOR
      );
      expect(utilityService.getZoomLevelByLatDelta(0.0025)).toEqual(
        ZoomLevel.INDOOR
      );
      expect(utilityService.getZoomLevelByLatDelta(0.02)).toEqual(
        ZoomLevel.OUTDOOR
      );
      expect(utilityService.getZoomLevelByLatDelta(0.09)).toEqual(
        ZoomLevel.CAMPUS
      );
      expect(utilityService.getZoomLevelByLatDelta(-1)).toEqual(ZoomLevel.NONE);
    });
  });
});
