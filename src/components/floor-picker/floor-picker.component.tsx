import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IndoorInformation } from "../../types/main";
import { FLOOR_PICKER_HEIGHT, MAP_BUTTON_RIGHT } from "../../constants/style";

interface IProps {
  indoorInformation: IndoorInformation;
  onFloorPickerButtonPress: (index: number) => void;
}

const FloorPicker = ({
  indoorInformation,
  onFloorPickerButtonPress
}: IProps) => {
  return (
    <View style={styles.container}>
      {indoorInformation.floors &&
        indoorInformation.floors.map((floor, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={
                floor.index === indoorInformation.currentLevel
                  ? styles.activatedfloorButton
                  : styles.floorButton
              }
              onPress={() => onFloorPickerButtonPress(floor.index)}
            >
              <Text>{floor.name}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

// Color for the active button
const activeColor = "#AA2B45";

// Color for the inactive button
const inactiveColor = "#F2F2F2";

const styles = StyleSheet.create({
  container: {
    width: 50,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: FLOOR_PICKER_HEIGHT,
    right: MAP_BUTTON_RIGHT
  },
  activatedfloorButton: {
    flex: 1,
    backgroundColor: activeColor,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  floorButton: {
    flex: 1,
    backgroundColor: inactiveColor,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default FloorPicker;
