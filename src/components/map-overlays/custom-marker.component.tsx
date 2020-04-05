import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { Location } from "../../types/main";
import {
  CONCORDIA_RED,
  BUILDING_MARKER_COLOR,
  CUSTOM_MARKER_COLOR,
  ARROW_MARKER
} from "../../styles";

interface IProps {
  location: Location;
  onPress: () => void;
  text: string;
  markerType: "campus" | "building" | "poi" | "startLocation" | "endLocation";
  testID: string;
}
let backgroundColor: string = CONCORDIA_RED;

/**
 * Custom component for rendering a marker with custom text and color
 *
 * @param location location for the marker
 * @param onPress action to be done when marker is pressed
 * @param text text of the marker
 * @param markerType type of the marker
 * @param testID unique ID for e2e tests
 */
const CustomMarker = ({
  location,
  onPress,
  text,
  markerType,
  testID
}: IProps) => {
  switch (markerType) {
    case "campus":
    case "poi":
      backgroundColor = CONCORDIA_RED;
      break;
    case "building":
      backgroundColor = BUILDING_MARKER_COLOR;
      break;
    default:
  }

  return (
    <Marker
      testID={testID}
      coordinate={location}
      onPress={onPress}
      tracksViewChanges={false}
      tracksInfoWindowChanges={false}
    >
      <View style={styles.container}>
        <View
          testID={`${testID}Bubble`}
          style={StyleSheet.flatten([styles.bubble, { backgroundColor }])}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    padding: 3,
    borderRadius: 3
  },
  text: {
    color: CUSTOM_MARKER_COLOR
  },
  arrow: {
    ...ARROW_MARKER,
    marginTop: -9
  },
  arrowBorder: {
    ...ARROW_MARKER,
    marginTop: -0.5
  }
});
