import { Platform } from "react-native";
import { POI, Building } from "../types/main";

class DynamicStylingService {
  private static instance = new DynamicStylingService();

  private constructor() {
    // noop
  }

  public static getInstance() {
    return DynamicStylingService.instance;
  }

  /**
   * Dynamic height adjustment of AutoComplete component for Omnibox.
   *
   * @param startLocationSearchResults
   * @param startLocationInputValue
   * @param endLocationSearchResults
   * @param showTimePicker
   * @param endLocationInputValue
   */
  public getOmniboxAutoCompleteHeight = (
    startLocationSearchResults: (POI | Building)[],
    startLocationInputValue: string,
    endLocationSearchResults: (POI | Building)[],
    showTimePicker: boolean,
    endLocationInputValue: string
  ) => {
    const heightAutoCompleteElement: number = 75;
    const autoCompleteHeight: number = 235;
    const defaultAutoCompleteHeight: number = 260;

    if (startLocationSearchResults && startLocationInputValue !== "") {
      return (
        startLocationSearchResults.length * heightAutoCompleteElement +
        autoCompleteHeight
      );
    }
    if (endLocationSearchResults && endLocationInputValue !== "") {
      return (
        endLocationSearchResults.length * heightAutoCompleteElement +
        autoCompleteHeight
      );
    }
    if (Platform.OS === "ios" && showTimePicker) {
      return 240 + autoCompleteHeight;
    }
    return defaultAutoCompleteHeight;
  };

  /**
   * Dynamic height adjustment of AutoComplete component for Search.
   *
   * @param searchResults
   */
  public getSearchBarAutoCompleteHeight = (
    searchResults: (POI | Building)[]
  ) => {
    const deafaultSearchBarHeight: number = 48;
    const searchBarHeight: number = 50;
    const autoCompleteElementHeight: number = 85;

    return searchResults
      ? searchResults.length * autoCompleteElementHeight + searchBarHeight
      : deafaultSearchBarHeight;
  };
}
export default DynamicStylingService;
