import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";

const CampusToggle = props => {
  /**
   * this hook sets a boolean variable isSGW to know which current
   * button is pressed
   */
  const [isSGW, setIsSGW] = useState(true);

  /**
   * Changes the boolean value and the coordinates that will change
   * the map view
   */
  const onSGWPressButton = () => {
    setIsSGW(true);
    props.regionChange({
      latitude: 45.495869,
      longitude: -73.578107,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121
    });
  };

  const onLoyolaPressButton = () => {
    setIsSGW(false);
    props.regionChange({
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
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Dimensions.get("window").height / 7,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 35
  },
  buttonSelected: {
    flex: 1,
    marginBottom: 30,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: "#AA2B45"
  },
  buttonNotSelected: {
    flex: 1,
    marginBottom: 30,
    width: Dimensions.get("window").width / 2,
    alignItems: "center",
    backgroundColor: "#F2F2F2"
  },
  buttonTextSelected: {
    textAlign: "center",
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#F2F2F2"
  },
  buttonTextNotSelected: {
    textAlign: "center",
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "#AA2B45"
  }
});

export default CampusToggle;
