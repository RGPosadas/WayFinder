export interface Location {
  latitude: number;
  longitude: number;
}

export interface Region extends Location {
  latitudeDelta: number;
  longitudeDelta: number;
}

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

export interface LinkItem {
  id: number;
  title: string;
  link: string;
}

export interface Campus {
  id: CampusId;
  displayName: string;
  description: string;
  region: Region;
  buildings: BuildingId[];
}

export interface MarkerLocation {
  id: string;
  displayName: string;
  location: Location;
}

export interface POI extends MarkerLocation {
  buildingId: BuildingId;
  level: number;
  description: string;
  category: POICategory;
}

export interface ConnectorPOI extends POI {
  category: ConnectorPOICategory;
}

export interface SearchResult extends MarkerLocation {
  searchName: string;
  extraInformation: string;
}

export interface Connector extends POI {
  type: ConnectorType;
  connections: Connection[];
}

export interface Connection {
  level: number;
  location: Location;
}

export interface BuildingFloor {
  id: number;
  buildingId: BuildingId;
  level: number;
  bounds: [Coordinate, Coordinate] | null;
  image: any;
  travelNodes: TravelNode[];
  unfriendlyConnections: number[];
}

export interface TravelNode {
  id: number;
  location: Location;
  children: number[];
}

export interface IndoorInformation {
  currentFloor: IndoorFloor | null;
  floors: IndoorFloor[];
}

export interface IndoorFloor {
  level: number;
  index: number;
}

export interface Range {
  min: number;
  max: number;
}

export type FloorPath = {
  buildingId: BuildingId;
  level: number;
  path: Line[];
  connector?: POI;
};

export type ConnectorPOICategory =
  | POICategory.Elevator
  | POICategory.EscalatorDown
  | POICategory.EscalatorUp
  | POICategory.Stairs
  | POICategory.Exit;

export type PQItem = { id: number; parent: number; g: number };

export type TravelEdge = [TravelNode, TravelNode];

export type Line = [Location, Location];

export type Coordinate = [number, number];

export type CampusId = "SGW" | "Loyola";

export type BuildingId =
  | "B"
  | "CB"
  | "CI"
  | "CL"
  | "D"
  | "EN"
  | "ER"
  | "EV"
  | "FA"
  | "FB"
  | "FG"
  | "GA"
  | "GM"
  | "GN"
  | "GS"
  | "H"
  | "K"
  | "LB"
  | "LD"
  | "LS"
  | "M"
  | "MB"
  | "MI"
  | "MU"
  | "P"
  | "PR"
  | "Q"
  | "R"
  | "RR"
  | "S"
  | "SB"
  | "T"
  | "TD"
  | "V"
  | "VA"
  | "X"
  | "Z"
  | "AD"
  | "BB"
  | "BH"
  | "CC"
  | "CJ"
  | "DO"
  | "FC"
  | "GE"
  | "HA"
  | "HB"
  | "HC"
  | "HU"
  | "JR"
  | "PC"
  | "PS"
  | "PT"
  | "PY"
  | "QA"
  | "RA"
  | "RF"
  | "SC"
  | "SH"
  | "SI"
  | "SP"
  | "TA"
  | "VE"
  | "VL";

export enum ZoomLevel {
  // Too far
  NONE,
  // Really zoomed out
  CAMPUS,
  // Medium
  OUTDOOR,
  // Close
  INDOOR,
}

export enum POICategory {
  Classroom,
  Washroom,
  Restaurant,
  Association,
  Elevator,
  Escalator,
  EscalatorUp,
  EscalatorDown,
  Stairs,
  Exit,
  Service,
}

export enum ConnectorType {
  Elevator,
  Stairs,
  Ramp,
  EscalatorUp,
  EscalatorDown,
}

export enum TravelState {
  NONE,
  PLANNING,
  TRAVELLING,
}

export enum TravelMode {
  SHUTTLE,
  ACCESSIBLE,
  DRIVING,
  BICYCLE,
  WALKING,
  TRANSIT,
}
