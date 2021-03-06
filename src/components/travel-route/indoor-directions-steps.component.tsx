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
import { FloorPath } from "../../types/main";
import {
  CONCORDIA_RED,
  screenHeight,
  WHITE_BACKGROUND_COLOR,
} from "../../styles";
import IndoorPathPlanningService from "../../services/indoor-path-planning.service";

interface IProps {
  floorPaths: FloorPath[];
  onCloseTravelSteps: () => void;
}

interface IState {
  allowDragging: boolean;
}

/**
 * A sliding panel that shows the steps to the destination
 */
class IndoorDirectionSteps extends React.Component<IProps, IState> {
  _panel: SlidingUpPanel;

  _draggedValue: Animated.Value;

  constructor(props) {
    super(props);

    this.state = {
      allowDragging: true,
    };
  }

  render() {
    const { floorPaths, onCloseTravelSteps } = this.props;
    const draggableRange = { top: screenHeight / 2, bottom: 113 };
    const { allowDragging } = this.state;
    if (floorPaths)
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
          <View style={styles.container}>
            <TouchableOpacity
              testID="dirPanelCloseButton"
              style={styles.xButton}
              onPressOut={() => {
                onCloseTravelSteps();
                this._panel.hide();
              }}
            >
              <Feather name="x" size={35} color="white" />
            </TouchableOpacity>

            <View testID="dirPanel" style={styles.panelContent}>
              <View style={styles.uparrow}>
                <AntDesign name="up" size={40} />
              </View>
              <Text testID="dirPanelDisplayName" style={styles.header}>
                Indoor Directions
              </Text>

              <ScrollView
                testID="dirScrollView"
                onTouchStart={() => this.setState({ allowDragging: false })}
                onTouchEnd={() => this.setState({ allowDragging: true })}
                onTouchCancel={() => this.setState({ allowDragging: true })}
                style={styles.scrollView}
                contentContainerStyle={styles.directions}
              >
                {IndoorPathPlanningService.getInstance()
                  .getDirectionsText(floorPaths)
                  .map((direction, index) => (
                    <Text
                      testID={`stepNumber${index}`}
                      key={index}
                      style={styles.directionText}
                    >
                      {index + 1}. {direction}
                    </Text>
                  ))}
              </ScrollView>
            </View>
          </View>
        </SlidingUpPanel>
      );
    return null;
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    textAlign: "center",
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
    color: "white",
    fontSize: 20,
  },
  directionText: {
    fontSize: 16,
    marginTop: 10,
  },
  directions: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    width: "100%",
  },
  scrollView: { width: "100%" },
});

export default IndoorDirectionSteps;
