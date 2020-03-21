import React from "react";
import Search, {
  getAutoCompleteHeight
} from "../src/components/search/search.component";
import { shallow } from "enzyme";

describe("Search component", () => {
  it("should call a function on user input", () => {
    const mockQueryText = jest.fn();
    const wrapper = shallow(
      <Search setDestination={mockQueryText} queryText={mockQueryText} />
    );
    const textInput = wrapper.find({ testID: "searchInput" });
    textInput.simulate("changeText", "H805");
    expect(mockQueryText).toHaveBeenCalledTimes(1);
    expect(mockQueryText.mock.calls[0][0]).toBe("H805");
  });

  it("should fucking do something", () => {
    autoCompleteValues = [];
    let height = getAutoCompleteHeight(autoCompleteValues);
    expect(height).toBe(50);

    autoCompleteValues = [1];
    height = getAutoCompleteHeight(autoCompleteValues);
    expect(height).toBe(101);
  });

  it("should do something else", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.props().style[0].top).toBe(48);
  });
});
