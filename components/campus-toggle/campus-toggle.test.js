import React from "react";
import CampusToggle from "./campus-toggle.component";
import renderer from "react-test-renderer";

// Kind: Snapshot + Unit Tests
// [US-1] Checks if the buttons render properly with proper styling
it("renders correctly", () => {
  const tree = renderer.create(<CampusToggle />).toJSON();
  expect(tree).toMatchSnapshot();
});
