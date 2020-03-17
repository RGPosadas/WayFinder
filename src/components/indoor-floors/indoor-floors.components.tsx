import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Marker } from "react-native-maps";
import { Region } from "../../types/main";
import { floorOverlays } from "../../constants/floors.data";
import { getAllPOI } from "../../constants/poi.data";

export interface IndoorFloorsProps {
  region: Region;
}

const IndoorFloors = (props: IndoorFloorsProps) => {
  const { region } = props;

  return (
    <View style={{ zIndex: 1 }}>
      {floorOverlays.map(floorOverlay => (
        <Overlay
          key={floorOverlay.id}
          bounds={floorOverlay.bounds}
          image={floorOverlay.image}
        />
      ))}
      {getAllPOI().map((poi, index) => (
        <Marker
          style={styles.marker}
          key={index}
          coordinate={poi.location}
        ></Marker>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "red"
  }
});

export default IndoorFloors;
