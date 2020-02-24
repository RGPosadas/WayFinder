import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

const Map = props => {
  return <MapView style={styles.mapStyle} region={props.region} />;
};

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

export default Map;
