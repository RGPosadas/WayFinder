import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";

import { CAMPUS_TOGGLE_HEIGHT, CONCORDIA_RED } from "../../constants/style";
import { getCampus } from "../../constants/campus.data";
import { CampusId } from "../../types/main";

/**
 * Component for toggling the MapView region between the 2 Concordia Campuses
 */
const CampusToggle = ({ onCampusToggle }) => {
  const [isSGW, setIsSGW] = useState(true);

  /**
   * Sets region to the SGW campus
   */
  const onSGWPressButton = () => {
    setIsSGW(true);
    onCampusToggle(getCampus(CampusId.SGW).region);
  };

  /**
   * Sets region to the Loyola campus
   */
  const onLoyolaPressButton = () => {
    setIsSGW(false);
    onCampusToggle(getCampus(CampusId.Loyola).region);
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

// Color for the inactive button
const inactiveColor = "#F2F2F2";

// Padding required for text to center it in the button
const padding = CAMPUS_TOGGLE_HEIGHT / 2 - 15;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    height: CAMPUS_TOGGLE_HEIGHT,
    width: Dimensions.get("window").width,
    bottom: 0,
    zIndex: 0
  },
  buttonSelected: {
    flex: 1,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: CONCORDIA_RED
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
    color: CONCORDIA_RED
  }
});

export default CampusToggle;
