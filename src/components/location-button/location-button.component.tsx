import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import {
  BUILDING_LOCATION_HEIGHT,
  MAP_BUTTON_RIGHT
} from "../../constants/style";

export interface IProps {
  onLocationButtonPress: () => void;
}

/**
 * Touchable component which triggers the onBuildingLocationPress
 * method for locating the user within the campus
 *
 * @param onBuildingLocationPress Function called when the building location button is pressed.
 */
const LocationButton = ({ onLocationButtonPress }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="locationButton"
        style={styles.button}
        onPress={onLocationButtonPress}
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
    right: MAP_BUTTON_RIGHT
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50
  }
});

export default LocationButton;
