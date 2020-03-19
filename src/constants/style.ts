import { Dimensions } from "react-native";

// Height of the Campus Toggle Button
export const CAMPUS_TOGGLE_HEIGHT = 80;
export const MAP_BUTTON_RIGHT = 10;
export const BUILDING_LOCATION_HEIGHT = CAMPUS_TOGGLE_HEIGHT + 30;
export const FLOOR_PICKER_HEIGHT = BUILDING_LOCATION_HEIGHT + 80;

// Colors
export const CONCORDIA_RED = "#AA2B45";
export const BUILDING_UNTAPPED = "#dba4a8";
export const INACTIVE_BUTTON_COLOR = "#F2F2F2";
export const BUILDING_MARKER_COLOR = "#252525";

// Dimensions
export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
export const screenRatio = screenWidth / screenHeight;
