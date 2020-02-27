import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { RegionProvider } from "../../context/region.context";

import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BuildingHighlights from "../../components/building-highlights/building-highlights.component";
import SlidingPanel from "../../components/sliding-panel/sliding-panel.component";

const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [tappedBuilding, setTappedBuilding] = useState("");

  const onDisplayBuilding = (showAdditionalInfo, tappedBuilding) => {
    setShowAdditionalInfo(showAdditionalInfo);
    setTappedBuilding(tappedBuilding);
  };

  const onClosePanel = showAdditionalInfo => {
    setShowAdditionalInfo(showAdditionalInfo);
  };

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
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          showsBuildings={true}
          showsUserLocation={true}
          region={region}
          // onRegionChangeComplete={region => setRegion(region)}
        >
          <BuildingHighlights
            tappedBuilding={tappedBuilding}
            showAdditionalInfo={showAdditionalInfo}
            displayBuilding={onDisplayBuilding}
          />
        </MapView>

        <SlidingPanel
          tappedBuilding={tappedBuilding}
          showAdditionalInfo={showAdditionalInfo}
          closePanel={onClosePanel}
        />
        <View style={styles.campusToggle}>
          <CampusToggle />
        </View>
      </View>
    </RegionProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  campusToggle: {
    position: "absolute",
    bottom: 0
  }
});

export default MapScreen;
