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
  Button,
  Image
} from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { POI, Location, MarkerLocation, TravelState } from "../../types/main";
import Autocomplete from "./autocomplete.component";
import StartTravel from "./start-travel.component";
import {
  CONCORDIA_RED,
  INPUT_BORDER_COLOR,
  screenWidth
} from "../../constants/style";
import { getOmniboxAutoCompleteHeight } from "../../services/auto-complete-height.service";
import { showPickedTime } from "../../services/show-time.service";

/**
 * the name and types of the properties types accepted
 * by the OmniboxDirectionsProps component
 */
export interface OmniboxDirectionsProps {
  currentLocation: Location;
  startLocation: MarkerLocation;
  endLocation: POI;
  setStartLocation: (marker: MarkerLocation) => void;
  setEndLocation: (poi: POI) => void;
  queryText: (
    userInput: string,
    setAutocomplete: (poi: POI[]) => void,
    onChangeText: (string: string) => void
  ) => void;
  setEndLocationFocused: (bool: boolean) => void;
  endLocationFocused: boolean;
  setTravelState: (state: TravelState) => void;
}

/**
 * Displays the start and location with a departure time picker.
 * Displays the transportation options
 * @param endLocation
 * @param startLocation
 * @param setEndLocation Function called to update endLocation
 * @param setStartLocation Function called to update initial Location
 * @param queryText Function to query POI based on user input
 */
const OmniboxDirections = ({
  currentLocation,
  startLocation,
  endLocation,
  setStartLocation,
  setEndLocation,
  queryText,
  setEndLocationFocused,
  endLocationFocused,
  setTravelState
}: OmniboxDirectionsProps) => {
  const [startLocationDisplay, setStartLocationDisplay] = React.useState<
    string
  >(null);
  const [endLocationDisplay, setEndLocationDisplay] = React.useState<string>(
    endLocation.displayName
  );
  const [startAutoCompleteValues, setStartAutoCompleteValues] = React.useState<
    POI[]
  >(null);
  const [endAutoCompleteValues, setEndAutoCompleteValues] = React.useState<
    POI[]
  >(null);
  const [date, setDate] = React.useState<Date>(new Date());
  const [dateIsNow, setDateIsNow] = React.useState(true);
  const [showTimePicker, setshowTimePicker] = React.useState<boolean>(false);

  useEffect(() => {
    if (startLocation) setStartLocationDisplay(startLocation.displayName);
    setStartAutoCompleteValues(null);
  }, [startLocation]);

  useEffect(() => {
    setEndLocationDisplay(endLocation.displayName);
    setEndAutoCompleteValues(null);
  }, [endLocation]);

  useEffect(() => {
    if (currentLocation && !startLocation) {
      setStartLocation({
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
  const onChange = (event, pickedDate) => {
    setshowTimePicker(Platform.OS === "ios");
    if (pickedDate == null) {
      setDate(new Date());
      setDateIsNow(true);
    } else {
      setDate(pickedDate);
      setDateIsNow(false);
    }
  };

  const AutoCompleteHeight = getOmniboxAutoCompleteHeight(
    startAutoCompleteValues,
    startLocationDisplay,
    endAutoCompleteValues,
    showTimePicker,
    endLocationDisplay
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
              setEndLocation(null);
              setStartLocation(null);
              setEndLocationFocused(true);
              setTravelState(TravelState.NONE);
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
            <Image
              source={require("../../../assets/route.png")}
              style={{ height: 80, resizeMode: "contain" }}
            />
            <View style={styles.searchContainer}>
              <TextInput
                selectTextOnFocus
                key="startLocation"
                testID="searchInputInitialLocation"
                style={styles.input}
                onChangeText={text =>
                  queryText(
                    text,
                    setStartAutoCompleteValues,
                    setStartLocationDisplay
                  )
                }
                value={startLocationDisplay}
                onFocus={() => setEndLocationFocused(false)}
                onBlur={() => {
                  setStartLocationDisplay(startLocation.displayName);
                  setStartAutoCompleteValues(null);
                }}
              />
              <TextInput
                key="destinationLocation"
                testID="searchInputDestinationLocation"
                selectTextOnFocus
                style={styles.input}
                value={endLocationDisplay}
                onChangeText={text =>
                  queryText(
                    text,
                    setEndAutoCompleteValues,
                    setEndLocationDisplay
                  )
                }
                onFocus={() => setEndLocationFocused(true)}
                onBlur={() => {
                  setEndLocationDisplay(endLocation.displayName);
                  setEndAutoCompleteValues(null);
                }}
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              testID="timePickerButton"
              color={CONCORDIA_RED}
              onPress={() => setshowTimePicker(!showTimePicker)}
              title={`DEPART ${showPickedTime(date, dateIsNow)}`}
            />
            {showTimePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
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
              style={{ height: 26, resizeMode: "contain" }}
            />
          </View>
        </View>
        {((startAutoCompleteValues && startLocationDisplay !== "") ||
          (endAutoCompleteValues && endLocationDisplay !== "")) && (
          <Autocomplete
            testID="startLocation"
            style={styles.autocomplete}
            autoCompleteValues={
              startAutoCompleteValues || endAutoCompleteValues
            }
            setLocation={endLocationFocused ? setEndLocation : setStartLocation}
          />
        )}
      </SafeAreaView>
      {startLocation &&
        endLocation &&
        endLocationDisplay !== "" &&
        startLocationDisplay !== "" && (
          <StartTravel setTravelState={setTravelState} />
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
