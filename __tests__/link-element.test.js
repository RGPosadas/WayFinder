import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import LinkElement from "../src/components/building-information/link-element.component";

const mockLinkItem = {
  id: 1,
  title: "Engineering and Computer Science Association",
  link: "https://ecaconcordia.ca/",
};

describe("LinkItem component", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(<LinkElement linkItem={mockLinkItem} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should check if link has proper title", () => {
    const wrapper = shallow(<LinkElement linkItem={mockLinkItem} />);

    const link = wrapper.find({
      testID: "Engineering and Computer Science Association",
    });

    expect(link.props().children).toEqual(mockLinkItem.title);
  });

  it("should check if clicking department links is functional", () => {
    const wrapper = shallow(<LinkElement linkItem={mockLinkItem} />);
    const mockOpenURL = jest.fn();
    jest.mock("react-native/Libraries/Linking/Linking", () => {
      return {
        openURL: mockOpenURL,
      };
    });

    const link = wrapper.find({
      testID: "Engineering and Computer Science Association",
    });

    link.simulate("press");
    expect(mockOpenURL).toHaveBeenCalledTimes(1);
    expect(mockOpenURL).toBeCalledWith(mockLinkItem.link);
  });
});
