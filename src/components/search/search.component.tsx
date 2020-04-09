import React from "react";
import { Platform, TextInput, StyleSheet, View, StatusBar } from "react-native";
import { SimpleLineIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Autocomplete from "./autocomplete.component";
import {
  POI,
  TravelState,
  Building,
  MarkerLocation,
  SearchResult,
} from "../../types/main";
import SeparatorSVG from "../../../assets/line-separator.svg";
import {
  CONCORDIA_RED,
  WHITE_BACKGROUND_COLOR,
  screenWidth,
} from "../../styles";
import DynamicStylingService from "../../services/dynamic-styling.service";

/**
 * the name and types of the properties types accepted
 * by the Search component
 */
interface IProps {
  setUserCurrentLocation: () => void;
  setEndLocation: (location: MarkerLocation) => void;
  setTravelState: (state: TravelState) => void;
  updateSearchResults: (
    inputText: string,
    setSearchResults: (locations: SearchResult[]) => void,
    setDisplayValue: (text: string) => void
  ) => void;
}

/**
 * Search component for POIs and Buildings
 * @param setEndLocation
 * @param setUserCurrentLocation
 * @param setTravelState
 * @param updateSearchResults
 */
const Search = ({
  setEndLocation,
  setUserCurrentLocation,
  setTravelState,
  updateSearchResults,
}: IProps) => {
  const [value, onChangeText] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);

  /**
   * Starts the planning phase of a travel plan. Sets the end location.
   * Sets the start location to user's current location if available.
   *
   * @param location A POI or Building which will be set as the end location
   */
  const setEndLocationAndStartSearch = (location: POI | Building) => {
    setTravelState(TravelState.PLANNING);
    setUserCurrentLocation();
    setEndLocation(location);
  };

  return (
    <View
      testID="searchContainer"
      style={StyleSheet.flatten([
        styles.container,
        {
          height: DynamicStylingService.getInstance().getSearchBarAutoCompleteHeight(
            searchResults
          ),
        },
      ])}
    >
      <View style={styles.parent}>
        <View style={styles.view}>
          <View style={styles.view}>
            <SimpleLineIcons name="menu" size={26} style={styles.menu_icon} />
            <SeparatorSVG style={styles.lineSeperator} />
            <Feather name="search" size={24} style={styles.search_icon} />
            <TextInput
              testID="searchInput"
              style={styles.input}
              onChangeText={(text) =>
                updateSearchResults(text, setSearchResults, onChangeText)
              }
              value={value}
            />
          </View>
          <FontAwesome name="microphone" size={24} style={styles.mic_icon} />
        </View>
      </View>
      {searchResults && value !== "" && (
        <Autocomplete
          style={styles.searchResults}
          searchResults={searchResults}
          setLocation={setEndLocationAndStartSearch}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    top: Platform.OS === "ios" ? 48 : StatusBar.currentHeight + 20,
    width: screenWidth - 30,
    zIndex: 1,
    height: 48,
    elevation: 5,
  },
  parent: {
    position: "relative",
    borderWidth: 2,
    borderColor: CONCORDIA_RED,
    height: 48,
    backgroundColor: WHITE_BACKGROUND_COLOR,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    zIndex: 2,
  },
  menu_icon: {
    color: CONCORDIA_RED,
  },
  lineSeperator: {
    marginLeft: 16,
    marginRight: 16,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  search_icon: {
    color: CONCORDIA_RED,
  },
  input: {
    marginLeft: 5,
    flex: 1,
    alignSelf: "stretch",
  },
  mic_icon: {
    color: CONCORDIA_RED,
  },
  searchResults: {},
});
