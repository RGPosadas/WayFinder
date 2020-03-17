import React, { useEffect, useState } from "react";
import { Polygon, Marker } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId, CampusId } from "../../types/main";
import { View, Text, StyleSheet } from "react-native";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../../constants/style";
import { getAllCampuses } from "../../constants/campus.data";

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
    // setFillColor(BUILDING_UNTAPPED); //temp for placing indoor maps
    setFillColor("rgba(0,0,0,0)");
    setTappedColor(CONCORDIA_RED);
  }, []);

  return (
    <View>
      {Buildings.map((building, index) => (
        <View key={index}>
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
            tracksViewChanges={false}
            tracksInfoWindowChanges={false}
          >
            <Text style={styles.marker}>{BuildingId[building.id]}</Text>
          </Marker>
        </View>
      ))}
      {getAllCampuses().map((campus, index) => (
        <Marker
          key={index}
          coordinate={campus.region}
          tracksViewChanges={false}
          tracksInfoWindowChanges={false}
        >
          <Text style={styles.marker}>{CampusId[campus.id]}</Text>
        </Marker>
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
