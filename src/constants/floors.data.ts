import { FloorOverlay, BuildingId } from "../types/main";

export const floorOverlays: FloorOverlay[] = [
  // Test floor, will be deleted
  {
    id: 1,
    buildingId: BuildingId.H,
    level: 1,
    bounds: [
      [45.49772, -73.579507],
      [45.49679, -73.578391]
    ],
    image: require("../../assets/floors/H-1.png")
  },
  {
    id: 2,
    buildingId: BuildingId.MB,
    level: 1,
    bounds: [
      [45.4956, -73.57953],
      [45.494916, -73.57846]
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
