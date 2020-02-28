import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  PanResponder,
  Linking
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId } from "../../types/main";

const { height } = Dimensions.get("window");
/**
 * Component for additional information panel
 */
class SlidingPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMoreInfo: "flex",
      allowDragging: true
    };
  }

  render() {
    const { tappedBuilding, closePanel, showAdditionalInfo } = this.props;
    const { displayMoreInfo } = this.state;
    return (
      <SlidingUpPanel
        allowDragging={this.state.allowDragging}
        draggableRange={{ top: height / 2, bottom: 100 }}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        ref={c => (this._panel = c)}
        // Speed of the panel
        friction={0.8}
        // This allows the panel to be on top
        style={{ zIndex: 1, backgroundColor: "white" }}
        onBottomReached={() => {
          this.setState({
            displayMoreInfo: "flex"
          });
        }}
      >
        {showAdditionalInfo ? (
          <View style={styles.container}>
            {BuildingInformation.filter(
              info => info.building == BuildingId[tappedBuilding]
            ).map((buildingInfo, key) => {
              return (
                <View key={key}>
                  {console.log(buildingInfo)}
                  <View
                    style={{
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <TouchableOpacity
                      style={styles.xButton}
                      onPress={() => {
                        closePanel();
                        this._panel.hide();
                        this.setState({
                          displayMoreInfo: "flex"
                        });
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 10 }}>X</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.text}>
                    <Text>{buildingInfo.name}</Text>
                    <Text>{buildingInfo.address}</Text>
                    <Text
                      style={{
                        paddingTop: 20,
                        color: "grey",
                        display: displayMoreInfo
                      }}
                    >
                      Swipe up for more info
                    </Text>
                  </View>

                  <View style={{ height: 220 }}>
                    <ScrollView
                      onTouchStart={() =>
                        this.setState({ allowDragging: false })
                      }
                      onTouchEnd={() => this.setState({ allowDragging: true })}
                      onTouchCancel={() =>
                        this.setState({ allowDragging: true })
                      }
                    >
                      <View style={{ marginLeft: 20 }}>
                        {buildingInfo.departments ? (
                          <Text style={{ fontSize: 25 }}> Departments: </Text>
                        ) : null}
                      </View>
                      {buildingInfo.departments &&
                        buildingInfo.departments.map(department => {
                          return (
                            <View
                              key={department.id}
                              style={{ marginLeft: 44.5 }}
                            >
                              <Text
                                style={{ fontSize: 12 }}
                                onPress={() => {
                                  Linking.openURL(department.link);
                                }}
                              >
                                {"\u2022  " + department.title}
                              </Text>
                            </View>
                          );
                        })}

                      <View style={{ marginLeft: 20 }}>
                        {buildingInfo.services ? (
                          <Text style={{ fontSize: 25 }}> Services: </Text>
                        ) : null}

                        {buildingInfo.services &&
                          buildingInfo.services.map(service => {
                            return (
                              <View key={service.id} style={{ marginLeft: 25 }}>
                                <Text
                                  style={{ fontSize: 12 }}
                                  onPress={() => {
                                    Linking.openURL(service.link);
                                  }}
                                >
                                  {"\u2022  " + service.title}
                                </Text>
                              </View>
                            );
                          })}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 2,
    backgroundColor: "white"
  },
  panel: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
  },

  text: {
    alignItems: "center",
    justifyContent: "center"
  },
  xButton: {
    alignItems: "center",
    backgroundColor: "#AA2B45",
    padding: 5
  }
});

export default SlidingPanel;
