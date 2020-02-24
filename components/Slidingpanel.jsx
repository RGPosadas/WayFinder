import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Button,
  Text,
  Dimensions,
  ScrollView
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import { Buildinginformation } from "../data/Buildinginformation";

const { height } = Dimensions.get("window");

export class Slidingpanel extends React.Component {
  render() {
    const {
      tappedBuilding,
      styles,
      closePanel,
      showAdditionalInfo
    } = this.props;
    return (
      <View>
        <SlidingUpPanel
          draggableRange={{ top: height / 1.75, bottom: 100 }}
          animatedValue={this._draggedValue}
          showBackdrop={false}
          ref={c => (this._panel = c)}
        >
          {showAdditionalInfo ? (
            <TouchableWithoutFeedback
              style={styles.panel}
              onPress={() => this._panel.show()}
            >
              <View style={styles.container}>
                <View style={styles.panelHeader}>
                  {Buildinginformation.filter(
                    info => info.building == tappedBuilding
                  ).map((buildingInfo, key) => {
                    return (
                      <View key={key}>
                        <View
                          style={{
                            justifyContent: "flex-end",
                            alignItems: "flex-end"
                          }}
                        >
                          <Button
                            onPress={() => closePanel(false)}
                            title="X"
                          ></Button>
                        </View>
                        <View style={styles.text}>
                          <Text>{buildingInfo.name}</Text>
                          <Text>{buildingInfo.address}</Text>
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
      </View>
    );
  }
}