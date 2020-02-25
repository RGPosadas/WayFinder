import React, { useEffect, useState } from "react";
import { Polygon } from "react-native-maps";
import { View } from "react-native";
import { Coordinates } from "../../constants/coordinates.data";

const BuildingHighlights = ({ displayBuilding }) => {
  const [fillColor, setFillColor] = useState(null);
  useEffect(() => {
    setFillColor("rgba(128, 0, 32, 0.5)");
  }, []);
  return (
    <View>
      {Object.entries(Coordinates).map(([value, key]) => {
        return (
          <Polygon
            key={value}
            coordinates={key}
            tappable={true}
            fillColor={fillColor}
            // onPress={() => displayBuilding(true, value)}
          ></Polygon>
        );
      })}
    </View>
  );
};

export default BuildingHighlights;
