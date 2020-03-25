import { POI } from "../types/main";
import { POIInfo } from "../constants/poi.data";

/**
 * Filters an array of POIs based on users input
 * @param userInput
 */
export const queryText = (
  userInput: string,
  setAState: (poi: POI[]) => void,
  onChangeText: (text: string) => void
) => {
  const POIs: POI[] = POIInfo.filter(poi => {
    return poi.displayName.toUpperCase().search(userInput.toUpperCase()) !== -1;
  });

  const narrowedPOIs: POI[] = POIs.slice(0, 5);

  setAState([...narrowedPOIs]);
  onChangeText(userInput);
};
