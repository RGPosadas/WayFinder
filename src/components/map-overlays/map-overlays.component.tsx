import React, { useEffect, useState } from "react";
import { Overlay } from "react-native-maps";
import {
  Buildings,
  getAllCampuses,
  buildingFloors,
  getAllPOI,
} from "../../constants";
import {
  BuildingId,
  ZoomLevel,
  IndoorInformation,
  POI,
  MarkerLocation,
  TravelState,
  Building,
} from "../../types/main";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../../styles";

import CustomMarker from "./custom-marker.component";
import CustomPolygon from "./custom-polygon.component";

interface IProps {
  onBuildingTap: (building: Building) => void;
  tappedBuilding: BuildingId;
  zoomLevel: ZoomLevel;
  indoorInformation: IndoorInformation;
  onPOIMarkerPress: (poi: POI) => void;
  startLocation: MarkerLocation;
  endLocation: MarkerLocation;
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
  onPOIMarkerPress,
  endLocation,
  startLocation,
  travelState,
}: IProps) => {
  /**
   * Fill color for the Polygons
   */
  const [fillColor, setFillColor] = useState<string>("");
  const [tappedColor, setTappedColor] = useState<string>("");

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
          {Buildings.filter((building) => building.boundingBox.length > 0).map(
            (building) => (
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
                  onBuildingTap(building);
                }}
                testID={`polygon${building.id}`}
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
                testID={`marker${building.id}`}
                markerType="building"
                key={building.id}
                location={building.location}
                onPress={() => {
                  onBuildingTap(building);
                }}
                text={
                  zoomLevel === ZoomLevel.OUTDOOR
                    ? building.id
                    : building.displayName
                }
              />
            </React.Fragment>
          ))
        : null}

      {/**
       * Adds a floor plan for each Building
       */}
      {zoomLevel === ZoomLevel.INDOOR ? (
        <>
          {buildingFloors
            .filter((floor) => floor.bounds != null && floor.image != null)
            .map((floor) => (
              <Overlay
                key={floor.id}
                bounds={floor.bounds}
                image={floor.image}
              />
            ))}
        </>
      ) : null}

      {/**
       * Adds a marker for each POI
       */}
      {zoomLevel === ZoomLevel.INDOOR &&
      travelState !== TravelState.TRAVELLING ? (
        <>
          {getAllPOI()
            .filter((poi) => {
              if (indoorInformation.currentFloor == null) {
                return true;
              }
              return poi.level === indoorInformation.currentFloor.level;
            })
            .map((poi) => (
              <CustomMarker
                testID={`poi-${poi.id}`}
                markerType="poi"
                key={poi.id}
                location={poi.location}
                text={poi.displayName}
                onPress={() => {
                  onPOIMarkerPress(poi);
                }}
              />
            ))}
        </>
      ) : null}

      {/**
       * Adds a marker for startLocation and endLocation
       */}
      {travelState === TravelState.TRAVELLING
        ? [startLocation, endLocation].map((marker, index) => (
            <CustomMarker
              testID={index === 0 ? "startLocation" : "endLocation"}
              markerType={index === 0 ? "startLocation" : "endLocation"}
              location={marker.location}
              text={marker.displayName}
              onPress={() => {}}
              key={index}
            />
          ))
        : null}
    </>
  );
};

export default MapOverlays;
