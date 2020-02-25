import React, { useState, useContext } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import SlidingPanel from "../sliding-panel/sliding-panel.component";
import BuildingHighlights from "../building-highlights/building-highlights.component";

import RegionContext from "../../context/region.context";

const Map = () => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [tappedBuilding, setTappedBuilding] = useState("");
  const { region, setRegion } = useContext(RegionContext);

  const onDisplayBuilding = (showAdditionalInfo, tappedBuilding) => {
    setShowAdditionalInfo(showAdditionalInfo);
    setTappedBuilding(tappedBuilding);
  };

  const onClosePanel = showAdditionalInfo => {
    setShowAdditionalInfo(showAdditionalInfo);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
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
        styles={styles}
        tappedBuilding={tappedBuilding}
        showAdditionalInfo={showAdditionalInfo}
        closePanel={onClosePanel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },
  panelHeader: {
    height: 120,
    backgroundColor: "white"
  },
  text: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Map;
