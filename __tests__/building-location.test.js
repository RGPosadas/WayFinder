import React from "react";
import BuildingLocation from "../src/components/building-location/building-location.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("BuildingLocation component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<BuildingLocation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onBuildingLocationPress after button press", () => {
    const mockOnBuildingLocationPress = jest.fn();
    const wrapper = shallow(
      <BuildingLocation onBuildingLocationPress={mockOnBuildingLocationPress} />
    );
    const button = wrapper.find("View TouchableOpacity");
    button.simulate("press");
    expect(mockOnBuildingLocationPress).toHaveBeenCalledTimes(1);
  });
});
