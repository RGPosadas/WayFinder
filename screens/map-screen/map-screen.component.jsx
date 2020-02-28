import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

import { RegionProvider } from "../../context/region.context";

import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BuildingHighlights from "../../components/building-highlights/building-highlights.component";
import SlidingPanel from "../../components/sliding-panel/sliding-panel.component";
import { CampusCoordinates } from "../../constants/coordinates.data";

/**
 * Screen for the Map and its Overlayed components
 */
const MapScreen = () => {
  const [region, setRegion] = useState(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [tappedBuilding, setTappedBuilding] = useState("");

  /**
   * Creates a reference to the MapView Component that is rendered.
   * Allows to access component methods.
   */
  const mapRef = useRef(null);

  /**
   * Displays the additional information for a building when tapped
   * @param {boolean} showAdditionalInfo
   * @param {string buildingId} tappedBuilding
   */
  const onDisplayBuilding = (showAdditionalInfo, tappedBuilding) => {
    setShowAdditionalInfo(showAdditionalInfo);
    setTappedBuilding(tappedBuilding);
  };

  /**
   * This function closes the additional info panel
   */
  const onClosePanel = () => {
    setShowAdditionalInfo(false);
  };

  /**
   * This functions animates the map view to the input region
   * @param {Object<Region>} region
   */
  const onCampusToggle = region => {
    mapRef.current.animateToRegion(region);
  };

  /**
   * Set the region to the SGW campus when this component mounts
   */
  useEffect(() => {
    setRegion(CampusCoordinates.SGW);
  }, []);

  return (
    <RegionProvider value={{ region, setRegion }}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          showsBuildings={true}
          showsUserLocation={true}
          initialRegion={region}
          onRegionChangeComplete={region => setRegion(region)}
        >
          <BuildingHighlights displayBuilding={onDisplayBuilding} />
        </MapView>

        <CampusToggle campusToggle={onCampusToggle} />

        <SlidingPanel
          tappedBuilding={tappedBuilding}
          showAdditionalInfo={showAdditionalInfo}
          closePanel={onClosePanel}
        />
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
    ...StyleSheet.absoluteFillObject,
    zIndex: 0
  }
});

export default MapScreen;
