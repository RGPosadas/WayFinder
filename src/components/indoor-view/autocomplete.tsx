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

export interface AutoCompleteProps {
  autoCompleteValues: string[];
}

export default function AutoComplete(props: AutoCompleteProps) {
  const { autoCompleteValues } = props;

  console.log(autoCompleteValues);
  return (
    <View>
      <FlatList
        data={autoCompleteValues}
        renderItem={({ item }: { item: string }) => (
          <Text key={item} style={styles.list}>
            {item}
          </Text>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    flex: 1
  }
});
