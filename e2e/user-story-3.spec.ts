import { by, device, expect, element, waitFor } from "detox";
import { setLocation } from "./e2e-helper";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

describe("US-3: Location Services", () => {
  it("should indicate that user is not in a building", async () => {
    await setLocation(45.495674, -73.657242);

    await element(by.id("locationButton")).tap();
    await element(by.text("Allow")).tap();
    await element(by.id("locationButton")).tap();

    await expect(element(by.id("panel"))).toBeNotVisible();

    // Hack-y: call the new location here for the next test
    // since idb takes a long time to switch location
    // compared to Detox's runtime
    await setLocation(45.497193, -73.579001);
  });

  it("should indicate that user is in a building", async () => {
    await element(by.id("locationButton")).tap();

    await waitFor(element(by.id("panel")))
      .toExist()
      .withTimeout(5000);
    await expect(element(by.id("panelDisplayName"))).toBeVisible();
  });
});
