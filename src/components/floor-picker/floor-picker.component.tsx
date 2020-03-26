import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IndoorInformation, TravelState } from "../../types/main";
import {
  FLOOR_PICKER_HEIGHT,
  FLOOR_PICKER_TRAVEL_HEIGHT,
  MAP_BUTTON_RIGHT,
  CONCORDIA_RED,
  INACTIVE_BUTTON_COLOR
} from "../../constants/style";

interface IProps {
  indoorInformation: IndoorInformation;
  onFloorPickerButtonPress: (index: number) => void;
  travelState: TravelState;
}

/**
 * Component for controlling indoor floors when in the indoor view.
 *
 * @param indoorInformation Indoor information object
 * @param onFloorPickerButtonPress Function that handles floorpicker press event
 */
const FloorPicker = ({
  indoorInformation,
  onFloorPickerButtonPress,
  travelState
}: IProps) => {
  return (
    <>
      {indoorInformation.floors.length > 0 &&
      indoorInformation.currentFloor !== null ? (
        <View
          style={StyleSheet.flatten([
            styles.container,
            {
              bottom:
                travelState === TravelState.NONE
                  ? FLOOR_PICKER_HEIGHT
                  : FLOOR_PICKER_TRAVEL_HEIGHT
            }
          ])}
        >
          {indoorInformation.floors &&
            indoorInformation.floors.map((floor, index) => {
              return (
                <TouchableOpacity
                  testID={`floorButton${floor.level}`}
                  key={index}
                  style={
                    floor.index === indoorInformation.currentFloor.index
                      ? StyleSheet.flatten([
                          styles.floorButton,
                          { backgroundColor: CONCORDIA_RED }
                        ])
                      : StyleSheet.flatten([
                          styles.floorButton,
                          { backgroundColor: INACTIVE_BUTTON_COLOR }
                        ])
                  }
                  onPress={() => onFloorPickerButtonPress(floor.index)}
                >
                  <Text style={styles.text}>{floor.level}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    display: "flex",
    flexDirection: "column",
    position: "absolute",

    right: MAP_BUTTON_RIGHT,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)"
  },
  floorButton: {
    flex: 1,
    backgroundColor: INACTIVE_BUTTON_COLOR,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    paddingTop: 10,
    borderRadius: 2
  },
  text: {
    fontWeight: "bold",
    fontSize: 16
  }
});

export default FloorPicker;
