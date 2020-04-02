import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { POI, BuildingId, Building } from "../../types/main";
import {
  screenWidth,
  LIST_BACKGROUND_COLOR,
  LIST_ITEM_BORDER_COLOR,
  LIST_ITEM_TEXT_COLOR
} from "../../constants/style";

/**
 * the name and types of the properties types accepted
 * by the AutoComplete component
 */
export interface IProps {
  searchResults: (POI | Building)[];
  setLocation: (location: POI | Building) => void;
  style: object;
}

/**
 * Displays the names of provided points of interest's
 * @param searchResults Array of POI's
 * @param style Styles to reposition or resize
 * @param setLocation
 */
const AutoComplete = ({ searchResults, style, setLocation }: IProps) => {
  return (
    <View style={StyleSheet.flatten([styles.container, { ...style }])}>
      <FlatList
        testID="autoCompleteFlatList"
        keyboardShouldPersistTaps="handled"
        data={searchResults}
        renderItem={({ item }: { item: POI | Building }) => (
          <TouchableOpacity
            testID="touchableList"
            onPress={() => setLocation(item)}
            key={item.displayName}
            style={styles.list}
          >
            <View>
              <Text style={styles.text}>{item.displayName}</Text>
              <Text style={styles.text}>
                {item.buildingId ? (
                  <Text style={styles.text}>
                    Building: {BuildingId[item.buildingId]} Level: {item.level}
                  </Text>
                ) : null}
              </Text>
            </View>
            <Entypo name="chevron-thin-right" size={24} color="#454F63" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: screenWidth - 30,
    top: 48,
    backgroundColor: LIST_BACKGROUND_COLOR,
    zIndex: 3
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomColor: LIST_ITEM_BORDER_COLOR,
    borderBottomWidth: 1.4,
    zIndex: 4
  },
  text: {
    fontSize: 16,
    color: LIST_ITEM_TEXT_COLOR
  }
});

export default AutoComplete;
