export interface Location {
  latitude: number;
  longitude: number;
}

export interface Region extends Location {
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface Building {
  id: string;
  name: string;
  address: string;
  boundingBox: Location[];
}

export interface Campus {
  id: string;
  name: string;
  description: string;
}

export interface IndoorLocation {
  location: Location;
  id: string;
  buildingId: string;
  level: number;
}

export interface POI extends IndoorLocation {
  name: string;
  description: string;
  category: POICategory;
}

export enum POICategory {
  Classroom,
  Washroom,
  Restaurant,
  Association
}

export interface Connector {
  id: string;
  buildingId: string;
  name: string;
  connections: Connection[];
}

export interface Connection {
  level: number;
  location: Location;
}

export enum ConnectorType {
  Elevator,
  Stairs,
  Ramp,
  Escalator
}
