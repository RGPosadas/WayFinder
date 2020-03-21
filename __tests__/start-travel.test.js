import React from "react";
import StartTravel from "../src/components/search/start-travel.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("StartTravel component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<StartTravel />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call a function on user input", () => {
    const mockSetStartTravelPlan = jest.fn();
    const wrapper = shallow(
      <StartTravel setStartTravelPlan={mockSetStartTravelPlan} />
    );
    const touchableOpacity = wrapper.find("TouchableOpacity");
    touchableOpacity.simulate("press");
    expect(mockSetStartTravelPlan).toHaveBeenCalledTimes(1);
    expect(mockSetStartTravelPlan.mock.calls[0][0]).toBe(true);
  });
});
