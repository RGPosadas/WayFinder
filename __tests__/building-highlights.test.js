import React from "react";
import BuildingHighlights from "../components/building-highlights/building-highlights.component";
import renderer from "react-test-renderer";

// Kind: Snapshot + Unit Tests
// [US-2] Checks that all the highlights are rendering at their proper coordinates (latitude and longitude) also with proper styling
describe("Building Highlight Snapshop", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<BuildingHighlights />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
