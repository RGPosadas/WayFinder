import React from "react";
import {
  Platform,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  StatusBar
} from "react-native";
import { SimpleLineIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Autocomplete from "./autocomplete.component";
import { POI, TravelState } from "../../types/main";
import SeparatorSVG from "../../../assets/line-separator.svg";
import { getSearchBarAutoCompleteHeight } from "../../services/autoCompleteHeight.service";

/**
 * the name and types of the properties types accepted
 * by the Search component
 */
interface IProps {
  setUserLocation: () => void;
  setEndLocation: (poi: POI) => void;
  queryText: (
    userInput: string,
    setAState: (poi: POI[]) => void,
    onChange: (string: string) => void
  ) => void;
  setTravelState: (state: TravelState) => void;
}

/**
 * Search component for indoor points of interest's
 * @param setEndLocation Function called to update endLocation
 * @param queryText Function to query POI based on user input
 */
const Search = ({
  setEndLocation,
  queryText,
  setUserLocation,
  setTravelState
}: IProps) => {
  const [value, onChangeText] = React.useState("");
  const [autoCompleteValues, setAutocomplete] = React.useState(null);

  const setEndLocationAndStartSearch = (poi: POI) => {
    setTravelState(TravelState.PLANNING);
    setEndLocation(poi);
  };

  return (
    <View
      testID="searchContainer"
      style={[
        styles.container,
        { height: getSearchBarAutoCompleteHeight(autoCompleteValues) }
      ]}
    >
      <View style={styles.parent}>
        <View style={styles.view}>
          <View style={styles.view}>
            <SimpleLineIcons name="menu" color="#AA2B45" size={26} />
            <SeparatorSVG style={styles.lineSeperator} />
            <Feather name="search" color="#AA2B45" size={24} />
            <TextInput
              testID="searchInput"
              style={styles.input}
              onChangeText={text =>
                queryText(text, setAutocomplete, onChangeText)
              }
              value={value}
              onFocus={() => setUserLocation()}
            />
          </View>
          <FontAwesome name="microphone" color="#AA2B45" size={24} />
        </View>
      </View>
      {autoCompleteValues && value !== "" && (
        <Autocomplete
          testID="autocomplete"
          style={styles.autocomplete}
          autoCompleteValues={autoCompleteValues}
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
    width: Dimensions.get("window").width - 30,
    zIndex: 1,
    height: 48,
    elevation: 5
  },
  parent: {
    position: "relative",
    borderWidth: 2,
    borderColor: "#AA2B45",
    height: 48,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    zIndex: 2
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
  input: {
    marginLeft: 5,
    flex: 1,
    alignSelf: "stretch"
  },
  autocomplete: {}
});
