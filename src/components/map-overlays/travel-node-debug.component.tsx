import React from "react";
import { StyleSheet, Text } from "react-native";
import { Polyline, Marker } from "react-native-maps";
import { buildingFloors } from "../../constants";
import PathFindingService from "../../services/pathfinding.service";

interface IProps {
  id: number;
}

const TravelNodeDebug = ({ id }: IProps) => {
  return (
    <>
      {buildingFloors
        .filter((buildingFloor) => buildingFloor.id === id)
        .map((buildingFloor) => (
          <>
            {PathFindingService.getInstance()
              .traverseNodes(buildingFloor.travelNodes)
              .map((line) => (
                <>
                  <Polyline coordinates={line.map((edge) => edge.location)} />
                </>
              ))}
            {PathFindingService.getInstance()
              .traverseNodes(buildingFloor.travelNodes)
              .map((line) => (
                <>
                  <Marker coordinate={line[0].location}>
                    <Text>{line[0].id}</Text>
                  </Marker>
                  <Marker coordinate={line[1].location}>
                    <Text>{line[1].id}</Text>
                  </Marker>
                </>
              ))}
          </>
        ))}
    </>
  );
};

export default TravelNodeDebug;

const styles = StyleSheet.create({});
