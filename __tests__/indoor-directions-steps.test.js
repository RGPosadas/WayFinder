import React from "react";

import IndoorDirectionSteps from "../src/components/travel-route/indoor-directions-steps.component";
import PathFindingService from "../src/services/pathfinding.service";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import * as testData from "./__testData__/indoor-travel-route";

const mockFloorPath = PathFindingService.getInstance().findPathBetweenPOIs(
  testData.mockPOIs[0],
  testData.mockPOIs[1],
  false
);

describe("Indoor Directions Text component", () => {
  it("should match indoor travel directions steps snapshot", () => {
    const mockOnCloseTravelSteps = jest.fn();
    const tree = renderer
      .create(
        <IndoorDirectionSteps
          floorPaths={mockFloorPath}
          onCloseTravelSteps={mockOnCloseTravelSteps}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not render if the floor plans are null", () => {
    const tree = renderer
      .create(
        <IndoorDirectionSteps floorPaths={null} onCloseTravelSteps={null} />
      )
      .toJSON();
    expect(tree).toBe(null);
  });

  it("should call mockOnCloseTravelSteps on 'x' button press", () => {
    const mockOnCloseTravelSteps = jest.fn();
    const wrapper = shallow(
      <IndoorDirectionSteps
        floorPaths={mockFloorPath}
        onCloseTravelSteps={mockOnCloseTravelSteps}
      />
    );
    const button = wrapper.find("TouchableOpacity");
    // NOTE: Cannot currently test
    // Waiting for answer: https://github.com/octopitus/rn-sliding-up-panel/issues/165
    // button.simulate("press");
  });
});
