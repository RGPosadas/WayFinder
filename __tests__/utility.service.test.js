import UtilityService from "../src/services/utility.service";
import { ZoomLevel } from "../src/types/main";

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
    it("should call provided functions", () => {
      let mockSetSearchResults = jest.fn();
      let mockSetDisplayValue = jest.fn();

      utilityService.updateSearchResults(
        "",
        mockSetSearchResults,
        mockSetDisplayValue
      );

      expect(mockSetSearchResults).toHaveBeenCalledTimes(1);
      expect(mockSetDisplayValue).toHaveBeenCalledTimes(1);
    });
  });

  describe("inRange", () => {
    it("should return expected value", () => {
      let range = {
        min: 0,
        max: 1
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
