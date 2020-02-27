import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";

import RegionContext from "../../context/region.context";
import { CampusCoordinates } from "../../constants/coordinates.data";

/**
 * Component for toggling the MapView region between the 2 Concordia Campuses
 */
const CampusToggle = () => {
  const [isSGW, setIsSGW] = useState(true);
  const { setRegion } = useContext(RegionContext);

  /**
   * Sets region to the SGW campus
   */
  const onSGWPressButton = () => {
    setIsSGW(true);
    setRegion(CampusCoordinates.SGW);
  };

  /**
   * Sets region to the Loyola campus
   */
  const onLoyolaPressButton = () => {
    setIsSGW(false);
    setRegion(CampusCoordinates.loyola);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onSGWPressButton} underlayColor="white">
        <View
          style={[isSGW ? styles.buttonSelected : styles.buttonNotSelected]}
        >
          <Text
            style={[
              isSGW ? styles.buttonTextSelected : styles.buttonTextNotSelected
            ]}
          >
            SGW
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onLoyolaPressButton} underlayColor="white">
        <View
          style={[isSGW ? styles.buttonNotSelected : styles.buttonSelected]}
        >
          <Text
            style={[
              isSGW ? styles.buttonTextNotSelected : styles.buttonTextSelected
            ]}
          >
            Loyola
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// Color for the active button
const activeColor = "#AA2B45";

// Color for the inactive button
const inactiveColor = "#F2F2F2";

// Height of the toggle
const height = 80;

// Padding required for text to center it in the button
const padding = height / 2 - 15;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: height,
    width: Dimensions.get("window").width
  },
  buttonSelected: {
    flex: 1,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: activeColor
  },
  buttonNotSelected: {
    flex: 1,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: inactiveColor
  },
  buttonTextSelected: {
    textAlign: "center",
    paddingTop: padding,
    fontSize: 20,
    fontWeight: "bold",
    color: inactiveColor
  },
  buttonTextNotSelected: {
    textAlign: "center",
    paddingTop: padding,
    fontSize: 20,
    fontWeight: "bold",
    color: activeColor
  }
});

export default CampusToggle;
