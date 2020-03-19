import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { RegionProvider } from "../../context/region.context";
import CampusToggle from "../../components/campus-toggle/campus-toggle.component";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapOverlays from "../../components/map-overlays/map-overlays.component";
import BuildingInformation from "../../components/building-information/building-information.component";
import { Buildings } from "../../constants/buildings.data";
import LocationButton from "../../components/location-button/location-button.component";
import { getCurrentLocationAsync } from "../../services/location.service";
import { isPointInPolygon } from "geolib";
import {
  Location,
  Region,
  BuildingId,
  IndoorInformation,
  ZoomLevel,
  IndoorFloor
} from "../../types/main";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { getCampusById } from "../../constants/campus.data";
import { CampusId } from "../../types/main";
import FloorPicker from "../../components/floor-picker/floor-picker.component";
import { inRange } from "../../services/utility.service";
import {
  indoorRange,
  outdoorRange,
  campusRange
} from "../../constants/floors.data";

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
        latitudeDelta: currentRegion.latitudeDelta,
        longitudeDelta: currentRegion.longitudeDelta
      });

      // Attemp to find the building the user is in.
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
    });
  };

  /**
   * Handles react-native-maps events for indoor floors.
   *
   * @param event The event object for indoor floor entry.
   */
  const onIndoorViewEntry = (event: any) => {
    const buildingInfo = event.nativeEvent.IndoorBuilding;

    let floors: IndoorFloor[] = buildingInfo.levels.map(floor => {
      return {
        level: Number(floor.name),
        index: floor.index
      };
    });

    let currentFloor: IndoorFloor =
      floors.length > 0
        ? floors.filter(
            floor => floor.index === buildingInfo.activeLevelIndex
          )[0]
        : null;
    let temp: IndoorInformation = {
      currentFloor: currentFloor,
      floors: floors
    };
    setIndoorInformation(temp);
  };

  /**
   * Handles presses on the floor picker
   *
   * @param index Index of the active floor
   */
  const onFloorPickerButtonPress = (index: number) => {
    mapRef.current.setIndoorActiveLevelIndex(index);
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

  return (
    <RegionProvider value={currentRegion}>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          showsBuildings={true}
          showsUserLocation={true}
          initialRegion={currentRegion}
          onRegionChangeComplete={region => handleOnRegionChange(region)}
          onIndoorBuildingFocused={event => onIndoorViewEntry(event)}
        >
          <MapOverlays
            onBuildingTap={onBuildingTap}
            tappedBuilding={tappedBuilding}
            zoomLevel={zoomLevel}
            indoorInformation={indoorInformation}
          />
        </MapView>

        <CampusToggle onCampusToggle={onCampusToggle} />

        <LocationButton onLocationButtonPress={onLocationButtonPress} />

        <FloorPicker
          indoorInformation={indoorInformation}
          onFloorPickerButtonPress={onFloorPickerButtonPress}
        />

        <BuildingInformation
          tappedBuilding={tappedBuilding}
          showBuildingInfo={showBuildingInfo}
          onClosePanel={onClosePanel}
        />

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
  },
  campusToggle: {
    position: "absolute",
    bottom: 0
  },
  marker: {
    backgroundColor: "red"
  }
});

export default MapScreen;
