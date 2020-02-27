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
 *    console.log(location);
 *  });
 */
export const getCurrentLocationAsync = async (): Promise<
  Location.LocationData
> => {
  if (Platform.OS === "android" && !Constants.isDevice) {
    throw "Location services aren't available on Android Emulators.";
  }

  let { status } = await Permissions.askAsync(Permissions.LOCATION);

  if (status !== "granted") {
    throw "Location Permission Denied";
  }

  return await Location.getCurrentPositionAsync({});
};
