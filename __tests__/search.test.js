import React from "react";
import Search from "../src/components/search/search.component";
import { shallow } from "enzyme";
import DynamicStylingService from "../src/services/dynamic-styling.service";

describe("Search component", () => {
  const {
    getSearchBarAutoCompleteHeight,
  } = DynamicStylingService.getInstance();

  it("should call a function on user input", () => {
    const mockUpdateSearchResults = jest.fn();
    const wrapper = shallow(
      <Search
        setEndLocation={mockUpdateSearchResults}
        updateSearchResults={mockUpdateSearchResults}
      />
    );
    const textInput = wrapper.find({ testID: "searchInput" });
    textInput.simulate("changeText", "H805");
    expect(mockUpdateSearchResults).toHaveBeenCalledTimes(1);
    expect(mockUpdateSearchResults.mock.calls[0][0]).toBe("H805");
  });

  it("should calculate the correct height based on number of items in an array", () => {
    autoCompleteValues = [];
    let height = getSearchBarAutoCompleteHeight(autoCompleteValues);
    expect(height).toBe(50);

    autoCompleteValues = [1];
    height = getSearchBarAutoCompleteHeight(autoCompleteValues);
    expect(height).toBe(135);
  });

  it("should have the correct position for the component on iOS", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.props().style.top).toBe(48);
  });
});
