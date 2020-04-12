import { by, device, expect, element, waitFor } from "detox";

const { reloadApp } = require("detox-expo-helpers");

beforeAll(async () => {
  await reloadApp();
});

describe("US-4: Additional Campus Building Information", () => {
  it("should show minimal building information", async () => {
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 308 });
    await waitFor(element(by.id("panel")))
      .toExist()
      .withTimeout(2000);

    await expect(element(by.id("panelDisplayName"))).toBeVisible();
    await expect(element(by.id("travelHereButton"))).toBeVisible();
    await expect(element(by.id("scrollDepartments"))).toBeNotVisible();
    await expect(element(by.id("scrollServices"))).toBeNotVisible();

    await element(by.id("panelCloseButton")).tap();
  });

  it("should show extensive building information", async () => {
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 308 });
    await waitFor(element(by.id("panel")))
      .toExist()
      .withTimeout(2000);
    await element(by.id("panelDisplayName")).swipe("up", "fast", 0.5);

    await expect(element(by.id("scrollDepartments"))).toBeVisible();

    await element(by.id("scrollDepartments")).swipe("up", "fast", 0.5);

    await expect(element(by.id("scrollServices"))).toBeVisible();

    await waitFor(element(by.id("Career and Planning Services")))
      .toExist()
      .withTimeout(2000);
    await element(by.id("Career and Planning Services")).tap();
  });
});
