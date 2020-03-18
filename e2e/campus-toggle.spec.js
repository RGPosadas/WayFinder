const { reloadApp } = require("detox-expo-helpers");
import { BuildingId } from "../src/types/main";
import { Buildings } from "../src/constants/buildings.data";

beforeAll(async () => {
  await reloadApp();
});

describe("CampusToggle: Toggling between campuses", () => {
  it("should show the campus toggles", async () => {
    await expect(element(by.id("SGWButton"))).toBeVisible();
    await expect(element(by.id("loyolaButton"))).toBeVisible();
  });

  it("should show the Loyola campus on Loyola toggle press", async () => {
    await element(by.id("loyolaButton")).tap();
    await expect(element(by.id("polygon" + BuildingId[BuildingId.VL]))).toExist(); 
    await expect(element(by.id("marker" + BuildingId[BuildingId.VL]))).toExist();
  });

  it("should show the SGW campus on SGW toggle press", async () => {
    await element(by.id("SGWButton")).tap();
    await expect(element(by.id("polygon" + BuildingId[BuildingId.H]))).toExist(); 
    await expect(element(by.id("marker" + BuildingId[BuildingId.H]))).toExist();
  });
});