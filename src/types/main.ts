import { LatLng } from "react-native-maps";

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Region extends Location {
  latitudeDelta: number;
  longitudeDelta: number;
}

export type Coordinate = [number, number];

export interface Building {
  id: BuildingId;
  campusId: CampusId;
  displayName: string;
  address: string;
  location: Location;
  departments: LinkItem[];
  services: LinkItem[];
  boundingBox: Location[];
}

export interface Campus {
  id: CampusId;
  displayName: string;
  description: string;
  region: Region;
  buildings: BuildingId[];
}

export interface IndoorLocation {
  id: number;
  displayName: string;
  buildingId: BuildingId;
  level: number;
  location: Location;
}

export interface POI extends IndoorLocation {
  description: string;
  category: POICategory;
}

export interface Connector extends IndoorLocation {
  type: ConnectorType;
  connections: Connection[];
}

export interface Connection {
  level: number;
  location: Location;
}

export interface LinkItem {
  id: number;
  title: string;
  link: string;
}

export interface FloorOverlay {
  id: number;
  buildingId: BuildingId;
  level: number;
  bounds: [Coordinate, Coordinate];
  image: any;
}

export enum POICategory {
  Classroom,
  Washroom,
  Restaurant,
  Association,
  Elevator,
  Escalator,
  Stairs
}

export enum ConnectorType {
  Elevator,
  Stairs,
  Ramp,
  Escalator
}

export interface IndoorInformation {
  currentLevel: number;
  floors: { name: string; index: number }[];
}

export interface LinkItem {
  id: number;
  title: string;
  link: string;
}

export enum CampusId {
  SGW = "SGW",
  Loyola = "Loyola"
}

export enum BuildingId {
  // SGW Campus
  B,
  CB,
  CI,
  CL,
  D,
  EN,
  ER,
  EV,
  FA,
  FB,
  FG,
  GA,
  GM,
  GN,
  GS,
  H,
  K,
  LB,
  LD,
  LS,
  M,
  MB,
  MI,
  MU,
  P,
  PR,
  Q,
  R,
  RR,
  S,
  SB,
  T,
  TD,
  V,
  VA,
  X,
  Z,
  // Loyola Campus
  AD,
  BB,
  BH,
  CC,
  CJ,
  DO,
  FC,
  GE,
  HA,
  HB,
  HC,
  HU,
  JR,
  PC,
  PS,
  PT,
  PY,
  QA,
  RA,
  RF,
  SC,
  SH,
  SI,
  SP,
  TA,
  VE,
  VL
}

export enum ZoomLevel {
  // Too far
  NONE,
  // Really zoomed out
  CAMPUS_MARKERS,
  // Medium
  BUILDING_MARKERS_AND_POLYGONS,
  // Close
  INDOOR_FLOORS_AND_POI
}
