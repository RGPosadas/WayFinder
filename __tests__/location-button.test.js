import React from "react";
import LocationButton from "../src/components/location-button/location-button.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("LocationButton component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<LocationButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call SetUserCurrentLocations and AnimateToCurrentLocation after button is pressed ", () => {
    const mockSetUserCurrentLocations = jest.fn();
    const mockAnimateToCurrentLocation = jest.fn();
    const wrapper = shallow(
      <LocationButton
        setUserCurrentLocation={mockSetUserCurrentLocations}
        animateToCurrentLocation={mockAnimateToCurrentLocation}
      />
    );
    const button = wrapper.find("View TouchableOpacity");
    button.simulate("press");
    expect(mockSetUserCurrentLocations).toHaveBeenCalledTimes(1);
    expect(mockAnimateToCurrentLocation).toHaveBeenCalledTimes(1);
  });
});
