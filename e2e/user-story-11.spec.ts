import { by, device, expect, element, waitFor } from "detox";
import { setLocation } from "./e2e-helper";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

describe("US-11: Search Start and Destination Room", () => {
  it("should bring up autocomplete POI list in search mode for both start and destination locations with location services off", async () => {
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);
    await element(by.id("mapView")).swipe("down", "slow", 0.63);
    await element(by.id("mapView")).swipe("right", "slow", 0.53);
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);

    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("H820");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Deny")).tap();

    await element(by.id("searchInputInitialLocation")).typeText("H831");
    await element(by.id("touchableList")).atIndex(0).tap();

    await element(by.id("timePickerButton")).tap();
    await element(by.id("dateTimePicker")).setDatePickerDate("08:30", "HH:mm");
    await element(by.id("timePickerButton")).tap();

    await element(by.id("startTravel")).tap();
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("inward", "slow", 0);

    await expect(
      element(by.id("poi-47fb3f6a-6122-4bde-8c6c-a4791894af10"))
    ).toExist();
    await expect(
      element(by.id("poi-821ba553-fc19-470f-a6ef-f52c9ca75344"))
    ).toExist();
  });

  // Since we cannot find our touchable markers/polygons in the UI hierarchy,
  // this test may fail if the map renders slowly and cannot tapAtPoint
  // on the specific POI we are trying to click on
  it("should take current location and autofill destination on POI tap in search mode with location services on", async () => {
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);
    await element(by.id("mapView")).swipe("down", "slow", 0.63);
    await element(by.id("mapView")).swipe("right", "slow", 0.53);
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);

    await setLocation(45.497193, -73.579001);
    await element(by.id("searchInput")).tap();
    await element(by.id("mapView")).tapAtPoint({ x: 189, y: 355 });
    await element(by.text("Allow")).tap();

    await element(by.id("timePickerButton")).tap();
    await element(by.id("dateTimePicker")).setDatePickerDate("10:30", "HH:mm");
    await element(by.id("timePickerButton")).tap();

    await element(by.id("startTravel")).tap();
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("inward", "slow", 0);

    await expect(
      element(by.id("poi-36e72bc6-dc26-4aa9-be0d-fa6aca0fc02d"))
    ).toExist();
  });
});
