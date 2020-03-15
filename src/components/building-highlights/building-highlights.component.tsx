import React, { useEffect, useState } from "react";
import { Polygon, Marker, LatLng } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId, Location } from "../../types/main";
import { View, Text, StyleSheet } from "react-native";
import { getCenter } from "geolib";

interface IProps {
  onTapBuilding: (BuildingId) => void;
  tappedBuilding: BuildingId;
}

/**
 * Wrapper Component for Polygons which overlay campus buildings.
 */
const BuildingHighlights = ({ onTapBuilding, tappedBuilding }: IProps) => {
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
          <Polygon
            coordinates={building.boundingBox}
            tappable={true}
            fillColor={
              tappedBuilding != null && tappedBuilding === building.id
                ? tappedColor
                : fillColor
            }
            onPress={() => {
              onTapBuilding(building.id);
            }}
          />
          <Marker coordinate={building.center}>
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
