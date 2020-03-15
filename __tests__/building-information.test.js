import React from "react";
import BuildingInformation from "../src/components/building-information/building-information.component";
import renderer from "react-test-renderer";

// Kind: Snapshot + Unit Test
// [US-4] Checks if Sliding Panel renders correctly with the right assets
describe("Sliding Panel component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<BuildingInformation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
