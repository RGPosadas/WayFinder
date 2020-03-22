import React from "react";
import {
  Platform,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  View
} from "react-native";
import Autocomplete from "./autocomplete.component";
import { POI } from "../../types/main";

/**
 * Dynamic height adjustment of parent. Without this, autoComplete will not be pressable
 */
export const getAutoCompleteHeight = (autoCompleteValues?: string[]) => {
  const deafaultSearchBarHeight: number = 48;
  const searchBarHeight: number = 50;
  const autoCompleteElementHeight: number = 51;

  return autoCompleteValues
    ? autoCompleteValues.length * autoCompleteElementHeight + searchBarHeight
    : deafaultSearchBarHeight;
};

/**
 * the name and types of the properties types accepted
 * by the Search component
 */
interface IProps {
  setDestination: (poi: POI) => void;
  queryText: (
    userInput: string,
    setAutocomplete: (poi: POI[]) => void,
    onChangeText: (string: string) => void
  ) => void;
}

/**
 * Search component for indoor points of interest's
 * @param getDestination Function called to update destination
 * @param queryText Function to query POI based on user input
 */
const Search = ({ setDestination, queryText }: IProps) => {
  const [value, onChangeText] = React.useState("");
  const [autoCompleteValues, setAutocomplete] = React.useState(null);

  return (
    <View
      testID="searchContainer"
      style={[
        styles.container,
        { height: getAutoCompleteHeight(autoCompleteValues) }
      ]}
    >
      <View style={styles.parent}>
        <View style={styles.view}>
          <View style={styles.view}>
            <Image source={require("../../../assets/hamburger_icon.png")} />
            <Image
              style={styles.lineSeperator}
              source={require("../../../assets/line-separator.png")}
            />
            <Image source={require("../../../assets/search.png")} />
            <TextInput
              testID="searchInput"
              style={styles.input}
              onChangeText={text =>
                queryText(text, setAutocomplete, onChangeText)
              }
              value={value}
            />
          </View>
          <Image source={require("../../../assets/mic.png")} />
        </View>
      </View>
      {autoCompleteValues && value !== "" && (
        <Autocomplete
          testID="autocomplete"
          style={styles.autocomplete}
          autoCompleteValues={autoCompleteValues}
          setLocation={setDestination}
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
    top: Platform.OS === "ios" ? 48 : 73,
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
    flex: 1,
    alignSelf: "stretch"
  },
  autocomplete: {}
});
