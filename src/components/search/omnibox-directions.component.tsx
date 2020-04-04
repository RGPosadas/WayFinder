import React, { useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Text,
  Image
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  POI,
  Location,
  MarkerLocation,
  TravelState,
  Building
} from "../../types/main";
import Autocomplete from "./autocomplete.component";
import StartTravel from "./start-travel.component";
import {
  CONCORDIA_RED,
  INPUT_BORDER_COLOR,
  INACTIVE_BUTTON_COLOR,
  INACTIVE_TEXT_COLOR,
  INACTIVE_ICON_COLOR,
  screenWidth,
  CURRENT_LOCATION_DISPLAY_TEXT
} from "../../constants/style";
import DynamicStylingService from "../../services/dynamic-styling.service";
import UtilityService from "../../services/utility.service";

/**
 * the name and types of the properties types accepted
 * by the OmniboxDirectionsProps component
 */
export interface OmniboxDirectionsProps {
  currentLocation: Location;
  startLocation: MarkerLocation | Building;
  endLocation: MarkerLocation | Building;
  setStartLocation: (location: MarkerLocation | Building) => void;
  setEndLocation: (location: MarkerLocation | Building) => void;
  setEndLocationFocused: (bool: boolean) => void;
  endLocationFocused: boolean;
  setTravelState: (state: TravelState) => void;
  updateSearchResults: (
    userInput: string,
    setAState: (locations: (POI | Building)[]) => void,
    updateInputValue: (text: string) => void
  ) => void;
  startLocationDisplay: string;
  setStartLocationDisplay: (displayName: string) => void;
}

/**
 * Displays the start and location with a departure time picker.
 * Displays the transportation options
 * @param currentLocation
 * @param startLocation
 * @param endLocation
 * @param setStartLocation
 * @param setEndLocation
 * @param setEndLocationFocused
 * @param endLocationFocused
 * @param setTravelState
 * @param updateSearchResults
 */
const OmniboxDirections = ({
  currentLocation,
  startLocation,
  endLocation,
  setStartLocation,
  setEndLocation,
  setEndLocationFocused,
  endLocationFocused,
  setTravelState,
  updateSearchResults,
  startLocationDisplay,
  setStartLocationDisplay
}: OmniboxDirectionsProps) => {
  const [endLocationDisplay, setEndLocationDisplay] = React.useState<string>(
    endLocation.displayName
  );
  const [
    startLocationSearchResults,
    setStartLocationSearchResults
  ] = React.useState<(POI | Building)[]>(null);
  const [
    endLocationSearchResults,
    setEndLocationSearchResults
  ] = React.useState<(POI | Building)[]>(null);
  const [date, setDate] = React.useState<Date>(new Date());
  const [dateIsNow, setDateIsNow] = React.useState(true);
  const [showTimePicker, setshowTimePicker] = React.useState<boolean>(false);

  useEffect(() => {
    if (startLocation) setStartLocationDisplay(startLocation.displayName);
    setStartLocationSearchResults(null);
  }, [startLocation]);

  useEffect(() => {
    setEndLocationDisplay(endLocation.displayName);
    setEndLocationSearchResults(null);
  }, [endLocation]);

  useEffect(() => {
    if (currentLocation && !startLocation) {
      setStartLocation({
        id: "User Location",
        displayName: CURRENT_LOCATION_DISPLAY_TEXT,
        location: currentLocation
      });
    }
  });

  /**
   * Change the value of the departure time
   * @param event
   * @param pickedDate
   */
  const onDateChange = (event: any, pickedDate: Date) => {
    setshowTimePicker(Platform.OS === "ios");
    if (pickedDate == null) {
      setDate(new Date());
      setDateIsNow(true);
    } else {
      setDate(pickedDate);
      setDateIsNow(false);
    }
  };

  const AutoCompleteHeight = DynamicStylingService.getInstance().getOmniboxAutoCompleteHeight(
    startLocationSearchResults,
    startLocationDisplay,
    endLocationSearchResults,
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
            <AntDesign name="arrowleft" size={26} style={styles.backArrow} />
          </TouchableOpacity>
          <View style={styles.directionsWaypoints}>
            <Image
              source={require("../../../assets/route.png")}
              style={styles.routeIcon}
            />
            <View style={styles.searchContainer}>
              <TextInput
                selectTextOnFocus
                key="startLocation"
                testID="searchInputInitialLocation"
                style={styles.input}
                onChangeText={inputText =>
                  updateSearchResults(
                    inputText,
                    setStartLocationSearchResults,
                    setStartLocationDisplay
                  )
                }
                value={startLocationDisplay}
                onFocus={() => setEndLocationFocused(false)}
                onBlur={() => {
                  if (startLocation) {
                    setStartLocationDisplay(startLocation.displayName);
                  }
                  setStartLocationSearchResults(null);
                }}
              />
              <TextInput
                key="destinationLocation"
                testID="searchInputDestinationLocation"
                selectTextOnFocus
                style={styles.input}
                value={endLocationDisplay}
                onChangeText={inputText =>
                  updateSearchResults(
                    inputText,
                    setEndLocationSearchResults,
                    setEndLocationDisplay
                  )
                }
                onFocus={() => setEndLocationFocused(true)}
                onBlur={() => {
                  if (endLocation) {
                    setEndLocationDisplay(endLocation.displayName);
                  }
                  setEndLocationSearchResults(null);
                }}
              />
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              testID="timePickerButton"
              onPress={() => setshowTimePicker(!showTimePicker)}
              style={styles.datePickerButton}
            >
              <Text
                style={styles.datePickerText}
              >{`DEPART ${UtilityService.getInstance().showPickedTime(
                date,
                dateIsNow
              )}`}</Text>
              <Entypo
                name="chevron-down"
                size={24}
                style={styles.datePickerChevron}
              />
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour
                display="spinner"
                onChange={onDateChange}
              />
            )}
          </View>
          <View style={styles.travelModeSwitcher}>
            <TouchableOpacity>
              <FontAwesome name="car" size={24} style={styles.travelModeIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome
                name="wheelchair"
                size={24}
                style={styles.travelModeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="directions-walk"
                size={28}
                style={styles.travelModeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="directions-bus"
                size={28}
                style={styles.travelModeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/shuttle.png")}
                style={styles.shuttleIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {((startLocationSearchResults && startLocationDisplay !== "") ||
          (endLocationSearchResults && endLocationDisplay !== "")) && (
          <Autocomplete
            style={styles.autocomplete}
            searchResults={
              startLocationSearchResults || endLocationSearchResults
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
    width: screenWidth,
    backgroundColor: INACTIVE_BUTTON_COLOR,
    height: 235
  },
  contentContainer: {
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 20
  },
  backArrow: {
    marginLeft: 10,
    color: CONCORDIA_RED
  },
  directionsWaypoints: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 36
  },
  routeIcon: { height: 80, resizeMode: "contain" },
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
  travelModeIcon: { marginLeft: 15 },
  shuttleIcon: { height: 26, resizeMode: "contain" },
  autocomplete: {
    top: 260,
    width: screenWidth
  },
  button: {
    marginTop: Platform.OS === "android" ? 20 : 0
  },
  datePickerButton: {
    flexDirection: "row",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginLeft: 36,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: INPUT_BORDER_COLOR
  },
  datePickerText: {
    color: INACTIVE_TEXT_COLOR
  },
  datePickerChevron: {
    color: INACTIVE_ICON_COLOR
  }
});
