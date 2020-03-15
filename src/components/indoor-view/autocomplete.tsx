import React, { Component } from "react";
import {
  FlatList,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { POI } from "../../types/main";


/**
 *
 */
export interface AutoCompleteProps {
  autoCompleteValues: POI[];
  selectedLocation: (poi: POI) => void;
  style: object;
}

export default function AutoComplete(props: AutoCompleteProps) {
  const { autoCompleteValues } = props;

  return (
    <View style={[styles.container, {...props.style}]}>
      <FlatList
        keyboardShouldPersistTaps={'handled'}
        data={autoCompleteValues}
        renderItem={({ item }: { item: POI }) => (
          <TouchableOpacity onPress={() => props.selectedLocation(item)} key={item.displayName} style={styles.list}>
            <Text style={styles.text}>{item.displayName}</Text>
            <Entypo name={"chevron-thin-right"} size={24} color={"#454F63"} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: Dimensions.get("window").width - 30,
    top: 48,
    borderWidth: 2,
    borderColor: "#F7F7FA",
    backgroundColor: "#F7F7FA",
    zIndex: 3,
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
    zIndex: 4,
   },
  text: {
    fontSize: 16,
    color: "#454F63"
  }
});
