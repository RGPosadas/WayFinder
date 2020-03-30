import { POI } from "../types/main";
import { POIInfo } from "../constants/poi.data";

/**
 * Filters an array of POIs based on users input
 * @param userInput
 * @param setAState
 * @param updateInputValue
 */
export const updateSearchResults = (
  userInput: string,
  setAState: (poi: POI[]) => void,
  updateInputValue: (text: string) => void
) => {
  const POIs: POI[] = POIInfo.filter(poi => {
    return poi.displayName.toUpperCase().search(userInput.toUpperCase()) !== -1;
  });

  const narrowedPOIs: POI[] = POIs.slice(0, 5);

  setAState([...narrowedPOIs]);
  updateInputValue(userInput);
};
