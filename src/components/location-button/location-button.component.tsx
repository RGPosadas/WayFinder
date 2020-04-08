import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import {
  LOCATION_BUTTON_COLOR,
  BUILDING_LOCATION_HEIGHT,
  MAP_BUTTON_RIGHT,
  Circle,
} from "../../styles";

export interface IProps {
  setUserCurrentLocation: () => void;
  animateToCurrentLocation: () => void;
}

/**
 * Touchable component which triggers the onLocationButtonPress
 * method for locating the user within the campus
 *
 * @param setUserCurrentLocation Function used to get current user location and check if they are in a building.
 * @param animateToCurrentLocation Function called to animate on the user's current location.
 */
const LocationButton = ({
  setUserCurrentLocation,
  animateToCurrentLocation,
}: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="locationButton"
        style={styles.button}
        onPress={() => {
          setUserCurrentLocation();
          animateToCurrentLocation();
        }}
      >
        <MaterialIcons name="my-location" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: BUILDING_LOCATION_HEIGHT,
    right: MAP_BUTTON_RIGHT,
  },
  button: {
    ...Circle,
    backgroundColor: LOCATION_BUTTON_COLOR,
  },
});

export default LocationButton;
