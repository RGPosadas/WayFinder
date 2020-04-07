import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  LOCATION_BUTTON_COLOR,
  DEFAULT_STACK_NAVIGATOR_COLOR,
} from "../styles/colors.styles";
import MapScreen from "../screens/map-screen/map-screen.component";

const screens = {
  Map: {
    screen: MapScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const RootStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: DEFAULT_STACK_NAVIGATOR_COLOR,
    },
    headerTintColor: LOCATION_BUTTON_COLOR,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
