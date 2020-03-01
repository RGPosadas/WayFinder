import React from "react";
import App from "../App";

import renderer from "react-test-renderer";

// Mock application
jest.mock("expo", () => ({
  AppLoading: "AppLoading"
}));

jest.mock("../navigation/navigation", () => "navigation");

// Snapshot test
test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
