import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { CampusId, Region } from "../../types/main";

import { getCampusById } from "../../constants";
import {
  CONCORDIA_RED,
  INACTIVE_BUTTON_COLOR,
  CAMPUS_TOGGLE_HEIGHT,
  screenWidth
} from "../../styles";

interface IProps {
  onCampusToggle: (region: Region) => void;
}

/**
 * Component for toggling the MapView region between the 2 Concordia Campuses
 *
 * @param onCampusToggle Function to handle campus toggle
 */
const CampusToggle = ({ onCampusToggle }: IProps) => {
  const [isSGW, setIsSGW] = useState(true);

  /**
   * Sets region to the SGW campus
   */
  const onSGWPressButton = () => {
    setIsSGW(true);
    onCampusToggle(getCampusById(CampusId.SGW).region);
  };

  /**
   * Sets region to the Loyola campus
   */
  const onLoyolaPressButton = () => {
    setIsSGW(false);
    onCampusToggle(getCampusById(CampusId.Loyola).region);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        testID="SGWButton"
        onPress={onSGWPressButton}
        underlayColor="white"
      >
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
      <TouchableHighlight
        testID="loyolaButton"
        onPress={onLoyolaPressButton}
        underlayColor="white"
      >
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

// Padding required for text to center it in the button
const padding = CAMPUS_TOGGLE_HEIGHT / 2 - 15;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    height: CAMPUS_TOGGLE_HEIGHT,
    width: screenWidth,
    bottom: 0,
    zIndex: 0
  },
  buttonSelected: {
    flex: 1,
    width: screenWidth / 2,
    alignItems: "center",
    backgroundColor: CONCORDIA_RED
  },
  buttonNotSelected: {
    flex: 1,
    width: screenWidth / 2,
    alignItems: "center",
    backgroundColor: INACTIVE_BUTTON_COLOR
  },
  buttonTextSelected: {
    textAlign: "center",
    paddingTop: padding,
    fontSize: 20,
    fontWeight: "bold",
    color: INACTIVE_BUTTON_COLOR
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
