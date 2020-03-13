import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  PanResponder,
  Linking,
  Animated
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
<<<<<<< HEAD:src/components/sliding-panel/sliding-panel.component.tsx
import { Buildings } from "../../constants/buildings.data";
=======
import { BuildingInformations } from "../../constants/building-information.data";
>>>>>>> 29cc58c... Refactor component name:src/components/building-information/building-information.component.tsx
import { BuildingId } from "../../types/main";
import { AntDesign, Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

interface IProps {
  tappedBuilding: BuildingId;
  showAdditionalInfo: boolean;
  onClosePanel: () => void;
  setTappedBuilding: (value: React.SetStateAction<BuildingId>) => void;
}

interface IState {
  allowDragging: boolean;
  swiped: boolean;
}

/**
 * Component for additional information panel
 */
class BuildingInformation extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      allowDragging: true,
      swiped: false
    };
  }

  render() {
    const {
      tappedBuilding,
      onClosePanel,
      showAdditionalInfo,
      setTappedBuilding
    } = this.props;
    const draggableRange = { top: height / 2, bottom: 100 };
    const animatedValue = new Animated.Value(draggableRange.bottom); // Initial position is at bottom.

    return (
      <SlidingUpPanel
        allowDragging={this.state.allowDragging}
        draggableRange={draggableRange}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        ref={c => (this._panel = c)}
        // Speed of the panel
        friction={0.8}
      >
        {showAdditionalInfo ? (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.xButton}
              onPress={() => {
                onClosePanel();
                this._panel.hide();
                setTappedBuilding(null);
              }}
            >
              <Feather name="x" size={40} color="white" />
            </TouchableOpacity>
            {BuildingInformations.filter(
              info => info.building == BuildingId[tappedBuilding]
            ).map((buildingInfo, key) => {
              return (
                <View key={key}>
                  <View style={styles.header}>
                    <View style={styles.flexTextContainer}>
                      <AntDesign name="up" size={44} />
                    </View>
                    <View style={styles.flexTextContainer}>
                      <Text style={styles.headerText}>{buildingInfo.name}</Text>
                    </View>
                    <View style={styles.flexTextContainer}>
                      <Text style={styles.normalText}>
                        {buildingInfo.address}
                      </Text>
                    </View>
                  </View>

                  <ScrollView
                    style={styles.scrollView}
                    onTouchStart={() => this.setState({ allowDragging: false })}
                    onTouchEnd={() => this.setState({ allowDragging: true })}
                    onTouchCancel={() => this.setState({ allowDragging: true })}
                  >
                    <View style={styles.buildingInformation}>
                      <View>
                        {buildingInfo.departments ? (
                          <Text style={styles.headerText}> Departments: </Text>
                        ) : null}
                      </View>
                      {buildingInfo.departments &&
                        buildingInfo.departments.map(department => {
                          return (
                            <View key={department.id} style={styles.listItem}>
                              <Text
                                style={styles.normalText}
                                onPress={() => {
                                  Linking.openURL(department.link);
                                }}
                              >
                                {"\u2022  "}
                              </Text>
                              <Text
                                style={styles.linkText}
                                onPress={() => {
                                  Linking.openURL(department.link);
                                }}
                              >
                                {department.title}
                              </Text>
                            </View>
                          );
                        })}

                      <View>
                        {buildingInfo.services ? (
                          <Text style={styles.headerText}> Services: </Text>
                        ) : null}

                        {buildingInfo.services &&
                          buildingInfo.services.map(service => {
                            return (
                              <View key={service.id} style={styles.listItem}>
                                <Text
                                  style={styles.normalText}
                                  onPress={() => {
                                    Linking.openURL(service.link);
                                  }}
                                >
                                  {"\u2022  "}
                                </Text>
                                <Text
                                  style={styles.linkText}
                                  onPress={() => {
                                    Linking.openURL(service.link);
                                  }}
                                >
                                  {service.title}
                                </Text>
                              </View>
                            );
                          })}
                      </View>
                    </View>
                  </ScrollView>
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
  header: {
    justifyContent: "space-between",
    display: "flex"
  },
  uparrow: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 5
  },
  xButton: {
    position: "absolute",
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AA2B45",
    display: "flex",
    zIndex: 1
  },
  xButtonText: {
    color: "white",
    fontSize: 20
  },
  flexTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  listItem: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row"
  },
  headerText: {
    fontSize: 24
  },
  normalText: {
    fontSize: 16
  },
  linkText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline"
  },
  scrollView: { height: 300 },
  buildingInformation: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default BuildingInformation;
