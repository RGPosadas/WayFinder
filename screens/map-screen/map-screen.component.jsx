import React from "react";
import { StyleSheet, View } from "react-native";
import Map from "../../components/map/map.component";
import CampusToggle from "../../components/campus-toggle/campus-toggle.component";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 45.495869,
        longitude: -73.578107,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421
      }
    };
  }

  /**
   * this will change the value of the coordinates when a toggle button
   * is pressed or called by any child
   */
  onRegionChange = newRegion => {
    this.setState({ region: newRegion });
  };

  render() {
    return (
      <View style={styles.container}>
        <Map region={this.state.region} />
        <CampusToggle regionChange={this.onRegionChange} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MapScreen;
