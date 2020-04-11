import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import LinkElement from "../src/components/building-information/list-element.component";

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

  it("should check if clicking department links is functional", () => {
    const wrapper = shallow(<LinkElement linkItem={mockLinkItem} />);

    const link = wrapper.find({ testID: "linkItem.title" });

    expect(link.props().children).toEqual(mockLinkItem.title);
    link.simulate("press");
  });
});
