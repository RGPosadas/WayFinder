import React, { useEffect } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  Platform,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Button
} from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { POI, UserLocation, Location } from "../../types/main";
import Autocomplete from "./autocomplete.component";
import StartTravel from "./start-travel.component";
import { CONCORDIA_RED } from "../../constants/style";

/**
 * Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
 */
export const getAutoCompleteHeight = (
  autoCompleteValues: string[],
  value: string,
  autoCompleteValuesDest: string[],
  showTimePicker: boolean,
  destinationValue: string
) => {
  const heightAutoCompleteElement: number = 51;
  const autoCompleteHeight: number = 235;
  const defaultAutoCompleteHeight: number = 260;

  if (autoCompleteValues && value !== "") {
    return (
      autoCompleteValues.length * heightAutoCompleteElement + autoCompleteHeight
    );
  }
  if (autoCompleteValuesDest && destinationValue !== "") {
    return (
      autoCompleteValuesDest.length * heightAutoCompleteElement +
      autoCompleteHeight
    );
  }
  if (Platform.OS === "ios" && showTimePicker) {
    return 240 + autoCompleteHeight;
  }
  return defaultAutoCompleteHeight;
};

const getTimeToString = (date: Date) => {
  const hours = `0${date.getHours().toString()}`;
  const minutes = `0${date.getMinutes().toString()}`;

  const hoursToShow = hours.substring(hours.length - 2, hours.length);
  const minutessToShow = minutes.substring(minutes.length - 2, minutes.length);

  return `${hoursToShow}:${minutessToShow}`;
};
/**
 * the name and types of the properties types accepted
 * by the OmniboxDirectionsProps component
 */
export interface OmniboxDirectionsProps {
  destination: POI;
  currentLocation: Location;
  initialLocation: POI | UserLocation;
  setDestination: (poi: POI) => void;
  setInitialLocation: (poi: POI | UserLocation | null) => void;
  queryText: (
    userInput: string,
    setAutocomplete: (poi: POI[]) => void,
    onChangeText: (string: string) => void
  ) => void;
  setMarkerSetsDestination: (bool: boolean) => void;
  setStartTravelPlan: (bool: boolean) => void;
}

/**
 * Displays the start and location with a departure time picker.
 * Displays the transportation options
 * @param destination
 * @param initialLocation
 * @param setDestination Function called to update destination
 * @param setInitialLocation Function called to update initial Location
 * @param queryText Function to query POI based on user input
 */
const OmniboxDirections = ({
  destination,
  currentLocation,
  initialLocation,
  setDestination,
  setInitialLocation,
  queryText,
  setMarkerSetsDestination,
  setStartTravelPlan
}: OmniboxDirectionsProps) => {
  const [value, onChangeText] = React.useState(null);
  const [destinationValue, setDestinationValue] = React.useState(
    destination.displayName
  );
  const [autoCompleteValues, setAutocomplete] = React.useState(null);
  const [autoCompleteValuesDest, setAutocompleteDest] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [showTimePicker, setshowTimePicker] = React.useState(false);

  useEffect(() => {
    if (initialLocation) onChangeText(initialLocation.displayName);
    setAutocomplete(null);
  }, [initialLocation]);

  useEffect(() => {
    setDestinationValue(destination.displayName);
    setAutocompleteDest(null);
  }, [destination]);

  useEffect(() => {
    if (currentLocation && !initialLocation) {
      setInitialLocation({
        id: "User Location",
        displayName: "Current Location",
        location: currentLocation
      });
    }
  });

  /**
   * Change the value of the departure time
   * @param event
   * @param date
   */
  const onChange = (event, pickDate) => {
    setshowTimePicker(Platform.OS === "ios");
    setDate(pickDate);
  };

  /**
   * initializes the date
   */
  const initDate = () => {
    setDate(new Date());
  };

  const AutoCompleteHeight = getAutoCompleteHeight(
    autoCompleteValues,
    value,
    autoCompleteValuesDest,
    showTimePicker,
    destinationValue
  );

  return (
    <>
      <SafeAreaView
        style={[styles.safeAreaView, { height: AutoCompleteHeight }]}
      >
        <View style={styles.contentContainer}>
          <TouchableOpacity
            testID="backArrow"
            onPress={() => {
              setDestination(null);
              setInitialLocation(null);
              setMarkerSetsDestination(true);
              setStartTravelPlan(false);
            }}
          >
            <AntDesign
              name="arrowleft"
              color="#AA2B45"
              size={26}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <View style={styles.directionsWaypoints}>
            <Image source={require("../../../assets/route.png")} />
            <View style={styles.searchContainer}>
              <TextInput
                selectTextOnFocus
                key="initialLocation"
                testID="searchInputInitialLocation"
                style={styles.input}
                onChangeText={text =>
                  queryText(text, setAutocomplete, onChangeText)
                }
                value={value}
                onFocus={() => setMarkerSetsDestination(false)}
              />
              <TextInput
                key="destinationLocation"
                testID="searchInputDestinationLocation"
                selectTextOnFocus
                style={styles.input}
                value={destinationValue}
                onChangeText={text =>
                  queryText(text, setAutocompleteDest, setDestinationValue)
                }
                onFocus={() => setMarkerSetsDestination(true)}
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              testID="timePickerButton"
              color={CONCORDIA_RED}
              onPress={() => setshowTimePicker(!showTimePicker)}
              title={`Depart at: ${date ? `${getTimeToString(date)}` : "now"}`}
            />
            {showTimePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date || initDate}
                mode="time"
                is24Hour
                display="spinner"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.travelModeSwitcher}>
            <FontAwesome name="car" size={24} style={{ marginLeft: 15 }} />
            <FontAwesome
              name="wheelchair"
              size={24}
              style={{ marginLeft: 15 }}
            />
            <MaterialIcons
              name="directions-walk"
              size={28}
              style={{ marginLeft: 15 }}
            />
            <MaterialIcons
              name="directions-bus"
              size={28}
              style={{ marginLeft: 15 }}
            />
            <Image
              source={require("../../../assets/shuttle.png")}
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>
        {autoCompleteValues && value !== "" && (
          <Autocomplete
            testID="initialLocation"
            style={styles.autocomplete}
            autoCompleteValues={autoCompleteValues}
            setLocation={setInitialLocation}
          />
        )}
        {autoCompleteValuesDest && destinationValue !== "" && (
          <Autocomplete
            testID="destination"
            style={styles.autocomplete}
            autoCompleteValues={autoCompleteValuesDest}
            setLocation={setDestination}
          />
        )}
      </SafeAreaView>
      {initialLocation && destination && destinationValue !== "" && (
        <StartTravel setStartTravelPlan={setStartTravelPlan} />
      )}
    </>
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
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  autocomplete: {
    top: 260,
    width: Dimensions.get("window").width
  },
  button: {
    marginTop: Platform.OS === "android" ? 20 : 0
  }
});
