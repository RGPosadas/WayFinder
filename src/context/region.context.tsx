import React from "react";

const RegionContext = React.createContext({});

export const RegionProvider = RegionContext.Provider;
export const RegionConsumer = RegionContext.Consumer;

export default RegionContext;
