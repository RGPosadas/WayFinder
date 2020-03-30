import { by, device, expect, element, waitFor } from "detox";
import { exec } from "child_process";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

// iOS only:
// Detox's device.setLocation() is not useable right now since it relies
// on a deprecated binary called fbsimctl, which has been moved to fb/idb.
// Detox has yet to make that transition, therefore this is the current workaround.
// Source: https://github.com/wix/Detox/issues/1371
const setLocation = async (latitude, longitude) => {
  // @ts-ignore
  exec(`idb set-location --udid ${device._deviceId} ${latitude} ${longitude}`);
};

describe("US-3: Location Services", () => {
  it("should indicate that user is not in a building", async () => {
    await setLocation(45.495674, -73.657242);
    await device.enableSynchronization();

    await element(by.id("locationButton")).tap();
    await element(by.text("Allow")).tap();
    await waitFor(element(by.id("flashMessage")))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id("flashMessage"))).toBeVisible();

    // Hack-y: call the new location here for the next test
    // since idb takes a long time to switch location
    // compared to Detox's runtime
    await setLocation(45.497193, -73.579001);
  });

  it("should indicate that user is in a building", async () => {
    await element(by.id("locationButton")).tap();
    await waitFor(element(by.id("flashMessage")))
      .toBeVisible()
      .withTimeout(5000);

    await expect(element(by.id("flashMessage"))).toBeVisible();
  });
});
