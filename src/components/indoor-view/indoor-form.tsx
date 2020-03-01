import React, { Component } from 'react';
import {Platform, Image, TextInput, StyleSheet, Dimensions, View, TouchableOpacity, Text, FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Autocomplete from './autocomplete';

//make a function for auto complete
//make component to show results of auto complete
//position component on view
//show component only when auto complete results are available.

export default function IndoorForm() {
  const poi = ["test1", "test2", "test3", "walmart"]

  const [value, onChangeText] = React.useState('');
  const [autocomplete, setAutocomplete] = React.useState([...poi]);
  const [query, setQuery] = React.useState('');

  const queryText = (text, poi) => {
    let sanitizedText = text.toLowerCase();
    const queryResult = poi.filter(location => location.includes(sanitizedText) !== false);
    setAutocomplete([...queryResult]);
    onChangeText(text);
  }

  const poiMock = {
    Hall: {
      1: {id: 'H802', buildingID: 'Hall', level: 8, name: 'H802', description: 'blank', category: 'ClassRoom'},
      2: {id: 'H806', buildingID: 'Hall', level: 8, name: 'H806', description: 'blank', category: 'ClassRoom'},
      3: {id: 'H810', buildingID: 'Hall', level: 8, name: 'H810', description: 'blank', category: 'ClassRoom'},
      4: {id: 'H812', buildingID: 'Hall', level: 8, name: 'H812', description: 'blank', category: 'ClassRoom'},
      5: {id: 'H819', buildingID: 'Hall', level: 8, name: 'H819', description: 'blank', category: 'ClassRoom'},
    },
    Ev: {}
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.view}>
          <View style={styles.view}>
          <Image source={require('../../../assets/hamburger_icon.png')}></Image>
          <Image style={styles.lineSeperator} source={require('../../../assets/line-separator.png')}></Image>
          <Image source={require('../../../assets/search.png')}></Image>
          <TextInput
              key={autocomplete}
              style={styles.input}
              onChangeText={text => queryText(text, poi)}
              value={value}
          />
          </View>
          <Image style={styles.mic} source={require('../../../assets/mic.png')}></Image>
      </SafeAreaView>
      <FlatList
        data={autocomplete}
        renderItem={({item}) => <Text key={item} style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "center",
      position: "absolute",
      top: Platform.OS === "android" ? 25+48 : 0+48,
      width: Dimensions.get("window").width-30,
      borderWidth: 2,
      borderColor: '#AA2B45',
      height: 48,
      backgroundColor: '#fff',
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: "space-between",
      zIndex: 500,
    },
    safeArea: {
        flex: 1,
        alignSelf: "center",
        position: "absolute",
        top: Platform.OS === "android" ? 25+48 : 0+48,
        width: Dimensions.get("window").width-30,
        borderWidth: 2,
        borderColor: '#AA2B45',
        height: 48,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: "space-between"

    },
    lineSeperator: {
      marginLeft: 16,
      marginRight: 16
    },
    view: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      alignSelf: "stretch",
      zIndex: 999
    }
  });
  