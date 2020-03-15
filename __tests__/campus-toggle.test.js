import React from "react";
import CampusToggle from "../src/components/campus-toggle/campus-toggle.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("CampusToggle component", () => {
  it("CampusToggle: snapshot renders correctly", () => {
    const tree = renderer.create(<CampusToggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onSGWPressButton: isSGW state hook is set to true", () => {
    // Allows to render a react component as an object in memory instead of the DOM (makes it faster)
    // wrapper allows us to easily examine the rendered components
    const mockFn = jest.fn();
    const wrapper = shallow(<CampusToggle onCampusToggle={mockFn} />);
    const button = wrapper.find("View TouchableHighlight").at(0);
    button.simulate("press");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Since we cannot directly check the state of react hooks, we test side effects instead
    // In this case, the styling changes of the buttons are the side effect
    const viewSGWStyling = wrapper
      .find("View TouchableHighlight View")
      .at(0)
      .props();
    expect(viewSGWStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      "#AA2B45"
    );
    const ViewLoyolaStyling = wrapper
      .find("View TouchableHighlight View")
      .at(1)
      .props();
    expect(ViewLoyolaStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      "#F2F2F2"
    );
  });

  it("onLoyolaPressButton: isSGW state hook is set to false", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CampusToggle onCampusToggle={mockFn} />);
    const button = wrapper.find("View TouchableHighlight").at(1);
    button.simulate("press");
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Since we cannot directly check the state of react hooks, we test side effects instead
    // In this case, the styling changes of the buttons are the side effect
    const viewSGWStyling = wrapper
      .find("View TouchableHighlight View")
      .at(0)
      .props();
    expect(viewSGWStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      "#F2F2F2"
    );
    const ViewLoyolaStyling = wrapper
      .find("View TouchableHighlight View")
      .at(1)
      .props();
    expect(ViewLoyolaStyling).toHaveProperty(
      ["style", 0, "backgroundColor"],
      "#AA2B45"
    );
  });
});
