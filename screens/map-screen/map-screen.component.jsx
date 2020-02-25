import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { RegionProvider } from "../../context/region.context";

import Map from "../../components/map/map.component";
import CampusToggle from "../../components/campus-toggle/campus-toggle.component";

const MapScreen = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    setRegion({
      latitude: 45.495869,
      longitude: -73.578107,
      latitudeDelta: 0.0522,
      longitudeDelta: 0.0421
    });
  }, []);

  return (
    <RegionProvider value={{ region, setRegion }}>
      <View style={styles.container}>
        <Map />
        <CampusToggle />
      </View>
    </RegionProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MapScreen;
