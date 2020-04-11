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
import {
  CONCORDIA_RED,
  WHITE_BACKGROUND_COLOR,
  screenHeight,
} from "../../styles";

interface IProps {
  onCloseTravelSteps: () => void;
}

interface IState {
  allowDragging: boolean;
}

/**
 * display text: [counter]. Go to <connector type> on floor <level> in the <buildingId> building
 * next building?
 * start floor?
 */
class TravelSteps extends React.Component<IProps, IState> {
  _panel: SlidingUpPanel;

  _draggedValue: Animated.Value;

  constructor(props) {
    super(props);

    this.state = {
      allowDragging: true,
    };
  }

  render() {
    const { onCloseTravelSteps } = this.props;
    const draggableRange = { top: screenHeight / 2, bottom: 105 };
    const { allowDragging } = this.state;
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
            testID="panelCloseButton"
            style={styles.xButton}
            onPressOut={() => {
              onCloseTravelSteps();
              this._panel.hide();
            }}
          >
            <Feather name="x" size={40} color="white" />
          </TouchableOpacity>
          <View testID="panelTravelSteps">
            <View style={styles.header}>
              <View style={styles.flexTextContainer}>
                <AntDesign name="up" size={44} />
              </View>
              <View style={styles.flexTextContainer}>
                <Text testID="travelSteos" style={styles.headerText}>
                  {"Travel Steps"}
                </Text>
              </View>
            </View>

            <ScrollView
              testID="scrollView"
              style={styles.scrollView}
              onTouchStart={() => this.setState({ allowDragging: false })}
              onTouchEnd={() => this.setState({ allowDragging: true })}
              onTouchCancel={() => this.setState({ allowDragging: true })}
            >
              {/* {floorPaths
                ? floorPaths.map((path, index) => (
                    <Text key={index}>
                      ${index + 1}. Go to ${path.connectorType} on floor $
                      {path.level} in the ${path.buildingId} building
                    </Text>
                  ))
                : null} */}
            </ScrollView>
          </View>
        </View>
      </SlidingUpPanel>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight / 2,
    backgroundColor: WHITE_BACKGROUND_COLOR,
  },
  header: {
    justifyContent: "space-between",
    display: "flex",
  },
  uparrow: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 5,
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
  flexTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  listItem: {
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
  },
  normalText: {
    fontSize: 16,
  },
  linkText: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  scrollView: { height: 300 },
  buildingInformation: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default TravelSteps;
