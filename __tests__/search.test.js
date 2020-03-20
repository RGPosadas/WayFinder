import React from "react";
import Search from "../src/components/search/search.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Search component", () => {
    it("should match snapshot", () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("should call a function on user input", () => {
        const mockQueryText = jest.fn();
        const wrapper = shallow(
            <Search setDestination={mockQueryText} queryText={mockQueryText} />
        );
        const textInput = wrapper.find({testID: "searchInput"});
        textInput.simulate("changeText", 'H805');
        expect(mockQueryText).toHaveBeenCalledTimes(1);
        expect(mockQueryText.mock.calls[0][0]).toBe('H805');
    });
});
