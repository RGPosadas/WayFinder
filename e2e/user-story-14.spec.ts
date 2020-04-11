import { by, device, expect, element, waitFor } from "detox";

const { reloadApp } = require("detox-expo-helpers");

beforeAll(async () => {
  await reloadApp();
});

enum selectHall8POI {
  "d24c5c62-3e13-4414-bcfd-77fd1e237d23", // Washroom
  "058086ab-58be-4174-a34d-d0dd7e80014f", // Elevator
  "f1b0422b-63f2-471e-919d-21d7cffbaa87", // Escalators
  "8c28ea3e-73ad-46d2-9031-5edec3c83187", // Stairs
  "a9462139-ef45-4d40-b5ca-52cfebcc26d2", // Classroom
}

enum selectHall9POI {
  "266f079d-7033-4546-9724-eb634fea4a22", // Classroom
  "c069eb38-736e-40e1-b6f9-a06a531c71b0", // Washroom
  "f45af436-f9bb-40b8-97c5-8526ad68ac55", // Escalator
  "a15f5890-eb65-4a05-a578-08d4cabe254d", // Stairs
  "37f6e5b8-0b86-4fed-9d3a-9f5e3a4231bd", // Elevator
}

describe("US-14: Indoor Points of Interest", () => {
  it("should show POI markers on Hall 8th floor", async () => {
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);
    await element(by.id("mapView")).swipe("down", "slow", 0.63);
    await element(by.id("mapView")).swipe("right", "slow", 0.53);
    // @ts-ignore
    await element(by.id("mapView")).pinchWithAngle("outward", "slow", 0);

    for (let i = 37; i < Object.keys(selectHall8POI).length / 2; i += 1) {
      expect(element(by.id(`poi-${selectHall8POI[i]}`))).toExist();
    }
  });

  it("should show POI markers on Hall 9th floor", async () => {
    await waitFor(element(by.id("floorButton9")))
      .toExist()
      .withTimeout(5000);
    await element(by.id("floorButton9")).tap();

    for (let i = 37; i < Object.keys(selectHall9POI).length / 2; i += 1) {
      expect(element(by.id(`poi-${selectHall9POI[i]}`))).toExist();
    }
  });
});
