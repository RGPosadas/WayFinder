import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

import { RegionProvider } from "../../context/region.context";

import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BuildingHighlights from "../../components/building-highlights/building-highlights.component";
import SlidingPanel from "../../components/sliding-panel/sliding-panel.component";
import {
  CampusCoordinates,
  BuildingCoordinates
} from "../../constants/coordinates.data";
import BuildingLocation from "../../components/building-location/building-location.component";
import { getCurrentLocationAsync } from "../../services/location.service";
import { isPointInPolygon } from "geolib";
import { Location, Region } from "../../types/main";
import FlashMessage, { showMessage } from "react-native-flash-message";

/**
 * Screen for the Map and its Overlayed components
 */
const MapScreen = () => {
  const [region, setRegion] = useState<Region>(null);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [tappedBuilding, setTappedBuilding] = useState("");
  const [currentLocation, setCurrentLocation] = useState<Location>(null);

  /**
   * Creates a reference to the MapView Component that is rendered.
   * Allows to access component methods.
   */
  const mapRef = useRef<MapView>();

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
   * @param region The region to animate to
   */
  const onCampusToggle = (region: Region) => {
    mapRef.current.animateToRegion(region);
  };

  /*
   * Handles the event when the user pressed on the Building Location Button
   *
   * Sets the current location to whereever the user currently is, and then
   * perform point-polygon collision detection to find which building the
   * user is in.
   */
  const onBuildingLocationPress = (): void => {
    getCurrentLocationAsync().then(response => {
      // Set current location
      setCurrentLocation({
        latitude: response.coords.latitude,
        longitude: response.coords.longitude
      });
      // Relocate view
      mapRef.current.animateToRegion({
        latitude: response.coords.latitude,
        longitude: response.coords.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta
      });

      // Attemp to find the building the user is in.
      let inBuilding = false;
      Object.keys(BuildingCoordinates).forEach(building => {
        const coordinates = BuildingCoordinates[building];
        if (isPointInPolygon(response.coords, coordinates)) {
          showMessage({
            message: `You're currently in the ${building} building!`,
            type: "info"
          });
          onDisplayBuilding(true, building);
          inBuilding = true;
        }
      });
      // Notify user that they aren't in a building currently.
      if (!inBuilding) {
        showMessage({
          message: "You're not in any campus building right now!",
          type: "warning"
        });
      }
    });
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
        <BuildingLocation onBuildingLocationPress={onBuildingLocationPress} />
        <FlashMessage position="top" autoHide={true} floating={true} />
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
