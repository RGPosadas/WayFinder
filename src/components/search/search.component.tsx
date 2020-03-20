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
 * the name and types of the properties types accepted
 * by the Search component
 */
interface IProps {
  setDestination: (poi: POI) => void;
  queryText: (
    userInput: string,
    setAutocomplete: ([]) => void,
    onChangeText: (string) => void
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

  //Dynamic height adjustment of parent. Without this, autoComplete will not be pressable

  const getAutoCompleteHeight = () => {
    return autoCompleteValues ? autoCompleteValues.length * 51 + 50 : 48;
  };
  return (
    <View
      testID={"searchContainer"}
      style={[styles.container, { height: getAutoCompleteHeight() }]}
    >
      <View style={styles.parent}>
        <View style={styles.view}>
          <View style={styles.view}>
            <Image
              source={require("../../../assets/hamburger_icon.png")}
            ></Image>
            <Image
              style={styles.lineSeperator}
              source={require("../../../assets/line-separator.png")}
            ></Image>
            <Image source={require("../../../assets/search.png")}></Image>
            <TextInput
              testID={"searchInput"}
              style={styles.input}
              onChangeText={text =>
                queryText(text, setAutocomplete, onChangeText)
              }
              value={value}
            />
          </View>
          <Image source={require("../../../assets/mic.png")}></Image>
        </View>
      </View>
      {autoCompleteValues && value != "" && (
        <Autocomplete
          testID={"autocomplete"}
          style={styles.autocomplete}
          autoCompleteValues={autoCompleteValues}
          setLocation={setDestination}
        ></Autocomplete>
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
    top: Platform.OS === "android" ? 25 + 48 : 0 + 48,
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
  safeArea: {
    flex: 1,
    alignSelf: "center",
    top: Platform.OS === "android" ? 25 + 48 : 0 + 48,
    width: Dimensions.get("window").width - 30,
    borderWidth: 2,
    borderColor: "#AA2B45",
    height: 48,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between"
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
