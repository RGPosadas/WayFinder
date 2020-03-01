import React, { Component } from 'react';
import {FlatList, Image, TextInput, StyleSheet, Dimensions, View, TouchableOpacity, Text } from 'react-native';

export default function AutoComplete(props) {
    console.log(props.autocompleteValues)
    const poi = ["test1", "test2", "test3", "walmart"]
    return (
        <FlatList
        data={props.autocompleteValues}
        renderItem={({item}) => <Text key={item} style={styles.item}>{item}</Text>}
      />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
  });
  