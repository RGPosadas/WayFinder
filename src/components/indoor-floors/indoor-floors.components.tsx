import React from "react";
import { View, Text } from "react-native";
import MapView, { Overlay, Marker } from "react-native-maps";
import { POIInfo, floorOverlays } from "../../constants/poi.data";
import { Region } from "../../types/main";

export interface IndoorFloorsProps {
  region: Region;
}

const IndoorFloors = (props: IndoorFloorsProps) => {
  const { region } = props;

  const shouldShowFloor = () => {
    return true;
  };

  const shouldShowPOI = () => {
    return true;
  };
  return (
    <View style={{ zIndex: 1 }}>
      {floorOverlays.map(floorOverlay => (
        <Overlay
          key={floorOverlay.id}
          bounds={floorOverlay.bounds}
          image={floorOverlay.image}
        />
      ))}
    </View>
  );
};

export default IndoorFloors;
