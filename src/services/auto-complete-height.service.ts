import { Platform } from "react-native";
import { POI } from "../types/main";

/**
 * Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
 * @param startLocationSearchResults
 * @param startLocationInputValue
 * @param endLocationSearchResults
 * @param showTimePicker
 * @param endLocationInputValue
 */
export const getOmniboxAutoCompleteHeight = (
  startLocationSearchResults: POI[],
  startLocationInputValue: string,
  endLocationSearchResults: POI[],
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
 * Two function simply because all the inputs and values are different
 * @param searchResults
 */
export const getSearchBarAutoCompleteHeight = (searchResults: POI[]) => {
  const deafaultSearchBarHeight: number = 48;
  const searchBarHeight: number = 50;
  const autoCompleteElementHeight: number = 85;

  return searchResults
    ? searchResults.length * autoCompleteElementHeight + searchBarHeight
    : deafaultSearchBarHeight;
};
