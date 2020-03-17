import React from "react";
import App from "../App";

import renderer from "react-test-renderer";

// Mock application
jest.mock("expo", () => ({
  AppLoading: "AppLoading"
}));

jest.mock("../src/navigation/navigation", () => "navigation");

// Snapshot test
it("should match snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
