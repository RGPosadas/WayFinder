const { reloadApp } = require("detox-expo-helpers");
import { BuildingId } from "../src/types/main";
import { by, device, expect, element, waitFor } from 'detox';

beforeAll(async () => {
    await reloadApp();
});

describe("US-2: Distinguish campus buildings", () => {
    it("should show all SGW campus annexes and buildings", async () => {
        await element(by.id("SGWButton")).tap();
        for (var i=0; i<37; i++) {
            await expect(element(by.id("polygon" + BuildingId[i]))).toExist();
        }
    });

    it("should show all Loyola campus annexes and buildings", async () => {
        await element(by.id("loyolaButton")).tap();
        for (var i=37; i<(Object.keys(BuildingId).length/2); i++) {
            if (i == 54) { break; } // QA with no bounding box
            await expect(element(by.id("polygon" + BuildingId[i]))).toExist();
        }
    });
});