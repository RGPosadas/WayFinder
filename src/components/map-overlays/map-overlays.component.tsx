import React, { useEffect, useState } from "react";
import { Overlay } from "react-native-maps";
import { StyleSheet } from "react-native";
import { Buildings } from "../../constants/buildings.data";
import {
  BuildingId,
  ZoomLevel,
  IndoorInformation,
  POI,
  MarkerLocation,
  TravelState
} from "../../types/main";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../../constants/style";
import { getAllCampuses } from "../../constants/campus.data";
import { buildingFloors } from "../../constants/floors.data";
import { getAllPOI } from "../../constants/poi.data";
import CustomMarker from "./custom-marker.component";
import CustomPolygon from "./custom-polygon.component";

interface IProps {
  onBuildingTap: (id: BuildingId) => void;
  tappedBuilding: BuildingId;
  zoomLevel: ZoomLevel;
  indoorInformation: IndoorInformation;
  setMarkerLocation: (poi: POI) => void;
  endLocation: POI;
  startLocation: MarkerLocation;
  travelState: TravelState;
}

/**
 * Wrapper Component for Polygons and Markers which overlay campus buildings.
 */
const MapOverlays = ({
  onBuildingTap,
  tappedBuilding,
  zoomLevel,
  indoorInformation,
  setMarkerLocation,
  endLocation,
  startLocation,
  travelState
}: IProps) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState<string>(null);
  const [tappedColor, setTappedColor] = useState<string>(null);

  useEffect(() => {
    setTappedColor(CONCORDIA_RED);
    setFillColor(BUILDING_UNTAPPED);
  }, []);

  return (
    <>
      {/**
       * Adds a marker for each campus
       */}
      {zoomLevel === ZoomLevel.CAMPUS
        ? getAllCampuses().map((campus, index) => (
            <CustomMarker
              markerType="campus"
              key={index}
              location={campus.region}
              text={campus.displayName}
              onPress={() => {}}
              testID={`marker${campus.id}`}
            />
          ))
        : null}
      {/**
       * Adds a polygon for each building
       */}
      {zoomLevel === ZoomLevel.OUTDOOR ? (
        <>
          {Buildings.filter(building => building.boundingBox.length > 0).map(
            building => (
              <CustomPolygon
                key={building.id}
                coordinates={building.boundingBox}
                tappable
                fillColor={
                  tappedBuilding !== null && tappedBuilding === building.id
                    ? tappedColor
                    : fillColor
                }
                onPress={() => {
                  onBuildingTap(building.id);
                }}
                testID={`polygon${BuildingId[building.id]}`}
              />
            )
          )}
        </>
      ) : null}
      {/**
       * Adds a marker for each building
       */}
      {zoomLevel === ZoomLevel.OUTDOOR || zoomLevel === ZoomLevel.INDOOR
        ? Buildings.map((building, index) => (
            <React.Fragment key={index}>
              <CustomMarker
                testID={`marker${BuildingId[building.id]}`}
                markerType="building"
                key={building.id}
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
      {/**
       * Adds a marker for each POI
       */}
      {zoomLevel === ZoomLevel.INDOOR ? (
        <>
          {buildingFloors
            .filter(floor => floor.bounds != null && floor.image != null)
            .map(floor => (
              <Overlay
                key={floor.id}
                bounds={floor.bounds}
                image={floor.image}
              />
            ))}
        </>
      ) : null}
      {zoomLevel === ZoomLevel.INDOOR ||
      travelState === TravelState.TRAVELLING ? (
        <>
          {getAllPOI()
            .filter(poi => {
              if (travelState === TravelState.TRAVELLING) {
                return poi.id === endLocation.id || poi.id === startLocation.id;
              }

              if (indoorInformation.currentFloor == null) {
                return true;
              }
              return poi.level === indoorInformation.currentFloor.level;
            })
            .map(poi => (
              <CustomMarker
                testID={`poi-${poi.id}`}
                markerType="poi"
                key={poi.id}
                location={poi.location}
                text={poi.displayName}
                onPress={() => {
                  setMarkerLocation(poi);
                }}
              />
            ))}
        </>
      ) : null}
    </>
  );
};

export default MapOverlays;
