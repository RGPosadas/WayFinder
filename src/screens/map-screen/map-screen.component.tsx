import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { isPointInPolygon } from "geolib";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { RegionProvider } from "../../context/region.context";

import Search from "../../components/search/search.component";
import OmniboxDirections from "../../components/search/omnibox-directions.component";
import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapOverlays from "../../components/map-overlays/map-overlays.component";
import BuildingInformation from "../../components/building-information/building-information.component";
import { Buildings } from "../../constants/buildings.data";
import LocationButton from "../../components/location-button/location-button.component";
import { getCurrentLocationAsync } from "../../services/location.service";
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
  TravelState
} from "../../types/main";
import { getCampusById } from "../../constants/campus.data";
import FloorPicker from "../../components/floor-picker/floor-picker.component";
import { inRange } from "../../services/utility.service";
import {
  indoorRange,
  outdoorRange,
  campusRange
} from "../../constants/zoom-range.data";
import { queryText } from "../../services/query-user-input.service";
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
  const [tappedBuilding, setTappedBuilding] = useState<BuildingId>();
  const [currentLocation, setCurrentLocation] = useState<Location>(null);
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>(ZoomLevel.CAMPUS);
  const [indoorInformation, setIndoorInformation] = useState<IndoorInformation>(
    {
      currentFloor: null,
      floors: []
    }
  );
  const [endLocation, setEndLocation] = useState<POI>(null);
  const [startLocation, setStartLocation] = useState<MarkerLocation>(null);
  const [endLocationFocused, setEndLocationFocused] = useState<boolean>(true);
  const [travelState, setTravelState] = useState<TravelState>(TravelState.NONE);

  /**
   * Creates a reference to the MapView Component that is rendered.
   * Allows to access component methods.
   */
  const mapRef = useRef<MapView>();

  /**
   * Handle building tap event.
   * @param tappedBuilding The id of the tapped building
   */
  const onBuildingTap = (tappedBuilding: BuildingId) => {
    setShowBuildingInfo(true);
    setTappedBuilding(tappedBuilding);
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
    getCurrentLocationAsync()
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
        let inBuilding = false;
        Buildings.forEach(building => {
          if (isPointInPolygon(response.coords, building.boundingBox)) {
            showMessage({
              message: `You're currently in the ${building} building!`,
              type: "info"
            });
            onBuildingTap(building.id);
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
    const floors: IndoorFloor[] = buildingInfo.levels.map(floor => {
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
    if (inRange(indoorRange, region.latitudeDelta)) {
      setZoomLevel(ZoomLevel.INDOOR);
    } else if (inRange(outdoorRange, region.latitudeDelta)) {
      setZoomLevel(ZoomLevel.OUTDOOR);
    } else if (inRange(campusRange, region.latitudeDelta)) {
      setZoomLevel(ZoomLevel.CAMPUS);
    } else {
      setZoomLevel(ZoomLevel.NONE);
    }
  };

  /**
   * Set the region to the SGW campus when this component mounts
   */
  useEffect(() => {
    setCurrentRegion(getCampusById(CampusId.SGW).region);
  }, []);

  /**
   *  Set the value of endLocation or initial location depending
   *  on which input the user is focued
   * @param poi
   */
  const setMarkerLocation = (poi: POI | null) => {
    if (endLocationFocused) {
      setTravelState(TravelState.PLANNING);
      setEndLocation(poi);
    } else {
      setStartLocation(poi);
    }
  };

  const setUserLocation = () => {
    if (!currentLocation) {
      getCurrentLocationAsync()
        .then(location => {
          setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.latitude
          });
        })
        .catch(error => {});
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
        queryText={queryText}
        setEndLocationFocused={setEndLocationFocused}
        endLocationFocused={endLocationFocused}
        setTravelState={setTravelState}
      />
    );
  } else if (travelState === TravelState.NONE) {
    search = (
      <Search
        setUserLocation={setUserLocation}
        setEndLocation={setEndLocation}
        queryText={queryText}
        setTravelState={setTravelState}
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
        >
          <MapOverlays
            onBuildingTap={onBuildingTap}
            tappedBuilding={tappedBuilding}
            zoomLevel={zoomLevel}
            indoorInformation={indoorInformation}
            setMarkerLocation={setMarkerLocation}
            endLocation={endLocation}
            startLocation={startLocation}
            travelState={travelState}
          />

          <View style={styles.flashMessage} testID="flashMessage">
            <FlashMessage position="top" autoHide floating />
          </View>
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
        />

        <BuildingInformation
          tappedBuilding={tappedBuilding}
          showBuildingInfo={showBuildingInfo}
          onClosePanel={onClosePanel}
        />
      </View>
      <FlashMessage position="bottom" autoHide floating />
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
  flashMessage: {
    marginTop: 20,
    height: 10,
    zIndex: 0
  }
});

export default MapScreen;
