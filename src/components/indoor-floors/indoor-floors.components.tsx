import React from "react";
import { View } from "react-native";
import { Overlay } from "react-native-maps";
import { Region } from "../../types/main";
import { floorOverlays } from "../../constants/floors.data";

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
    </View>
  );
};

export default IndoorFloors;
