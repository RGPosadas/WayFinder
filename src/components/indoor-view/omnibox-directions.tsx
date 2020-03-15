import React, { useEffect } from "react";
import { Image, TextInput, StyleSheet, Dimensions, View, Platform, Picker, TouchableOpacity  } from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SafeAreaView from "react-native-safe-area-view";
import { POI } from "../../types/main";
import { POIInfo } from "../../constants/poi.data";
import Autocomplete from "./autocomplete";

export interface OmniboxDirectionsProps {
    destination: POI;
    initialLocaiton: POI;
    currentLocation: {latitude, longitude}
    getDestination: (poi: POI) => void;
    getInitialLocation: (poi: POI) => void;
}

export interface queryTextInput {
    text: string;
}
  

export default function OmniboxDirections(props: OmniboxDirectionsProps) {
    const [value, onChangeText] = React.useState(props.initialLocaiton.displayName);
    const [autoCompleteValues, setAutocomplete] = React.useState(null);
    useEffect(() => {onChangeText(props.initialLocaiton.displayName); setAutocomplete(null)}, [props.initialLocaiton])

    //Dynamic height adjustment of parent. Without this, autocomplete will not be pressable
    let autocompleteHeight = autoCompleteValues ? autoCompleteValues.length * 51 + 235 : 235


    const queryText = (input: queryTextInput) => {
        let classes: POI[] = POIInfo.filter(poi => {
          return (
            poi.displayName.toUpperCase().search(input.text.toUpperCase()) !== -1
          );
        });
    
        let narrowedClasses: POI[] = classes.slice(0, 5);
    
        setAutocomplete([...narrowedClasses]);
        onChangeText(input.text);
      };

  return (
      <SafeAreaView style={[styles.safeAreaView, , {height: autocompleteHeight}]}>
          <View style={styles.contentContainer}>
          <TouchableOpacity onPress={() => props.getDestination(null)}>
              <AntDesign name={"arrowleft"} color={"#AA2B45"} size={26} style={styles.backArrow}></AntDesign>
          </TouchableOpacity>
            <View style={styles.directionsWaypoints}>
                <Image source={require("../../../assets/route.png")}></Image>
                <View style={styles.searchContainer}>
                    <TextInput
                        // key={autocomplete}
                        style={styles.input}
                        onChangeText={text => queryText({ text})}
                        value={value}

                    />
                    <TextInput
                        // key={autocomplete}
                        style={styles.input}
                        value={props.destination.displayName}
                        onFocus={() => props.getDestination(null)}
                    />
                </View>
            </View>
            <Picker style={styles.picker} prompt={"Select Departure Time"}>
                <Picker.Item label="Depart at 9am" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker >
            <View style={styles.travelModeSwitcher}>
                <FontAwesome name={"car"} size={24} style={{marginLeft: 15}} />
                <FontAwesome name={"wheelchair"} size={24} style={{marginLeft: 15}}/>
                <MaterialIcons name={"directions-walk"} size={28} style={{marginLeft: 15}}/>
                <MaterialIcons name={"directions-bus"} size={28} style={{marginLeft: 15}} />
                <Image source={require("../../../assets/shuttle.png")} style={{marginLeft: 15}}></Image>
            </View>
          </View>
        {autoCompleteValues && value != "" &&
            <Autocomplete
                style={styles.autocomplete}
                autoCompleteValues={autoCompleteValues}
                selectedLocation={props.getInitialLocation}
            ></Autocomplete>
        }
      </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  safeAreaView: {
      position: "absolute",
      top: Platform.OS === "android" ? 25:0,
      zIndex: 1,
      width: Dimensions.get("window").width,
      backgroundColor: "#F2F2F2",
      height: 235
  },
  contentContainer: {
      marginLeft: 15,
      marginRight: 15,
      paddingBottom: 20
  },
  backArrow: {
      marginLeft: 10
  },
  directionsWaypoints: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 36
  },
  input: {
      height: 38,
      borderColor: "#DEDEDE",
      borderWidth: 1,
      marginLeft: 10,
      marginBottom: 15,
      fontSize: 16,
      paddingLeft: 10
      
  },
  searchContainer: {
      flex: 1
  },
  picker: {
      marginLeft: 36,
  },
  travelModeSwitcher: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
  },
  autocomplete: {
    top: 230,
    width: Dimensions.get("window").width-30
  }
});
