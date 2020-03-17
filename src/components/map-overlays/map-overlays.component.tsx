import React, { useEffect, useState } from "react";
import { Polygon, Overlay } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId, CampusId, ZoomLevel } from "../../types/main";
import { View, StyleSheet } from "react-native";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../../constants/style";
import { getAllCampuses } from "../../constants/campus.data";
import { floorOverlays } from "../../constants/floors.data";
import { getAllPOI } from "../../constants/poi.data";
import CustomMarker from "../custom-marker/custom-marker.component";

interface IProps {
  onBuildingTap: (id: BuildingId) => void;
  tappedBuilding: BuildingId;
  zoomLevel: ZoomLevel;
}

/**
 * Wrapper Component for Polygons and Markers which overlay campus buildings.
 */
const MapOverlays = ({ onBuildingTap, tappedBuilding, zoomLevel }: IProps) => {
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
      {zoomLevel === ZoomLevel.CAMPUS_MARKERS
        ? getAllCampuses().map((campus, index) => (
            <CustomMarker
              key={index}
              location={campus.region}
              text={CampusId[campus.id]}
              onPress={() => {}}
            />
          ))
        : null}

      {zoomLevel === ZoomLevel.BUILDING_MARKERS_AND_POLYGONS ? (
        <>
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

              <CustomMarker
                location={building.location}
                onPress={() => {
                  onBuildingTap(building.id);
                }}
                text={BuildingId[building.id]}
              />
            </View>
          ))}
        </>
      ) : null}

      {zoomLevel === ZoomLevel.INDOOR_FLOORS_AND_POI ? (
        <>
          {floorOverlays.map(floorOverlay => (
            <Overlay
              key={floorOverlay.id}
              bounds={floorOverlay.bounds}
              image={floorOverlay.image}
            />
          ))}

          {getAllPOI().map((poi, index) => (
            <CustomMarker
              key={index}
              location={poi.location}
              text={poi.displayName}
              onPress={() => {}}
            />
          ))}
        </>
      ) : null}
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

export default MapOverlays;
