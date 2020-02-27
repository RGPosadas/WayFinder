import React, { useEffect, useState } from "react";
import { Polygon } from "react-native-maps";
import { View } from "react-native";
import { BuildingCoordinates } from "../../constants/coordinates.data";

/**
 * Wrapper Component for Polygons which overlay campus buildings.
 */
const BuildingHighlights = () => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState("rgba(128, 0, 32, 0.5)");

  return (
    <View>
      {Object.entries(BuildingCoordinates).map(([id, coordinates]) => {
        return (
          <Polygon
            key={id}
            coordinates={coordinates}
            tappable={true}
            fillColor={fillColor}
          />
        );
      })}
    </View>
  );
};

export default BuildingHighlights;
