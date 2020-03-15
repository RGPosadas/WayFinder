import React, { useEffect, useState } from "react";
import { Polygon, Marker } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId } from "../../types/main";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  onBuildingTap: (id: BuildingId) => void;
  tappedBuilding: BuildingId;
}

/**
 * Wrapper Component for Polygons and Markers which overlay campus buildings.
 */
const BuildingHighlights = ({ onBuildingTap, tappedBuilding }: IProps) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState<string>(null);
  const [tappedColor, setTappedColor] = useState<string>(null);
  useEffect(() => {
    setFillColor("rgba(128, 0, 32, 0.5)");
    setTappedColor("rgba(170,43,69,1)");
  }, []);

  return (
    <View>
      {Buildings.map(building => (
        <View key={building.id}>
          {building.boundingBox.length > 0 ? (
            <Polygon
              coordinates={building.boundingBox}
              tappable={true}
              fillColor={
                tappedBuilding != null && tappedBuilding === building.id
                  ? tappedColor
                  : fillColor
              }
              onPress={() => {
                onBuildingTap(building.id);
              }}
            />
          ) : null}

          <Marker
            coordinate={building.location}
            onPress={() => {
              onBuildingTap(building.id);
            }}
          >
            <Text style={styles.marker}>{BuildingId[building.id]}</Text>
          </Marker>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "#252525",
    color: "#f0f0f0",
    padding: 1,
    borderRadius: 5
  }
});

export default BuildingHighlights;
