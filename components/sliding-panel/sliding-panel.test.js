import React from "react";
import SlidingPanel from "./sliding-panel.component";
import renderer from "react-test-renderer";

describe("Sliding Panel component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<SlidingPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
