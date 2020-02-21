import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MapScreen from "./../screens/map-screen/map-screen.component";

const screens = {
  Map: {
    screen: MapScreen,
    navigationOptions: {
      headerShown: false
    }
  }
};

const RootStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#9f1d35"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
