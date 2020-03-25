import React, { useEffect } from "react";
import {
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
import { POI, Location, MarkerLocation } from "../../types/main";
import Autocomplete from "./autocomplete.component";
import StartTravel from "./start-travel.component";
import {
  CONCORDIA_RED,
  INPUT_BORDER_COLOR,
  screenWidth
} from "../../constants/style";
import ShuttleSVG from "../../../assets/shuttle.svg";
import RouteSVG from "../../../assets/route.svg";
import { getOmniboxAutoCompleteHeight } from "../../services/autoCompleteHeight.service";

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
  initialLocation: MarkerLocation;
  setDestination: (poi: POI) => void;
  setInitialLocation: (marker: MarkerLocation | POI | null) => void;
  queryText: (
    userInput: string,
    setAutocomplete: (poi: POI[]) => void,
    onChangeText: (string: string) => void
  ) => void;
  setIsDestinationFocused: (bool: boolean) => void;
  isDestinationFocused: Boolean;
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
  setIsDestinationFocused,
  isDestinationFocused,
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

  const AutoCompleteHeight = getOmniboxAutoCompleteHeight(
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
              setIsDestinationFocused(true);
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
            <RouteSVG />
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
                onFocus={() => setIsDestinationFocused(false)}
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
                onFocus={() => setIsDestinationFocused(true)}
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
            <ShuttleSVG width={35} height={40} />
          </View>
        </View>
        {((autoCompleteValues && value !== "") ||
          (autoCompleteValuesDest && destinationValue !== "")) && (
          <Autocomplete
            testID="initialLocation"
            style={styles.autocomplete}
            autoCompleteValues={autoCompleteValues || autoCompleteValuesDest}
            setLocation={
              isDestinationFocused ? setDestination : setInitialLocation
            }
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
    borderColor: INPUT_BORDER_COLOR,
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
    borderColor: INPUT_BORDER_COLOR,
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
    width: screenWidth
  },
  button: {
    marginTop: Platform.OS === "android" ? 20 : 0
  }
});
