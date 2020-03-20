import React, { useEffect } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  Platform,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { POI } from "../../types/main";
import Autocomplete from "./autocomplete.component";
import SelectInput from "react-native-select-input-ios";

/**
 * the name and types of the properties types accepted
 * by the OmniboxDirectionsProps component
 */
export interface OmniboxDirectionsProps {
  destination: POI;
  initialLocation:
    | POI
    | { displayName: string; latitude: number; longitude: number };
  setDestination: (poi: POI) => void;
  setInitialLocation: (poi: POI | null) => void;
  queryText: (
    userInput: string,
    setAutocomplete: ([]) => void,
    onChangeText: (string) => void
  ) => void;
}

/**
 *
 * @param destination
 * @param initialLocation
 * @param setDestination Function called to update destination
 * @param setInitialLocation Function called to update initial Location
 * @param queryText Function to query POI based on user input
 */
const OmniboxDirections = ({
  destination,
  initialLocation,
  setDestination,
  setInitialLocation,
  queryText
}: OmniboxDirectionsProps) => {
  const [value, onChangeText] = React.useState(initialLocation.displayName);
  const [destinationValue, setDestinationValue] = React.useState(
    destination.displayName
  );
  const [autoCompleteValues, setAutocomplete] = React.useState(null);
  const [autoCompleteValuesDest, setAutocompleteDest] = React.useState(null);

  useEffect(() => {
    onChangeText(initialLocation.displayName);
    setAutocomplete(null);
  }, [initialLocation]);

  useEffect(() => {
    setDestinationValue(destination.displayName);
    setAutocompleteDest(null);
  }, [destination]);

  //Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
  let autocompleteHeight;
  if (autoCompleteValues && value != "") {
    autocompleteHeight = autoCompleteValues.length * 51 + 235;
  } else if (autoCompleteValuesDest && destinationValue != "") {
    autocompleteHeight = autoCompleteValuesDest.length * 51 + 235;
  } else {
    autocompleteHeight = 260;
  }

  const options = [
    { value: 0, label: "Departure time 9AM" },
    { value: 1, label: "bithc" },
    { value: 2, label: "please" },
    { value: 3, label: "dlsfjhlds" },
    { value: 4, label: "bisaljdfhlathc" },
    { value: 5, label: "bijsdfa lsdkfthc" },
    { value: 6, label: "biasjdk fdsthc" }
  ];
  return (
    <View style={[styles.safeAreaView, , { height: autocompleteHeight }]}>
      <View style={styles.contentContainer}>
        <TouchableOpacity
          testID={"backArrow"}
          onPress={() => setDestination(null)}
        >
          <AntDesign
            name={"arrowleft"}
            color={"#AA2B45"}
            size={26}
            style={styles.backArrow}
          ></AntDesign>
        </TouchableOpacity>
        <View style={styles.directionsWaypoints}>
          <Image source={require("../../../assets/route.png")}></Image>
          <View style={styles.searchContainer}>
            <TextInput
              testID={"searchInputInitialLocation"}
              selectTextOnFocus={true}
              style={styles.input}
              onChangeText={text =>
                queryText(text, setAutocomplete, onChangeText)
              }
              value={value}
            />
            <TextInput
              testID={"searchInputDestinationLocation"}
              selectTextOnFocus={true}
              style={styles.input}
              value={destinationValue}
              onChangeText={text =>
                queryText(text, setAutocompleteDest, setDestinationValue)
              }
            />
          </View>
        </View>
        <SelectInput style={styles.picker} value={0} options={options} />
        <View style={styles.travelModeSwitcher}>
          <FontAwesome name={"car"} size={24} style={{ marginLeft: 15 }} />
          <FontAwesome
            name={"wheelchair"}
            size={24}
            style={{ marginLeft: 15 }}
          />
          <MaterialIcons
            name={"directions-walk"}
            size={28}
            style={{ marginLeft: 15 }}
          />
          <MaterialIcons
            name={"directions-bus"}
            size={28}
            style={{ marginLeft: 15 }}
          />
          <Image
            source={require("../../../assets/shuttle.png")}
            style={{ marginLeft: 15 }}
          ></Image>
        </View>
      </View>
      {autoCompleteValues && value != "" && (
        <Autocomplete
          style={styles.autocomplete}
          autoCompleteValues={autoCompleteValues}
          setLocation={setInitialLocation}
        ></Autocomplete>
      )}
      {autoCompleteValuesDest && destinationValue != "" && (
        <Autocomplete
          style={styles.autocomplete}
          autoCompleteValues={autoCompleteValuesDest}
          setLocation={setDestination}
        ></Autocomplete>
      )}
    </View>
  );
};

export default OmniboxDirections;

const styles = StyleSheet.create({
  safeAreaView: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    zIndex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#F2F2F2",
    height: 235
  },
  contentContainer: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20
  },
  backArrow: {
    marginLeft: 10
  },
  directionsWaypoints: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 36
  },
  input: {
    height: 38,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    marginLeft: 10,
    marginBottom: 15,
    fontSize: 16,
    paddingLeft: 10
  },
  searchContainer: {
    flex: 1
  },
  picker: {
    marginLeft: Platform.OS === "ios" ? 38 : 36,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    height: Platform.OS === "ios" ? 35 : 45,
    marginBottom: 20
  },
  travelModeSwitcher: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  autocomplete: {
    top: 260,
    width: Dimensions.get("window").width
  }
});
