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

//make a function for auto complete
//make component to show results of auto complete
//position component on view
//show component only when auto complete results are available.

export interface queryTextInput {
  text: string;
  poi: string[];
}

export default function IndoorForm() {
  const poi: string[] = ["test1", "test2", "test3", "walmart"];

  const [value, onChangeText] = React.useState("");
  const [autoCompleteValues, setAutocomplete] = React.useState([...poi]);
  const [query, setQuery] = React.useState("");

  const queryText = (input: queryTextInput) => {
    let sanitizedText = input.text.toLowerCase();
    const queryResult: string[] = input.poi.filter(
      location => location.includes(sanitizedText) !== false
    );
    setAutocomplete([...queryResult]);
    onChangeText(input.text);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.view}>
        <View style={styles.view}>
          <Image source={require("../../../assets/hamburger_icon.png")}></Image>
          <Image
            style={styles.lineSeperator}
            source={require("../../../assets/line-separator.png")}
          ></Image>
          <Image source={require("../../../assets/search.png")}></Image>
          <TextInput
            // key={autocomplete}
            style={styles.input}
            onChangeText={text => queryText({ text, poi })}
            value={value}
          />
        </View>
        <Image source={require("../../../assets/mic.png")}></Image>
      </SafeAreaView>
      <Autocomplete autoCompleteValues={autoCompleteValues}></Autocomplete>
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
    borderWidth: 2,
    borderColor: "#AA2B45",
    height: 48,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "space-between",
    zIndex: 500
  },
  safeArea: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
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
    zIndex: 999
  }
});
