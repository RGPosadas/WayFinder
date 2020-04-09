import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import { Polyline, Marker } from "react-native-maps";
import { buildingFloors } from "../../constants";
import PathFindingService from "../../services/pathfinding.service";
import { POI, FloorPath, Line } from "../../types/main";
import { CONCORDIA_RED } from "../../styles";

interface iProps {
  start: POI;
  end: POI;
}

const TravelRoute = ({ start, end }: iProps) => {
  const paths = PathFindingService.getInstance().findPathBetweenPOIs(
    start,
    end
  );
  return (
    <>
      {paths
        .map((floorPath) => floorPath.path)
        .map((lines) =>
          lines.map((line, index) => (
            <Polyline
              lineDashPattern={Platform.OS === "ios" ? [0.5, 0.5] : [0.5, 7]}
              coordinates={line}
              key={index}
              fillColor={CONCORDIA_RED}
              strokeWidth={5}
              strokeColor={CONCORDIA_RED}
            />
          ))
        )}
    </>
  );
};

export default TravelRoute;
