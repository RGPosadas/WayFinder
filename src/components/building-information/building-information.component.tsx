import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  Linking,
  Animated
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Buildings } from "../../constants/buildings.data";
import { BuildingId } from "../../types/main";
import {
  CONCORDIA_RED,
  WHITE_BACKGROUND_COLOR
} from "../../styles/colors.styles";

const { height } = Dimensions.get("window");

interface IProps {
  tappedBuilding: BuildingId;
  showBuildingInfo: boolean;
  onClosePanel: () => void;
}

interface IState {
  allowDragging: boolean;
}

/**
 * Component for additional information panel
 */
class BuildingInformation extends React.Component<IProps, IState> {
  _panel: SlidingUpPanel;

  _draggedValue: Animated.Value;

  constructor(props) {
    super(props);

    this.state = {
      allowDragging: true
    };
  }

  render() {
    const { tappedBuilding, onClosePanel, showBuildingInfo } = this.props;
    const draggableRange = { top: height / 2, bottom: 105 };
    const { allowDragging } = this.state;
    return (
      <SlidingUpPanel
        allowDragging={allowDragging}
        draggableRange={draggableRange}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        ref={c => (this._panel = c)}
        // Speed of the panel
        friction={0.8}
      >
        {showBuildingInfo ? (
          <View style={styles.container}>
            <TouchableOpacity
              testID="panelCloseButton"
              style={styles.xButton}
              onPressOut={() => {
                onClosePanel();
                this._panel.hide();
              }}
            >
              <Feather name="x" size={40} color="white" />
            </TouchableOpacity>
            {Buildings.filter(building => building.id === tappedBuilding).map(
              (building, key) => {
                return (
                  <View testID="panel" key={key}>
                    <View style={styles.header}>
                      <View style={styles.flexTextContainer}>
                        <AntDesign name="up" size={44} />
                      </View>
                      <View style={styles.flexTextContainer}>
                        <Text
                          testID="panelDisplayName"
                          style={styles.headerText}
                        >
                          {building.displayName}
                        </Text>
                      </View>
                      <View style={styles.flexTextContainer}>
                        <Text testID="panelAddress" style={styles.normalText}>
                          {building.address}
                        </Text>
                      </View>
                    </View>

                    <ScrollView
                      testID="scrollView"
                      style={styles.scrollView}
                      onTouchStart={() =>
                        this.setState({ allowDragging: false })
                      }
                      onTouchEnd={() => this.setState({ allowDragging: true })}
                      onTouchCancel={() =>
                        this.setState({ allowDragging: true })
                      }
                    >
                      <View style={styles.buildingInformation}>
                        <View testID="scrollDepartments">
                          {building.departments.length !== 0 ? (
                            <Text style={styles.headerText}>Departments:</Text>
                          ) : (
                            <Text style={styles.headerText}>
                              No departments available.
                            </Text>
                          )}
                        </View>
                        {building.departments &&
                          building.departments.map(department => {
                            return (
                              <View key={department.id} style={styles.listItem}>
                                <Text style={styles.normalText}>
                                  {"\u2022  "}
                                </Text>
                                <Text
                                  nativeID="departments"
                                  style={styles.linkText}
                                  onPress={() => {
                                    if (department.link) {
                                      Linking.openURL(department.link);
                                    }
                                  }}
                                >
                                  {department.title}
                                </Text>
                              </View>
                            );
                          })}

                        <View testID="scrollServices">
                          {building.services.length !== 0 ? (
                            <Text style={styles.headerText}>Services:</Text>
                          ) : (
                            <Text style={styles.headerText}>
                              No services available.
                            </Text>
                          )}

                          {building.services &&
                            building.services.map(service => {
                              return (
                                <View key={service.id} style={styles.listItem}>
                                  <Text style={styles.normalText}>
                                    {"\u2022  "}
                                  </Text>
                                  <Text
                                    testID={service.title}
                                    nativeID="services"
                                    style={styles.linkText}
                                    onPress={() => {
                                      if (service.link) {
                                        Linking.openURL(service.link);
                                      }
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
              }
            )}
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
    backgroundColor: WHITE_BACKGROUND_COLOR
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
    backgroundColor: CONCORDIA_RED,
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
