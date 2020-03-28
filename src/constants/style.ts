import { Dimensions } from "react-native";

// Position styling
export const CAMPUS_TOGGLE_HEIGHT = 80;
export const MAP_BUTTON_RIGHT = 10;
export const BUILDING_LOCATION_HEIGHT = CAMPUS_TOGGLE_HEIGHT + 30;
export const START_TRAVEL_HEIGHT = 40;
export const FLOOR_PICKER_HEIGHT = BUILDING_LOCATION_HEIGHT + 80;
export const FLOOR_PICKER_TRAVEL_HEIGHT = START_TRAVEL_HEIGHT + 80;

// Colors
export const BUILDING_MARKER_COLOR = "#252525";
export const BUILDING_UNTAPPED = "#dba4a8";
export const BUTTON_BORDER_COLOR = "rgba(0,0,0,0.2)";
export const CONCORDIA_RED = "#AA2B45";
export const INACTIVE_BUTTON_COLOR = "#F2F2F2";
export const INPUT_BORDER_COLOR = "#DEDEDE";
export const LIST_BACKGROUND_COLOR = "#F7F7FA";
export const LIST_ITEM_BORDER_COLOR = "rgba(120, 132, 158, 0.08)";
export const LIST_ITEM_TEXT_COLOR = "#454F63";
export const WHITE_BACKGROUND_COLOR = "white";
export const INACTIVE_TEXT_COLOR = "#717171";
export const INACTIVE_ICON_COLOR = "#C76969";

// Dimensions
export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;
export const screenRatio = screenWidth / screenHeight;
