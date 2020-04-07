import React from "react";
import { Region } from "../types/main";

const RegionContext = React.createContext<Region>({
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
});

export const RegionProvider = RegionContext.Provider;
export const RegionConsumer = RegionContext.Consumer;

export default RegionContext;
