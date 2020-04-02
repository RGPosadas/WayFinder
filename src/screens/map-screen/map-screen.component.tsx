import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { isPointInPolygon } from "geolib";
import { RegionProvider } from "../../context/region.context";

import Search from "../../components/search/search.component";
import OmniboxDirections from "../../components/search/omnibox-directions.component";
import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapOverlays from "../../components/map-overlays/map-overlays.component";
import BuildingInformation from "../../components/building-information/building-information.component";
import { Buildings } from "../../constants/buildings.data";
import LocationButton from "../../components/location-button/location-button.component";

import {
  Location,
  Region,
  BuildingId,
  IndoorInformation,
  ZoomLevel,
  IndoorFloor,
  CampusId,
  POI,
  MarkerLocation,
  TravelState,
  Building
} from "../../types/main";
import { getCampusById } from "../../constants/campus.data";
import FloorPicker from "../../components/floor-picker/floor-picker.component";
import UtilityService from "../../services/utility.service";
import { CURRENT_LOCATION_DISPLAY_TEXT } from "../../styles/text.styles";
import LocationService from "../../services/location.service";

/**
 * Screen for the Map and its related buttons and components
 */
const MapScreen = () => {
  const [currentRegion, setCurrentRegion] = useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0
  });
  const [showBuildingInfo, setShowBuildingInfo] = useState<boolean>(false);
  const [tappedBuilding, setTappedBuilding] = useState<BuildingId | null>(null);
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.CAMPUS);
  const [indoorInformation, setIndoorInformation] = useState<IndoorInformation>(
    {
      currentFloor: null,
      floors: []
    }
  );
  const [endLocation, setEndLocation] = useState<
    MarkerLocation | Building | null
  >(null);
  const [startLocation, setStartLocation] = useState<
    MarkerLocation | Building | null
  >(null);
  const [endLocationFocused, setEndLocationFocused] = useState<boolean>(true);
  const [travelState, setTravelState] = useState<TravelState>(TravelState.NONE);
  const [startLocationDisplay, setStartLocationDisplay] = React.useState<
    string
  >("");

  /**
   * Creates a reference to the MapView Component that is rendered.
   * Allows to access component methods.
   */
  const mapRef = useRef<MapView | undefined>();

  /**
   * Handle building tap event.
   * @param tappedBuilding The tapped building
   */
  const onBuildingTap = (tappedBuilding: Building) => {
    if (travelState === TravelState.NONE) {
      setShowBuildingInfo(true);
    }
    setTappedBuilding(tappedBuilding.id);
    setBuildingMarkerLocation(tappedBuilding);
  };

  /**
   * Set a building as an end location or start location depending on
   * which input the user is focused on.
   * @param building
   */
  const setBuildingMarkerLocation = (building: Building | null) => {
    if (travelState === TravelState.PLANNING) {
      if (endLocationFocused) {
        setEndLocation(building);
      } else {
        setStartLocation(building);
      }
    }
  };

  /**
   * This function closes the additional info panel
   */
  const onClosePanel = () => {
    setShowBuildingInfo(false);
    setTappedBuilding(null);
  };

  /**
   * This functions handles the campus toggle event
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
  const onLocationButtonPress = (): void => {
    LocationService.getInstance()
      .getCurrentLocationAsync(() => {})
      .then(response => {
        // Set current location
        setCurrentLocation({
          latitude: response.coords.latitude,
          longitude: response.coords.longitude
        });

        // Relocate view
        mapRef.current.animateToRegion({
          latitude: response.coords.latitude,
          longitude: response.coords.longitude,
          latitudeDelta: currentRegion.latitudeDelta,
          longitudeDelta: currentRegion.longitudeDelta
        });

        // Attempt to find the building the user is in.
        Buildings.forEach(building => {
          if (isPointInPolygon(response.coords, building.boundingBox)) {
            onBuildingTap(building);
          }
        });
      })
      .catch(error => {});
  };

  /**
   * Handles react-native-maps events for indoor floors.
   *
   * @param event The event object for indoor floor entry.
   */
  const onIndoorViewEntry = (event: any) => {
    const buildingInfo = event.nativeEvent.IndoorBuilding;
    const floors: IndoorFloor[] = buildingInfo.levels.map((floor: any) => {
      return {
        level: Number(floor.name),
        index: floor.index
      };
    });

    const currentFloor: IndoorFloor =
      floors.length > 0
        ? floors.filter(
            floor => floor.index === buildingInfo.activeLevelIndex
          )[0]
        : null;
    const temp: IndoorInformation = {
      currentFloor,
      floors
    };
    setIndoorInformation(temp);
  };

  /**
   * Handles presses on the floor picker
   *
   * @param index Index of the active floor
   */
  const onFloorPickerButtonPress = (index: number) => {
    (mapRef.current as any).setIndoorActiveLevelIndex(index);
    setIndoorInformation({
      currentFloor: indoorInformation.floors.filter(
        floor => floor.index === index
      )[0],
      floors: indoorInformation.floors
    });
  };

  /**
   *
   * @param region Current region of the map
   */
  const handleOnRegionChange = (region: Region) => {
    setCurrentRegion(region);
    setZoomLevel(
      UtilityService.getInstance().getZoomLevelByLatDelta(region.latitudeDelta)
    );
  };

  /**
   * Set the region to the SGW campus when this component mounts
   */
  useEffect(() => {
    setCurrentRegion(getCampusById(CampusId.SGW).region);
  }, []);

  /**
   *  Set a POI as an end location or start location depending
   *  on which input the user is focused on.
   * @param poi
   */
  const onPOIMarkerPress = (poi: POI | null) => {
    if (endLocationFocused) {
      setTravelState(TravelState.PLANNING);
      if (travelState === TravelState.NONE) {
        setUserCurrentLocation();
      }
      setEndLocation(poi);
    } else {
      setStartLocation(poi);
    }
  };

  /**
   * Set the users current location if location services is on.
   */
  const setUserCurrentLocation = () => {
    if (!currentLocation) {
      LocationService.getInstance()
        .getCurrentLocationAsync(() => {
          setStartLocationDisplay(CURRENT_LOCATION_DISPLAY_TEXT);
        })
        .then(location => {
          setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.latitude
          });
        })
        .catch(error => {
          setStartLocationDisplay(null);
        });
    }
  };

  let search;
  if (
    travelState === TravelState.PLANNING ||
    travelState === TravelState.TRAVELLING
  ) {
    search = (
      <OmniboxDirections
        endLocation={endLocation}
        currentLocation={currentLocation}
        setEndLocation={setEndLocation}
        setStartLocation={setStartLocation}
        startLocation={startLocation}
        setEndLocationFocused={setEndLocationFocused}
        endLocationFocused={endLocationFocused}
        setTravelState={setTravelState}
        updateSearchResults={UtilityService.getInstance().updateSearchResults}
        startLocationDisplay={startLocationDisplay}
        setStartLocationDisplay={setStartLocationDisplay}
      />
    );
  } else if (travelState === TravelState.NONE) {
    search = (
      <Search
        setUserCurrentLocation={setUserCurrentLocation}
        setEndLocation={setEndLocation}
        setTravelState={setTravelState}
        updateSearchResults={UtilityService.getInstance().updateSearchResults}
      />
    );
  }
  return (
    <RegionProvider value={currentRegion}>
      <View style={styles.container}>
        {search}
        <MapView
          testID="mapView"
          accessibilityLabel="mapView"
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsCompass
          showsBuildings
          showsUserLocation
          initialRegion={currentRegion}
          onRegionChangeComplete={region => handleOnRegionChange(region)}
          // @ts-ignore
          onIndoorBuildingFocused={event => onIndoorViewEntry(event)}
          showsIndoorLevelPicker={false}
          toolbarEnabled={false}
        >
          <MapOverlays
            onBuildingTap={onBuildingTap}
            tappedBuilding={tappedBuilding}
            zoomLevel={zoomLevel}
            indoorInformation={indoorInformation}
            onPOIMarkerPress={onPOIMarkerPress}
            endLocation={endLocation}
            startLocation={startLocation}
            travelState={travelState}
          />
        </MapView>

        {travelState === TravelState.NONE && (
          <CampusToggle onCampusToggle={onCampusToggle} />
        )}

        {travelState === TravelState.NONE && (
          <LocationButton onLocationButtonPress={onLocationButtonPress} />
        )}

        <FloorPicker
          indoorInformation={indoorInformation}
          onFloorPickerButtonPress={onFloorPickerButtonPress}
          travelState={travelState}
          zoomLevel={zoomLevel}
        />

        {travelState === TravelState.NONE && (
          <BuildingInformation
            tappedBuilding={tappedBuilding}
            showBuildingInfo={showBuildingInfo}
            onClosePanel={onClosePanel}
          />
        )}
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
  },
  campusToggle: {
    position: "absolute",
    bottom: 0
  },
  marker: {
    backgroundColor: "red"
  },
  flashMessageIOS: {
    marginTop: 100,
    height: 1,
    zIndex: 0
  }
});

export default MapScreen;
