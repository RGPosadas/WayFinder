import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Dimensions, View } from "react-native";
import { Slidingpanel } from "../../components/Slidingpanel";
import { Buildinghighlights } from "../../components/Buildinghighlights";

const Map = props => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [tappedBuilding, setTappedBuilding] = useState("");

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
        region={props.region}
      >
        <Buildinghighlights
          tappedBuilding={tappedBuilding}
          showAdditionalInfo={showAdditionalInfo}
          displayBuilding={onDisplayBuilding}
        />
      </MapView>

      <Slidingpanel
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

/*

class MapScreen extends React.Component {
  onChangeBuildinghighlights = this.onChangeBuildinghighlights.bind(this);
  onChangeSlidingPanel = this.onChangeSlidingPanel.bind(this);

  constructor(props) {
    super(props);

    this.state = {
      fillColor: null,
      showAdditionalInfo: false,
      tappedBuilding: ""
    };
  }

  setColors = () => {
    this.setState({
      fillColor: "rgba(128, 0, 32, 0.5)"
    });
  };

  componentDidMount() {
    setTimeout(() => this.setColors(), 11);
  }

  onChangeBuildinghighlights(showAdditionalInfo, tappedBuilding) {
    this.setState({
      showAdditionalInfo: showAdditionalInfo,
      tappedBuilding: tappedBuilding
    });
  }

  onChangeSlidingPanel(showAdditionalInfo) {
    this.setState({
      showAdditionalInfo: showAdditionalInfo
    });
  }

  render() {
    const { fillColor, tappedBuilding, showAdditionalInfo } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsCompass={true}
          showsBuildings={true}
          initialRegion={{
            latitude: 45.45828,
            longitude: -73.640451,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          <Buildinghighlights
            fillColor={fillColor}
            tappedBuilding={tappedBuilding}
            showAdditionalInfo={showAdditionalInfo}
            onChangeBuildinghighlights={this.onChangeBuildinghighlights}
            updateShared={this.updateShared}
          />
        </MapView>

        <Slidingpanel
          styles={styles}
          tappedBuilding={tappedBuilding}
          showAdditionalInfo={showAdditionalInfo}
          onChangeSlidingPanel={this.onChangeSlidingPanel}
          updateShared={this.updateShared}
        />
      </View>
    );
  }
}

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

export default MapScreen;


 */
