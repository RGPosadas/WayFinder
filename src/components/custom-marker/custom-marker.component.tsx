import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { Location } from "../../types/main";

interface IProps {
  location: Location;
  onPress: () => void;
  text: string;
}

const CustomMarker = ({ location, onPress, text }: IProps) => {
  return (
    <Marker
      coordinate={location}
      onPress={onPress}
      tracksViewChanges={false}
      tracksInfoWindowChanges={false}
    >
      <View style={styles.container}>
        <View style={styles.bubble}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    </Marker>
  );
};

export default CustomMarker;

const backgroundColor = "#252525";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignSelf: "flex-start"
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: backgroundColor,
    padding: 2,
    borderRadius: 3,
    borderWidth: 0.5
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
