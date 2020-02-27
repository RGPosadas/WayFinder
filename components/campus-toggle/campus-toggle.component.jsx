import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";

import RegionContext from "../../context/region.context";

const CampusToggle = () => {
  /**
   * this hook sets a boolean variable isSGW to know which current
   * button is pressed
   */
  const [isSGW, setIsSGW] = useState(true);
  const { setRegion } = useContext(RegionContext);
  /**
   * Changes the boolean value and the coordinates that will change
   * the map view
   */
  const onSGWPressButton = () => {
    setIsSGW(true);
    setRegion({
      latitude: 45.495869,
      longitude: -73.578107,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121
    });
  };

  const onLoyolaPressButton = () => {
    setIsSGW(false);
    setRegion({
      latitude: 45.4584,
      longitude: -73.64045,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121
    });
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

/**
 * TODO: styling might need to be changed @Ragith
 */
const activeColor = "#AA2B45";
const inactiveColor = "#F2F2F2";
const height = 80;
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
