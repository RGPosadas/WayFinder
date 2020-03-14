import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Button,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Buildings } from "../../constants/buildings.data";

const { height } = Dimensions.get("window");
/**
 * Component for additional information panel
 */
class SlidingPanel extends React.Component {
  render() {
    const { tappedBuilding, closePanel, showAdditionalInfo } = this.props;
    return (
      <SlidingUpPanel
        draggableRange={{ top: height / 2, bottom: 100 }}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        ref={c => (this._panel = c)}
        // Speed of the panel
        friction={0.8}
        // This allows the panel to be on top
        style={{ zIndex: 1 }}
      >
        {showAdditionalInfo ? (
          <TouchableWithoutFeedback
            style={styles.panel}
            onPress={() => this._panel.show()}
          >
            <View style={styles.container}>
              <View style={styles.panelHeader}>
                {Buildings.filter(
                  building => building.id == tappedBuilding
                ).map((building, key) => {
                  return (
                    <View key={key}>
                      <View
                        style={{
                          justifyContent: "flex-end",
                          alignItems: "flex-end"
                        }}
                      >
                        <Button
                          onPress={() => {
                            closePanel();
                            this._panel.hide();
                          }}
                          title="X"
                        ></Button>
                      </View>
                      <View style={styles.text}>
                        <Text>{building.displayName}</Text>
                        <Text>{building.address}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>

              <ScrollView>
                <View style={styles.text}>
                  <Text>Here is the content inside panel</Text>
                </View>
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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

export default SlidingPanel;
