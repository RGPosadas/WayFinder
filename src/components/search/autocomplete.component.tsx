import React from "react";
import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { POI } from "../../types/main";

/**
 * the name and types of the properties types accepted
 * by the AutoComplete component
 */
export interface IProps {
  autoCompleteValues: POI[];
  setLocation: (poi: POI) => void;
  style: object;
  testID: string;
}

/**
 * Displays the names of provided points of interest's
 * @param autoCompleteValues Array of POI's
 * @param style Styles to reposition or resize
 * @param selectedLocation
 */
const AutoComplete = ({
  autoCompleteValues,
  style,
  setLocation,
  testID
}: IProps) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <FlatList
        testID="autoCompleteFlatList"
        keyboardShouldPersistTaps="handled"
        data={autoCompleteValues}
        renderItem={({ item }: { item: POI }) => (
          <TouchableOpacity
            testID="touchableList"
            onPress={() => setLocation(item)}
            key={item.displayName}
            style={styles.list}
          >
            <Text style={styles.text}>{item.displayName}</Text>
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
    width: Dimensions.get("window").width - 30,
    top: 48,
    borderWidth: 2,
    borderColor: "#F7F7FA",
    backgroundColor: "#F7F7FA",
    zIndex: 3
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomColor: "rgba(120, 132, 158, 0.08)",
    borderBottomWidth: 1.4,
    zIndex: 4
  },
  text: {
    fontSize: 16,
    color: "#454F63"
  }
});

export default AutoComplete;
