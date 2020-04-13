import React from "react";
import { Platform, Alert } from "react-native";
import { Polyline } from "react-native-maps";
import { MarkerLocation, BuildingId, TravelState } from "../../types/main";
import { CONCORDIA_RED } from "../../styles";
import PathPlanningService from "../../services/path-planning.service";
import { getBuildingById } from "../../constants/buildings.data";

interface iProps {
  start: MarkerLocation;
  end: MarkerLocation;
  chosenFloorLevel: number;
  setTravelState: (state: TravelState) => void;
}

/**
 * Draw the shortest path lines from the starting location to the destination
 * only for indoors
 * @param start
 * @param end
 * @param chosenFloorLevel
 * @param animateToStartLocation
 */
const TravelRoute = ({
  start,
  end,
  chosenFloorLevel,
  setTravelState,
}: iProps) => {
  let pathLines = null;

  const {
    isBuildingWithFloorPlan,
    getPathLines,
  } = PathPlanningService.getInstance();

  if (isBuildingWithFloorPlan(start) && isBuildingWithFloorPlan(end)) {
    pathLines = getPathLines(start, end, chosenFloorLevel);
  }

  const alertUser = () => {
    setTravelState(TravelState.PLANNING);
    Alert.alert(
      "Apologies",
      "It seems the floor plans for the particular building is not yet implemented",
      [{ text: "OK" }],
      {
        cancelable: false,
      }
    );
  };

  return (
    <>
      {pathLines
        ? pathLines.map((lines) =>
            lines.map((polyline, index) => (
              <Polyline
                testID={`polylinePath${index}`}
                coordinates={polyline}
                fillColor={CONCORDIA_RED}
                key={index}
                lineDashPattern={Platform.OS === "ios" ? [0.5, 0.5] : [0.5, 7]}
                strokeWidth={5}
                strokeColor={CONCORDIA_RED}
              />
            ))
          )
        : alertUser()}
    </>
  );
};

export default TravelRoute;
