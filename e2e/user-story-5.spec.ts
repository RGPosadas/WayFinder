import { by, device, expect, element, waitFor } from "detox";
import { setLocation } from "./e2e-helper";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

describe("US-5: Start Building For Travel Plan", () => {
  it("should set a building as startLocation using search with location services off", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("H831");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Deny")).tap();

    await element(by.id("searchInputInitialLocation")).typeText("John Molson");
    await element(by.id("touchableList")).atIndex(0).tap();

    await expect(element(by.id("searchInputInitialLocation"))).toHaveText(
      "John Molson School of Business"
    );
  });

  it("should tap on a building to set as startLocation with location services off", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("LB");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Deny")).tap();

    await element(by.id("searchInputInitialLocation")).tap();
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 308 });

    await expect(element(by.id("searchInputInitialLocation"))).toHaveText(
      "Henry F. Hall Building"
    );
  });

  it("should automatically set startLocation as the building the user is currently in", async () => {
    await setLocation(45.497193, -73.579001);
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("Grey Nuns");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Allow")).tap();

    await expect(element(by.id("searchInputInitialLocation"))).toHaveText(
      "Henry F. Hall Building"
    );
  });

  it("should automatically set startLocation as user's current location", async () => {
    await setLocation(45.492689, -73.580212);
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("FB");
    await element(by.id("touchableList")).atIndex(0).tap();

    await expect(element(by.id("searchInputInitialLocation"))).toHaveText(
      "Current Location"
    );
  });

  it("should manually set startLocation as user's current location", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("EV");
    await element(by.id("touchableList")).atIndex(0).tap();

    await element(by.id("searchInputInitialLocation")).clearText();
    await element(by.id("searchInputInitialLocation")).typeText("MB");
    await element(by.id("touchableList")).atIndex(4).tap();

    await expect(element(by.id("searchInputInitialLocation"))).toHaveText(
      "Current Location"
    );
  });
});
