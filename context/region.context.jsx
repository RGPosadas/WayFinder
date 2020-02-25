import React from "react";

const RegionContext = React.createContext(null);

export const RegionProvider = RegionContext.Provider;
export const RegionConsumer = RegionContext.Consumer;

export default RegionContext;
