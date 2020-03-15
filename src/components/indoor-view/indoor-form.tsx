import React, { Component } from "react";
import {
  Platform,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Autocomplete from "./autocomplete";
import { POI } from "../../types/main";
import { POIInfo } from "../../constants/poi.data";

//make a function for auto complete
//make component to show results of auto complete
//position component on view
//show component only when auto complete results are available.

export interface queryTextInput {
  text: string;
}

interface iProps {
  getDestination: (poi: POI) => void;
  getInitialLocation: (poi: POI) => void;
  destination : POI;
  initialLocation: POI;
}
export default function IndoorForm(props: iProps) {
  let x: POI = {};
  const [value, onChangeText] = React.useState("");
  const [autoCompleteValues, setAutocomplete] = React.useState(null);
  const [query, setQuery] = React.useState("");

  //Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
  let autocompleteHeight = autoCompleteValues ? autoCompleteValues.length * 51 + 50 : 48

  const queryText = (input: queryTextInput) => {
    let classes: POI[] = POIInfo.filter(poi => {
      return (
        poi.displayName.toUpperCase().search(input.text.toUpperCase()) !== -1
      );
    });

    let narrowedClasses: POI[] = classes.slice(0, 5);

    setAutocomplete([...narrowedClasses]);
    onChangeText(input.text);
  };

  return (
    <View style={[styles.container, {height: autocompleteHeight}]}>
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
              // key={autocomplete}
              style={styles.input}
              onChangeText={text => queryText({ text})}
              value={value}
            />
          </View>
          <Image source={require("../../../assets/mic.png")}></Image>
        </View>

      </View>
      {autoCompleteValues && value != "" &&
        <Autocomplete
            style={styles.autocomplete}
            autoCompleteValues={autoCompleteValues}
            selectedLocation={props.getDestination}
        ></Autocomplete>
      }
    </View>
  );
}

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
    zIndex: 2,
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
    alignSelf: "stretch",
  },
  autocomplete: {
  }
});
