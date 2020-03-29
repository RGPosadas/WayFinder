import { by, device, expect, element, waitFor } from "detox";
import { BuildingId } from "../src/types/main";

const { reloadApp } = require("detox-expo-helpers");

beforeAll(async () => {
  await reloadApp();
});

describe("US-2: Distinguish Campus Buildings", () => {
  it("should show all SGW campus annexes and buildings", async () => {
    await element(by.id("SGWButton")).tap();

    for (let i = 0; i < 37; i += 1) {
      expect(element(by.id(`polygon${BuildingId[i]}`))).toExist();
    }
  });

  it("should show all Loyola campus annexes and buildings", async () => {
    await element(by.id("loyolaButton")).tap();

    for (let i = 37; i < Object.keys(BuildingId).length / 2; i += 1) {
      // QA not a building
      if (i === 54) {
        break;
      }
      expect(element(by.id(`polygon${BuildingId[i]}`))).toExist();
    }
  });
});
