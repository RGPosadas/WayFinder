import React from "react";
import BuildingInformation from "../src/components/building-information/building-information.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Buildings } from "../src/constants";

describe("BuildingInformation component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<BuildingInformation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onClosePanel on 'x' button press", () => {
    const mockOnClosePanel = jest.fn();
    const wrapper = shallow(
      <BuildingInformation
        tappedBuilding={"H"}
        showBuildingInfo={true}
        onClosePanel={mockOnClosePanel}
      />
    );
    const button = wrapper.find("TouchableOpacity");
    // NOTE: Cannot currently test
    // Waiting for answer: https://github.com/octopitus/rn-sliding-up-panel/issues/165
    // button.simulate("press");
  });

  it("should call onBuildingStartTravelPlan on start travel button press", () => {
    const mockOnBuildingStartTravelPlan = jest.fn();
    const wrapper = shallow(
      <BuildingInformation
        tappedBuilding={"H"}
        showBuildingInfo={true}
        onClosePanel={null}
        onBuildingStartTravelPlan={mockOnBuildingStartTravelPlan}
      />
    );
    wrapper
      .find({ testID: "building-info-start-travel" })
      .first()
      .props()
      .onPressOut();

    expect(mockOnBuildingStartTravelPlan).toHaveBeenCalledTimes(1);
  });
});
