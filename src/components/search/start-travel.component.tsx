import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { CONCORDIA_RED, START_TRAVEL_HEIGHT } from "../../constants/style";
import { TravelState } from "../../types/main";

interface IProps {
  setTravelState: (state: TravelState) => void;
}

/**
 * Component for controlling indoor floors when in the indoor view.
 *
 * @param indoorInformation Indoor information object
 * @param onFloorPickerButtonPress Function that handles floorpicker press event
 */
const StartTravel = ({ setTravelState }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setTravelState(TravelState.TRAVELLING);
        }}
        style={{ width: 80, height: 80 }}
      >
        <View style={styles.button}>
          <AntDesign name="arrowright" color="#fff" size={26} />
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
    height: 60
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: CONCORDIA_RED,
    borderRadius: 50,
    position: "absolute",
    top: 0,
    left: 0
  }
});

export default StartTravel;
