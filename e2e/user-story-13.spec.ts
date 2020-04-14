import { by, device, expect, element, waitFor } from "detox";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

describe("US-13: Accessible Indoor Navigation", () => {
  it("should show the accessible path by taking the ramp on the same floor", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("Police St.");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Deny")).tap();
    await element(by.id("searchInputInitialLocation")).typeText("MB1.210");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.id("accessibilityButton")).tap();
    await element(by.id("startTravel")).tap();
    await element(by.id("mapView")).swipe("left", "slow", 0.83);

    for (let i = 0; i < 6; i += 1) {
      await expect(element(by.id(`polylinePath${i}`))).toExist();
    }

    await expect(element(by.id("dirPanelDisplayName"))).toBeVisible();
    await element(by.id("dirPanelDisplayName")).swipe("up", "fast", 0.75);

    await expect(element(by.id("stepNumber0"))).toExist();

    await element(by.id("dirPanelDisplayName")).swipe("down", "fast", 0.5);
  });

  it("should show the accessible path by taking the elevator on two different floors", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("H822");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Deny")).tap();
    await element(by.id("searchInputInitialLocation")).typeText("H937");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.id("accessibilityButton")).tap();
    await element(by.id("startTravel")).tap();

    // Rendered lines on 8th floor
    for (let i = 0; i < 4; i += 1) {
      await expect(element(by.id(`polylinePath${i}`))).toExist();
    }

    await element(by.id("floorButton8")).tap();

    // Rendered lines on 9th floor
    for (let i = 0; i < 4; i += 1) {
      await expect(element(by.id(`polylinePath${i}`))).toExist();
    }

    await expect(element(by.id("dirPanelDisplayName"))).toBeVisible();
    await element(by.id("dirPanelDisplayName")).swipe("up", "fast", 0.5);

    for (let i = 0; i < 2; i += 1) {
      await expect(element(by.id(`stepNumber${i}`))).toExist();
    }

    await element(by.id("dirPanelDisplayName")).swipe("down", "fast", 0.5);
  });
});
