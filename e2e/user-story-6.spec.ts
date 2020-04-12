import { by, device, expect, element, waitFor } from "detox";
import { setLocation } from "./e2e-helper";

const { reloadApp } = require("detox-expo-helpers");

beforeEach(async () => {
  await reloadApp();
});

describe("US-6: Destination Building for Travel Plan", () => {
  it("should search for a building on search bar focus", async () => {
    await setLocation(45.492689, -73.580212);
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("FG");
    await element(by.id("touchableList")).atIndex(0).tap();
    await element(by.text("Allow")).tap();

    await element(by.id("startTravel")).tap();

    await expect(element(by.id("searchInputDestinationLocation"))).toHaveText(
      "Faubourg Sainte-Catherine Building"
    );
    await expect(element(by.id("startLocation"))).toExist();
    await expect(element(by.id("endLocation"))).toExist();
  });

  it("should tap on a building to set as destination location on omnibox focus", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("H831");
    await element(by.id("touchableList")).atIndex(0).tap();

    await element(by.id("searchInputDestinationLocation")).tap();
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 405 });

    await element(by.id("startTravel")).tap();

    await expect(element(by.id("searchInputDestinationLocation"))).toHaveText(
      "Guy-De Mainsonneuve Building"
    );
    await expect(element(by.id("startLocation"))).toExist();
    await expect(element(by.id("endLocation"))).toExist();
  });

  it("should search for a building to set as destination location on omnibox focus", async () => {
    await element(by.id("searchInput")).tap();
    await element(by.id("searchInput")).typeText("H831");
    await element(by.id("touchableList")).atIndex(0).tap();

    await element(by.id("searchInputDestinationLocation")).replaceText("EV");
    await waitFor(element(by.id("touchableList")).atIndex(0))
      .toBeVisible()
      .withTimeout(2000);
    await element(by.id("touchableList")).atIndex(0).tap();

    await element(by.id("startTravel")).tap();

    await expect(element(by.id("searchInputDestinationLocation"))).toHaveText(
      "Engineering, CS and VA Integrated Complex"
    );
    await expect(element(by.id("startLocation"))).toExist();
    await expect(element(by.id("endLocation"))).toExist();
  });

  it("should tap on a building and tap on 'Travel Here!'", async () => {
    await element(by.id("mapView")).tapAtPoint({ x: 154, y: 405 });
    await waitFor(element(by.id("panel")))
      .toExist()
      .withTimeout(5000);
    await element(by.id("travelHereButton")).tap();

    await element(by.id("startTravel")).tap();

    await expect(element(by.id("searchInputDestinationLocation"))).toHaveText(
      "Guy-De Mainsonneuve Building"
    );
    await expect(element(by.id("startLocation"))).toExist();
    await expect(element(by.id("endLocation"))).toExist();
  });
});
