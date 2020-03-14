import React, { Component } from "react";
import { FlatList, Image, TextInput, StyleSheet, Dimensions, View, TouchableOpacity, Text, Platform } from "react-native";
import { Entypo } from '@expo/vector-icons';
import SafeAreaView from "react-native-safe-area-view";

export interface AutoCompleteProps {
  autoCompleteValues: string[];
  style: object
}

export default function OmniboxDirections() {
  return (
      <SafeAreaView style={styles.safeAreaView}>
          <Text>Test</Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
  },
  safeAreaView: {
      flex: 1,
      top: Platform.OS === "android" ? 25:0,
      height: 45,
      borderColor: "red",
      borderWidth: 2,
      zIndex: 1
  }
});
