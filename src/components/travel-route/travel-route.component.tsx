import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Polyline, Region } from "react-native-maps";
import { MarkerLocation } from "../../types/main";
import { CONCORDIA_RED } from "../../styles";
import PathPlanningService from "../../services/path-planning.service";

interface iProps {
  start: MarkerLocation;
  end: MarkerLocation;
  chosenFloorLevel: number;
}

/**
 *
 * @param start
 * @param end
 * @param chosenFloorLevel
 * @param animateToStartLocation
 */
const TravelRoute = ({ start, end, chosenFloorLevel }: iProps) => {
  const pathLines = PathPlanningService.getInstance().getPathLines(
    start,
    end,
    chosenFloorLevel
  );

  return (
    <>
      {pathLines.map((lines) =>
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
      )}
    </>
  );
};

export default TravelRoute;
