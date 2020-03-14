import React, { Component } from "react";
import {
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { Entypo } from '@expo/vector-icons'

export interface AutoCompleteProps {
  autoCompleteValues: string[];
  style: object
}

export default function AutoComplete(props: AutoCompleteProps) {
  const { autoCompleteValues} = props;

  console.log(autoCompleteValues);
  return (
    <View style={styles.container}>
      <FlatList
        data={autoCompleteValues}
        renderItem={({ item }: { item: string }) => (
          <View key={item} style={styles.list}>
            <Text style={styles.text}>
              {item}
            </Text>
            <Entypo name={"chevron-thin-right"} size={24} color={"#454F63"} />
          </View>
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
    elevation: 5
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

  },
  text: {
    fontSize: 16,
    color: "#454F63"
  }
});
