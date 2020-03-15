import React from "react";
import BuildingLocation from "../src/components/building-location/building-location.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("BuildingLocation component", () => {
  it("BuildingLocation: snapshot renders correctly", () => {
    const tree = renderer.create(<BuildingLocation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onBuildingLocationPress: check if button is pressed", () => {
    const mockOnBuildingLocationPress = jest.fn();
    const wrapper = shallow(
      <BuildingLocation onBuildingLocationPress={mockOnBuildingLocationPress} />
    );
    const button = wrapper.find("View TouchableOpacity");
    button.simulate("press");
    expect(mockOnBuildingLocationPress).toHaveBeenCalledTimes(1);
  });
});
