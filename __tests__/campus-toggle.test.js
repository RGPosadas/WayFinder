import React from "react";
import CampusToggle from "../src/components/campus-toggle/campus-toggle.component";
import { CONCORDIA_RED, INACTIVE_BUTTON_COLOR } from "../src/styles";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { getCampusById } from "../src/constants";

describe("CampusToggle component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<CampusToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should check for campus toggle button styling changes and calls onCampusToggle after SGW toggle press", () => {
    const mockOnCampusToggle = jest.fn();
    const wrapper = shallow(
      <CampusToggle onCampusToggle={mockOnCampusToggle} />
    );
    const SGWButton = wrapper.find("View TouchableHighlight").at(0);
    SGWButton.simulate("press");
    expect(mockOnCampusToggle).toHaveBeenCalledTimes(1);
    expect(mockOnCampusToggle.mock.calls[0][0]).toBe(
      getCampusById("SGW").region
    );

    // Since we cannot directly check the state of react hooks, we test side effects instead
    // In this case, the styling changes of the buttons are the side effect
    const viewSGWStyling = wrapper
      .find("View TouchableHighlight View")
      .at(0)
      .props();
    expect(viewSGWStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      CONCORDIA_RED
    );
    const ViewLoyolaStyling = wrapper
      .find("View TouchableHighlight View")
      .at(1)
      .props();
    expect(ViewLoyolaStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      INACTIVE_BUTTON_COLOR
    );
  });

  it("should check for campus toggle button styling changes and calls onCampusToggle after Loyola toggle press", () => {
    const mockOnCampusToggle = jest.fn();
    const wrapper = shallow(
      <CampusToggle onCampusToggle={mockOnCampusToggle} />
    );
    const loyolaButton = wrapper.find("View TouchableHighlight").at(1);
    loyolaButton.simulate("press");
    expect(mockOnCampusToggle).toHaveBeenCalledTimes(1);
    expect(mockOnCampusToggle.mock.calls[0][0]).toBe(
      getCampusById("Loyola").region
    );

    // Since we cannot directly check the state of react hooks, we test side effects instead
    // In this case, the styling changes of the buttons are the side effect
    const viewSGWStyling = wrapper
      .find("View TouchableHighlight View")
      .at(0)
      .props();
    expect(viewSGWStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      INACTIVE_BUTTON_COLOR
    );
    const ViewLoyolaStyling = wrapper
      .find("View TouchableHighlight View")
      .at(1)
      .props();
    expect(ViewLoyolaStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      CONCORDIA_RED
    );
  });
});
