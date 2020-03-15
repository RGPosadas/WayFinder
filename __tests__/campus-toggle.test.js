import React from "react";
import CampusToggle from "../src/components/campus-toggle/campus-toggle.component";
import { CONCORDIA_RED, INACTIVE_BUTTON_COLOR } from "../src/constants/style";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { getCampus } from "../src/constants/campus.data";
import { CampusId } from "../src/types/main";

describe("CampusToggle component", () => {
  it("CampusToggle: snapshot renders correctly", () => {
    const tree = renderer.create(<CampusToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onSGWPressButton: on button press, check if isSGW state hook is true", () => {
    // Allows to render a react component as an object in memory instead of the DOM (makes it faster)
    // wrapper allows us to easily examine the rendered components
    const mockOnCampusToggle = jest.fn();
    const wrapper = shallow(
      <CampusToggle onCampusToggle={mockOnCampusToggle} />
    );
    const button = wrapper.find("View TouchableHighlight").at(0);
    button.simulate("press");
    expect(mockOnCampusToggle).toHaveBeenCalledTimes(1);
    expect(mockOnCampusToggle.mock.calls[0][0]).toBe(
      getCampus(CampusId.SGW).region
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

  it("onLoyolaPressButton: on button press, check if isSGW state hook is false", () => {
    const mockOnCampusToggle = jest.fn();
    const wrapper = shallow(
      <CampusToggle onCampusToggle={mockOnCampusToggle} />
    );
    const button = wrapper.find("View TouchableHighlight").at(1);
    button.simulate("press");
    expect(mockOnCampusToggle).toHaveBeenCalledTimes(1);
    expect(mockOnCampusToggle.mock.calls[0][0]).toBe(
      getCampus(CampusId.Loyola).region
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
