import { BuildingFloor, BuildingId, Range } from "../types/main";

export const buildingFloors: BuildingFloor[] = [
  {
    id: 1,
    buildingId: BuildingId.H,
    level: 8,
    bounds: null,
    image: null,
    travelNodes: []
  },
  {
    id: 2,
    buildingId: BuildingId.H,
    level: 9,
    bounds: null,
    image: null,
    travelNodes: []
  },
  {
    id: 3,
    buildingId: BuildingId.MB,
    level: 1,
    bounds: [
      [45.495778, -73.5797],
      [45.494802, -73.578297]
    ],
    image: require("../../assets/floors/MB-1.png"),
    travelNodes: []
  },
  {
    id: 4,
    buildingId: BuildingId.CC,
    level: 1,
    bounds: [
      [45.458639, -73.640921],
      [45.457962, -73.639775]
    ],
    image: require("../../assets/floors/CC1.png"),
    travelNodes: []
  }
];

const getTravelNodeById = (buildingFloor: BuildingFloor, id: number) => {
  return buildingFloor.travelNodes.filter(node => node.id === id)[0];
};
