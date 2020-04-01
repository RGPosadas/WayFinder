import { Range, ZoomLevel, POI } from "../types/main";
import { POIInfo } from "../constants/poi.data";

class UtilityService {
  private indoorRange: Range = {
    min: 0,
    max: 0.0025
  };

  private outdoorRange: Range = {
    min: 0.0025,
    max: 0.02
  };

  private campusRange: Range = {
    min: 0.02,
    max: 0.09
  };

  private static instance = new UtilityService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return UtilityService.instance;
  }

  /**
   *Converts a time to a string by using the current or specified locale.
   * @param date
   * @param dateIsNow
   */
  public showPickedTime = (date: Date, dateIsNow: boolean) => {
    if (dateIsNow) {
      return "NOW";
    }

    return `AT ${date
      .toLocaleTimeString()
      .substring(0, date.toLocaleTimeString().lastIndexOf(":"))}`;
  };

  /**
   * Filters an array of POIs based on users input
   * @param inputText Input text for search
   * @param setSearchResults Function for setting state of search results
   * @param setDisplayValue Function for setting display text of search
   */
  public updateSearchResults = (
    inputText: string,
    setSearchResults: (poi: POI[]) => void,
    setDisplayValue: (text: string) => void
  ) => {
    const POIs: POI[] = POIInfo.filter(poi => {
      return (
        poi.displayName.toUpperCase().search(inputText.toUpperCase()) !== -1
      );
    });

    const narrowedPOIs: POI[] = POIs.slice(0, 5);

    setSearchResults([...narrowedPOIs]);
    setDisplayValue(inputText);
  };

  /**
   * Check if a given number falls between a range.
   *
   * @param range Range to check for
   * @param num Number to check for
   */
  public inRange = (range: Range, num: number) => {
    return num >= range.min && num <= range.max;
  };

  /**
   * Returns the ZoomLevel corresponding to the given Latitude Delta
   * @param latDelta Latitude Delta of current region
   * @returns The corresponding ZoomLevel
   */
  public getZoomLevelByLatDelta = (latDelta: number): ZoomLevel => {
    if (this.inRange(this.indoorRange, latDelta)) {
      return ZoomLevel.INDOOR;
    }
    if (this.inRange(this.outdoorRange, latDelta)) {
      return ZoomLevel.OUTDOOR;
    }
    if (this.inRange(this.campusRange, latDelta)) {
      return ZoomLevel.CAMPUS;
    }
    return ZoomLevel.NONE;
  };
}

export default UtilityService;
