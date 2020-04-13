import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import {
  CONCORDIA_RED,
  WHITE_BACKGROUND_COLOR,
  START_TRAVEL_HEIGHT,
  Circle,
} from "../../styles";
import { TravelState } from "../../types/main";

interface IProps {
  setTravelState: (state: TravelState) => void;
  onStartTravelPlan: () => void;
}

/**
 * Component for controlling indoor floors when in the indoor view.
 * @param onFloorPickerButtonPress Function that handles floorpicker press event
 */
const StartTravel = ({ setTravelState, onStartTravelPlan }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID="startTravel"
        onPress={() => {
          setTravelState(TravelState.TRAVELLING);
          onStartTravelPlan();
        }}
        style={styles.touchable}
      >
        <View style={styles.button}>
          <AntDesign name="arrowright" size={26} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: START_TRAVEL_HEIGHT,
    right: 20,
    width: 60,
    zIndex: 1,
    height: 60,
  },
  touchable: {
    height: 60,
  },
  button: {
    ...Circle,
    flex: 1,
    backgroundColor: CONCORDIA_RED,
    top: 0,
    left: 0,
    position: "absolute",
  },
  arrowIcon: { color: WHITE_BACKGROUND_COLOR },
});

export default StartTravel;
