import { FloorOverlay, BuildingId, Range } from "../types/main";

export const floorOverlays: FloorOverlay[] = [
  {
    id: 2,
    buildingId: BuildingId.MB,
    level: 1,
    bounds: [
      [45.495778, -73.5797],
      [45.494802, -73.578297]
    ],
    image: require("../../assets/floors/MB-1.png")
  },
  {
    id: 3,
    buildingId: BuildingId.CC,
    level: 1,
    bounds: [
      [45.458639, -73.640921],
      [45.457962, -73.639775]
    ],
    image: require("../../assets/floors/CC1.png")
  }
];

export const indoorRange: Range = {
  min: 0,
  max: 0.0025
};

export const outdoorRange: Range = {
  min: 0.0025,
  max: 0.02
};

export const campusRange: Range = {
  min: 0.02,
  max: 0.09
};
