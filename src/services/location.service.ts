import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native-web";
import Constants from "expo-constants";

/**
 * Asynchronous function for returning the location information of
 * the user.
 *
 * Will throw an exception under the following conditions:
 * * Current platform is an emulator
 * * Location permissions were denied
 *
 * Example usage:
 *
 * getLocationAsync().then(location => {
 *    // Operations done based on location
 *  });
 */
export const getCurrentLocationAsync = async (): Promise<
  Location.LocationData
> => {
  if (Platform.OS === "android" && !Constants.isDevice) {
    throw new Error("Location services aren't available on Android Emulators.");
  }

  const { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status !== "granted") {
    throw new Error("Location Permission Denied");
  }

  return Location.getCurrentPositionAsync({});
};
