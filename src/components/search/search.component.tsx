import React from "react";
import { Platform, TextInput, StyleSheet, View, StatusBar } from "react-native";
import { SimpleLineIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Autocomplete from "./autocomplete.component";
import { POI, TravelState } from "../../types/main";
import SeparatorSVG from "../../../assets/line-separator.svg";
import { getSearchBarAutoCompleteHeight } from "../../services/auto-complete-height.service";
import {
  screenWidth,
  CONCORDIA_RED,
  WHITE_BACKGROUND_COLOR
} from "../../constants/style";

/**
 * the name and types of the properties types accepted
 * by the Search component
 */
interface IProps {
  setUserCurrentLocation: () => void;
  setEndLocation: (poi: POI) => void;
  setTravelState: (state: TravelState) => void;
  updateSearchResults: (
    userInput: string,
    setAState: (poi: POI[]) => void,
    updateInputValue: (text: string) => void
  ) => void;
}

/**
 * Search component for indoor points of interest's
 * @param setEndLocation
 * @param setUserCurrentLocation
 * @param setTravelState
 * @param updateSearchResults
 */
const Search = ({
  setEndLocation,
  setUserCurrentLocation,
  setTravelState,
  updateSearchResults
}: IProps) => {
  const [value, onChangeText] = React.useState("");
  const [searchResults, setAutocomplete] = React.useState(null);

  const setEndLocationAndStartSearch = (poi: POI) => {
    setTravelState(TravelState.PLANNING);
    setEndLocation(poi);
  };

  return (
    <View
      testID="searchContainer"
      style={StyleSheet.flatten([
        styles.container,
        { height: getSearchBarAutoCompleteHeight(searchResults) }
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
              onChangeText={text =>
                updateSearchResults(text, setAutocomplete, onChangeText)
              }
              value={value}
              onFocus={() => setUserCurrentLocation()}
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
    elevation: 5
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
    zIndex: 2
  },
  menu_icon: {
    color: CONCORDIA_RED
  },
  lineSeperator: {
    marginLeft: 16,
    marginRight: 16
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  search_icon: {
    color: CONCORDIA_RED
  },
  input: {
    marginLeft: 5,
    flex: 1,
    alignSelf: "stretch"
  },
  mic_icon: {
    color: CONCORDIA_RED
  },
  searchResults: {}
});
