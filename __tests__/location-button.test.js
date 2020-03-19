import React from "react";
import LocationButton from "../src/components/location-button/location-button.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("LocationButton component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<LocationButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call LocationButton after button press", () => {
    const mockOnLocationButtonPress = jest.fn();
    const wrapper = shallow(
      <LocationButton onLocationButtonPress={mockOnLocationButtonPress} />
    );
    const button = wrapper.find("View TouchableOpacity");
    button.simulate("press");
    expect(mockOnLocationButtonPress).toHaveBeenCalledTimes(1);
  });
});
