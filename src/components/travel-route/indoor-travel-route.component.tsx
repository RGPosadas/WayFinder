import React from "react";
import { Platform, Alert } from "react-native";
import { Polyline } from "react-native-maps";
import { MarkerLocation, TravelState, TravelMode } from "../../types/main";
import { CONCORDIA_RED } from "../../styles";
import IndoorPathPlanningService from "../../services/indoor-path-planning.service";

interface iProps {
  travelMode: TravelMode;
  start: MarkerLocation;
  end: MarkerLocation;
  chosenFloorLevel: number;
  setTravelState: (state: TravelState) => void;
}

/**
 * Draw the shortest path lines from the starting location to the destination
 * @param travelMode Chosen Travel Mode
 * @param start Start MarkerLocatiom
 * @param end End MarkerLocation
 * @param chosenFloorLevel floor that is currently picked
 * @param animateToStartLocation function that animates to a region
 */
const IndoorTravelRoute = ({
  travelMode,
  start,
  end,
  chosenFloorLevel,
  setTravelState,
}: iProps) => {
  const { getPathLines } = IndoorPathPlanningService.getInstance();

  const pathLines = getPathLines(
    start,
    end,
    travelMode === TravelMode.ACCESSIBLE,
    chosenFloorLevel
  );

  /**
   * Alerts the user that the indoor map is not yet implemented
   */
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
                style={{ zIndex: 2 }}
              />
            ))
          )
        : alertUser()}
    </>
  );
};

export default IndoorTravelRoute;
