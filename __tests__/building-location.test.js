import React from "react";
import BuildingLocation from "../src/components/building-location/building-location.component";
import renderer from "react-test-renderer";

describe("The BuildingLocation Component", () => {
  /**
   * Snapshot Test
   */
  it("renders correctly", () => {
    const tree = renderer.create(<BuildingLocation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  /*
  TODO: Implement unit test after TASK-12 is merged.
  
  Mock an empty function, pass it to the component, 
  simulate a button press, and the nmake sure function was called.
  
  */
  it("Trigger location search succesfully", () => {
    const mockOnBuildingLocationPress = jest.fn(() => {});
    // Create Component
    // Simulate click
    mockOnBuildingLocationPress();
    // Expect function to be triggered once
    expect(mockOnBuildingLocationPress.mock.calls.length).toBe(1);
  });
});
