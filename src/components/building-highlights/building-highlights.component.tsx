import React, { useEffect, useState } from "react";
import { Polygon } from "react-native-maps";
import { View } from "react-native";
import { Buildings } from "../../constants/buildings.data";

/**
 * Wrapper Component for Polygons which overlay campus buildings.
 */
const BuildingHighlights = ({ displayBuilding }) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState(null);

  useEffect(() => {
    setFillColor("rgba(128, 0, 32, 0.5)");
  }, []);

  return (
    <View>
      {Buildings.map(building => (
        <Polygon
          key={building.id}
          coordinates={building.boundingBox}
          tappable={true}
          fillColor={fillColor}
          onPress={() => {
            displayBuilding(true, building.id);
          }}
        />
      ))}
    </View>
  );
};

export default BuildingHighlights;
