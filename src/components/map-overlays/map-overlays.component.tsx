import React, { useEffect, useState } from "react";
import { Polygon, Overlay } from "react-native-maps";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId, ZoomLevel, IndoorInformation } from "../../types/main";
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
  indoorInformation: IndoorInformation;
}

/**
 * Wrapper Component for Polygons and Markers which overlay campus buildings.
 */
const MapOverlays = ({
  onBuildingTap,
  tappedBuilding,
  zoomLevel,
  indoorInformation
}: IProps) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState<string>(null);
  const [tappedColor, setTappedColor] = useState<string>(null);
  useEffect(() => {
    setTimeout(() => {
      setFillColor(BUILDING_UNTAPPED);
      setTappedColor(CONCORDIA_RED);
    }, 50);
  }, []);

  return (
    <>
      {zoomLevel === ZoomLevel.CAMPUS
        ? getAllCampuses().map((campus, index) => (
            <CustomMarker
              markerType={"campus"}
              key={index}
              location={campus.region}
              text={campus.displayName}
              onPress={() => {}}
            />
          ))
        : null}

      {zoomLevel === ZoomLevel.OUTDOOR ? (
        <>
          {Buildings.filter(building => building.boundingBox.length > 0).map(
            (building, index) => (
              <Polygon
                key={index}
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
            )
          )}
        </>
      ) : null}

      {zoomLevel === ZoomLevel.OUTDOOR || zoomLevel === ZoomLevel.INDOOR
        ? Buildings.map((building, index) => (
            <React.Fragment key={index}>
              <CustomMarker
                markerType={"building"}
                key={index}
                location={building.location}
                onPress={() => {
                  onBuildingTap(building.id);
                }}
                text={
                  zoomLevel === ZoomLevel.OUTDOOR
                    ? BuildingId[building.id]
                    : building.displayName
                }
              />
            </React.Fragment>
          ))
        : null}

      {zoomLevel === ZoomLevel.INDOOR ? (
        <>
          {floorOverlays.map(floorOverlay => (
            <Overlay
              key={floorOverlay.id}
              bounds={floorOverlay.bounds}
              image={floorOverlay.image}
            />
          ))}

          {getAllPOI()
            .filter(poi => {
              if (indoorInformation.currentFloor == null) {
                return true;
              }
              return poi.level === indoorInformation.currentFloor.level;
            })
            .map((poi, index) => (
              <CustomMarker
                markerType={"poi"}
                key={index}
                location={poi.location}
                text={poi.displayName}
                onPress={() => {}}
              />
            ))}
        </>
      ) : null}
    </>
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
