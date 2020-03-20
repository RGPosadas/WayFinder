const { reloadApp } = require("detox-expo-helpers");
import { by, device, expect, element, waitFor } from 'detox';

beforeAll(async () => {
  await reloadApp();
});

describe("US-4: Additional campus building information", () => {
   it("should show minimal building information", async () => {
    // await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);
    // await console.log("pinched and zoomed into mapView");

    // await element(by.id("mapView")).swipe("down", "slow", 0.70);
    // await console.log("swiped down");
    // await element(by.id("mapView")).swipe("right", "slow", 0.50);
    // await console.log("swiped right");

    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 308 });
    await waitFor(element(by.id("panel"))).toExist().withTimeout(2000);

    await expect(element(by.id("panelDisplayName"))).toBeVisible();
    await expect(element(by.id("panelAddress"))).toBeVisible();

    await element(by.id("panelCloseButton")).tap();
  });

  it("should show extensive building information", async () => {
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 308 });
    await waitFor(element(by.id("panel"))).toExist().withTimeout(2000);

    await element(by.id("panelDisplayName")).swipe("up", "fast", 0.50);
    await expect(element(by.id("scrollDepartments"))).toBeVisible();
    await element(by.id("scrollDepartments")).swipe("up", "fast", 0.50);
    await expect(element(by.id("scrollServices"))).toBeVisible();
    await element(by.id("panelDisplayName")).swipe("down", "fast", 0.50);

    await element(by.id("panelCloseButton")).tap();
  });
});
