import React from "react";
import StartTravel from "../src/components/search/start-travel.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { TravelState } from "../src/types/main";

describe("StartTravel component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<StartTravel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call provided function on press", () => {
    const mockSetTravelState = jest.fn();
    const mockOnStartTravelPlan = jest.fn();
    const wrapper = shallow(
      <StartTravel
        setTravelState={mockSetTravelState}
        onStartTravelPlan={mockOnStartTravelPlan}
      />
    );
    const touchableOpacity = wrapper.find("TouchableOpacity");
    touchableOpacity.simulate("press");
    expect(mockSetTravelState).toHaveBeenCalledTimes(1);
    expect(mockOnStartTravelPlan).toHaveBeenCalledTimes(1);
    expect(mockSetTravelState.mock.calls[0][0]).toBe(TravelState.TRAVELLING);
  });
});
