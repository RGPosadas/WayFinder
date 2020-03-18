import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { Location } from "../../types/main";
import { CONCORDIA_RED } from "../../constants/style";

interface IProps {
  location: Location;
  onPress: () => void;
  text: string;
  markerType: "campus" | "building" | "poi";
}
let backgroundColor: string = CONCORDIA_RED;
const CustomMarker = ({ location, onPress, text, markerType }: IProps) => {
  /**
   *
   */

  switch (markerType) {
    case "campus":
    case "poi":
      backgroundColor = CONCORDIA_RED;
      break;
    case "building":
      backgroundColor = "#252525";
      break;
  }

  return (
    <Marker
      coordinate={location}
      onPress={onPress}
      tracksViewChanges={false}
      tracksInfoWindowChanges={false}
    >
      <View style={styles.container}>
        <View
          style={StyleSheet.flatten([
            styles.bubble,
            { backgroundColor: backgroundColor }
          ])}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
        <View
          style={StyleSheet.flatten([
            styles.arrowBorder,
            { borderTopColor: backgroundColor }
          ])}
        />
        <View
          style={StyleSheet.flatten([
            styles.arrow,
            { borderTopColor: backgroundColor }
          ])}
        />
      </View>
    </Marker>
  );
};

export default CustomMarker;

const constant = "#000000";
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    // backgroundColor: backgroundColor,
    padding: 2,
    borderRadius: 3
  },
  text: {
    color: "#f0f0f0"
  },
  arrow: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: backgroundColor,
    alignSelf: "center",
    marginTop: -9
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderWidth: 4,
    borderColor: "transparent",
    borderTopColor: backgroundColor,
    alignSelf: "center",
    marginTop: -0.5
  }
});
