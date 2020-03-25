import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { CONCORDIA_RED } from "../../constants/style";

interface IProps {
  setStartTravelPlan: (bool: Boolean) => void;
}

/**
 * Component for controlling indoor floors when in the indoor view.
 *
 * @param indoorInformation Indoor information object
 * @param onFloorPickerButtonPress Function that handles floorpicker press event
 */
const StartTravel = ({ setStartTravelPlan }: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setStartTravelPlan(true)}
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
    top: Dimensions.get("window").height - 100,
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
