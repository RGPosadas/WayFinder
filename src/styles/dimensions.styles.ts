import { Dimensions } from "react-native";

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
export const screenRatio = screenWidth / screenHeight;
