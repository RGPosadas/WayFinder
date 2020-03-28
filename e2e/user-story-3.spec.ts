const { reloadApp } = require("detox-expo-helpers");
import { by, device, expect, element, waitFor } from 'detox';
import { exec } from 'child_process';

beforeAll(async () => {
  await reloadApp();
});

// iOS only:
// Detox's device.setLocation() is not useable right now since it relies
// on a deprecated binary called fbsimctl, which has been moved to fb/idb.
// Detox has yet to make that transition, therefore this is the current workaround.
// It takes time for idb to register the location the 2nd time, and that is why we use
// sleep. However, note that using sleep in acceptance tests is not usually recommended.
// Source: https://github.com/wix/Detox/issues/1371
const setLocation = async (latitude, longitude) => {
  exec(`idb set-location --udid ${device._deviceId} ${latitude} ${longitude}`);
  exec(`sleep 4`);
};

describe("US-3: location services", () => {
    it("should indicate that user is in a building", async () => {
      await device.disableSynchronization();
      await setLocation(45.497193, -73.579001);

      await element(by.id("locationButton")).tap();
      await element(by.text("Allow")).tap();

      await expect(element(by.id("flashMessage"))).toBeVisible();

      await device.enableSynchronization();
    });

    it("should indicate that user is not in a building", async () => {
      await device.disableSynchronization();
      await setLocation(45.495674, -73.657242);

      await element(by.id("locationButton")).tap();

      await expect(element(by.id("flashMessage"))).toBeVisible();

      await device.enableSynchronization();
    });
});