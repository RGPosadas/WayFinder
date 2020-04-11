import { Range, ZoomLevel, SearchResult, Location } from "../types/main";
import {
  Buildings,
  POIToSearchResult,
  buildingToSearchResult,
  POIInfo,
} from "../constants";
import { CURRENT_LOCATION_DISPLAY_TEXT } from "../styles";

class UtilityService {
  private indoorRange: Range = {
    min: 0,
    max: 0.0025,
  };

  private outdoorRange: Range = {
    min: 0.0025,
    max: 0.02,
  };

  private campusRange: Range = {
    min: 0.02,
    max: 0.09,
  };

  private locationsToSearch: SearchResult[] = [
    ...POIInfo.map(POIToSearchResult),
    ...Buildings.map(buildingToSearchResult),
  ];

  private static instance = new UtilityService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return UtilityService.instance;
  }

  /**
   * Converts a given Location into a search result.
   *
   * A search result is a representation of a Location used for the
   * autocomplete component, and can be a Building, POI, Location or Campus.
   *
   * @param id ID of Location
   * @param displayName Name that is displayed
   * @param location Location (Latitude and Longitude)
   * @param searchName String used for search, by default it is the value of displayName
   * @param extraInformation Additional Information about the location, by default it is an empty string
   */
  public locationToSearchResult = (
    id: string,
    displayName: string,
    location: Location,
    searchName: string = displayName,
    extraInformation: string = ""
  ): SearchResult => {
    return {
      id,
      displayName,
      location,
      searchName,
      extraInformation,
    };
  };

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
   * Filters an array of POIs or buildings based on users input
   * @param inputText Input text for search
   * @param setSearchResults Function for setting state of search results
   * @param setDisplayValue Function for setting display text of search
   * @param currentLocation Current location of User
   *
   * TODO: Add current location as a searchable element by passing it as
   * a parameter and including it in the search.
   */
  public updateSearchResults = (
    inputText: string,
    setSearchResults: (locations: SearchResult[]) => void,
    setLocationDisplay: (display: string) => void,
    currentLocation: Location
  ) => {
    const locations: SearchResult[] = this.locationsToSearch.filter(
      (location) => {
        return (
          location.searchName.toLowerCase().search(inputText.toLowerCase()) !==
          -1
        );
      }
    );

    if (currentLocation) {
      const SearchResultMarker = this.locationToSearchResult(
        CURRENT_LOCATION_DISPLAY_TEXT,
        CURRENT_LOCATION_DISPLAY_TEXT,
        currentLocation
      );

      locations.unshift(SearchResultMarker);
    }
    const narrowedLocations: SearchResult[] =
      inputText === "" ? [] : locations.slice(0, 5);

    setSearchResults([...narrowedLocations]);
    setLocationDisplay(inputText);
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
