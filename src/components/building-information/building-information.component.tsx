import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { AntDesign, Feather } from "@expo/vector-icons";
import { getBuildingById } from "../../constants";
import { BuildingId, Building } from "../../types/main";
import {
  CONCORDIA_RED,
  screenHeight,
  WHITE_BACKGROUND_COLOR,
  WHITE_FOREGROUND_COLOR,
} from "../../styles";
import LinkItem from "./link-element.component";

interface IProps {
  tappedBuilding: BuildingId;
  showBuildingInfo: boolean;
  onClosePanel: () => void;
  startBuildingTravelPlan: (Building) => void;
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
      allowDragging: true,
    };
  }

  render() {
    const {
      tappedBuilding,
      onClosePanel,
      showBuildingInfo,
      startBuildingTravelPlan,
    } = this.props;
    const draggableRange = { top: screenHeight / 2, bottom: 113 };
    const { allowDragging } = this.state;
    const building = getBuildingById(tappedBuilding);
    return (
      <SlidingUpPanel
        allowDragging={allowDragging}
        draggableRange={draggableRange}
        animatedValue={this._draggedValue}
        showBackdrop={false}
        ref={(c) => (this._panel = c)}
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
              <Feather name="x" size={35} color={WHITE_FOREGROUND_COLOR} />
            </TouchableOpacity>

            <View testID="panel" style={styles.panelContent}>
              <View style={styles.uparrow}>
                <AntDesign name="up" size={40} />
              </View>
              <Text
                testID="panelDisplayName"
                style={StyleSheet.flatten([
                  styles.buildingName,
                  { fontSize: building.displayName.length > 30 ? 18 : 24 },
                ])}
              >
                {building.displayName}
              </Text>

              <TouchableOpacity
                style={styles.travelButton}
                testID="building-info-start-travel"
                onPressOut={() => {
                  startBuildingTravelPlan(building);
                }}
              >
                <Text style={styles.travelButtonText}>Travel Here!</Text>
              </TouchableOpacity>

              <ScrollView
                testID="scrollView"
                onTouchStart={() => this.setState({ allowDragging: false })}
                onTouchEnd={() => this.setState({ allowDragging: true })}
                onTouchCancel={() => this.setState({ allowDragging: true })}
                style={{ width: "100%" }}
                contentContainerStyle={styles.buildingInformation}
              >
                <Text style={styles.headerText}>Address: </Text>
                <Text testID="panelAddress" style={styles.normalText}>
                  {building.address}
                </Text>

                <Text style={styles.headerText} testID="scrollDepartments">
                  {building.departments.length !== 0
                    ? "Departments:"
                    : "No departments available."}
                </Text>

                {building.departments.map((department) => {
                  return <LinkItem key={department.id} linkItem={department} />;
                })}

                <Text style={styles.headerText} testID="scrollServices">
                  {building.services.length !== 0
                    ? "Services:"
                    : "No services available."}
                </Text>

                {building.services.map((service) => {
                  return <LinkItem key={service.id} linkItem={service} />;
                })}
              </ScrollView>
            </View>
          </View>
        ) : null}
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_BACKGROUND_COLOR,
  },
  panelContent: {
    height: screenHeight / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  uparrow: {
    marginBottom: -7,
  },
  buildingName: {
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  travelButton: {
    backgroundColor: CONCORDIA_RED,
    alignSelf: "center",
    alignItems: "center",
    padding: 7,
    marginBottom: 15,
    width: "40%",
    borderRadius: 100,
  },
  travelButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: WHITE_FOREGROUND_COLOR,
  },
  xButton: {
    position: "absolute",
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CONCORDIA_RED,
    display: "flex",
    zIndex: 1,
  },
  xButtonText: {
    color: WHITE_FOREGROUND_COLOR,
    fontSize: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  normalText: {
    fontSize: 16,
  },
  buildingInformation: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: "100%",
  },
});

export default BuildingInformation;
