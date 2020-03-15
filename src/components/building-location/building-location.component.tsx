import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { CAMPUS_TOGGLE_HEIGHT } from "../../constants/style";

/**
 * the name and types of the properties types accepted
 * by the BuildingLocation component
 */
export interface IProps {
  onBuildingLocationPress: () => void;
}

/**
 * Touchable component which triggers the onBuildingLocationPress
 * method for locating the user within the campus
 *
 * @param onBuildingLocationPress Function called when the building location button is pressed.
 */
const BuildingLocation = ({ onBuildingLocationPress }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onBuildingLocationPress}>
        <MaterialIcons name="my-location" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: CAMPUS_TOGGLE_HEIGHT + 30,
    right: 20
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

export default BuildingLocation;
