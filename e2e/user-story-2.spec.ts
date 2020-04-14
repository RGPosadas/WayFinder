// File ignored in ESLint
// Reason: the `no-await-in-loop` error broke Detox's synchronization
import { by, device, expect, element, waitFor } from "detox";
import { getCampusById } from "../src/constants/campus.data";

const { reloadApp } = require("detox-expo-helpers");

beforeAll(async () => {
  await reloadApp();
});

describe("US-2: Distinguish Campus Buildings", () => {
  it("should show all SGW campus annexes and buildings", async () => {
    await element(by.id("SGWButton")).tap();

    const sgwBuildings = getCampusById("SGW").buildings;

    for (const buildingId of sgwBuildings) {
      await expect(element(by.id(`marker${buildingId}`))).toExist();
    }
  });

  it("should show all Loyola campus annexes and buildings", async () => {
    await element(by.id("loyolaButton")).tap();

    const loyolaBuildings = getCampusById("Loyola").buildings;

    for (const buildingId of loyolaBuildings) {
      await expect(element(by.id(`marker${buildingId}`))).toExist();
    }
  });
});
