const { reloadApp } = require("detox-expo-helpers");
import { BuildingId } from "../src/types/main";
import { by, device, expect, element, waitFor } from 'detox';

beforeAll(async () => {
  await reloadApp();
});

describe("US-1: Campus Toggle", () => {
  it("should show the campus toggles", async () => {
    await expect(element(by.id("SGWButton"))).toBeVisible();
    await expect(element(by.id("loyolaButton"))).toBeVisible();
  });

  const VL = BuildingId[BuildingId.VL];
  const H = BuildingId[BuildingId.H];

  it("should show the Loyola campus on Loyola toggle press", async () => {
    await element(by.id("loyolaButton")).tap();
    await expect(element(by.id("polygon" + VL))).toExist();
    await expect(element(by.id("marker" + VL))).toExist();
  });

  it("should show the SGW campus on SGW toggle press", async () => {
    await element(by.id("SGWButton")).tap();
    await expect(element(by.id("polygon" + H))).toExist();
    await expect(element(by.id("marker" + H))).toExist();
  });
});
