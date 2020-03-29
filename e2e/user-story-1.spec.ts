const { reloadApp } = require("detox-expo-helpers");
import { by, device, expect, element, waitFor } from 'detox';

beforeAll(async () => {
  await reloadApp();
});

describe("US-1: Campus Toggle", () => {
  it("should show the campus toggles", async () => {
    await expect(element(by.id("SGWButton"))).toBeVisible();
    await expect(element(by.id("loyolaButton"))).toBeVisible();
  });

  it("should show the Loyola campus on Loyola toggle press", async () => {
    await element(by.id("loyolaButton")).tap();
    await element(by.id("mapView")).pinchWithAngle("inward", "fast", 0);

    await expect(element(by.id("markerLoyola")).atIndex(0)).toExist();
  });

  it("should show the SGW campus on SGW toggle press", async () => {
    await element(by.id("SGWButton")).tap();
    await element(by.id("mapView")).pinchWithAngle("inward", "fast", 0);

    await expect(element(by.id("markerSGW")).atIndex(0)).toExist();
  });
});
