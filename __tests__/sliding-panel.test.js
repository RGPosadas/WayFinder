import React from "react";
import SlidingPanel from "../components/sliding-panel/sliding-panel.component";
import renderer from "react-test-renderer";

// Kind: Snapshot + Unit Test
// [US-4] Checks if Sliding Panel renders correctly with the right assets
describe("Sliding Panel component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<SlidingPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
