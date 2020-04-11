import { exec } from "child_process";

// iOS only:
// Detox's device.setLocation() is not useable right now since it relies
// on a deprecated binary called fbsimctl, which has been moved to fb/idb.
// Detox has yet to make that transition, therefore this is the current workaround.
// Source: https://github.com/wix/Detox/issues/1371
export const setLocation = async (latitude, longitude) => {
  // @ts-ignore
  exec(`idb set-location --udid ${device._deviceId} ${latitude} ${longitude}`);
};
