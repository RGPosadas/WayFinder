import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Polyline, Region } from "react-native-maps";
import { MarkerLocation } from "../../types/main";
import { CONCORDIA_RED } from "../../styles";
import TempService from "../../services/path-planning.service";

interface iProps {
  start: MarkerLocation;
  end: MarkerLocation;
  chosenFloorLevel: number;
  animateToStartLocation: (region: Region) => void;
}

/**
 *
 * @param start
 * @param end
 * @param chosenFloorLevel
 * @param animateToStartLocation
 */
const TravelRoute = ({
  start,
  end,
  chosenFloorLevel,
  animateToStartLocation,
}: iProps) => {
  useEffect(() => {
    animateToStartLocation({
      latitude: start.location.latitude,
      longitude: start.location.longitude,
      latitudeDelta: 0.000975900094058102,
      longitudeDelta: 0.000238533675670624,
    });
  }, [start]);

  const pathLines = TempService.getInstance().getPathLines(
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
