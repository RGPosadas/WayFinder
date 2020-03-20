import React from "react";
import OmniboxDirections from "../src/components/search/omnibox-directions.component";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";

let mockPOIs = [
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "Stairs 2",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034
    },
    buildingId: "BuildingId.H",
    level: 8,
    category: "Stairs"
  },
  {
    id: "f5a7d95c-170b-48c9-aac3-e9faafa6033d",
    displayName: "Stairs 3",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251
    },
    buildingId: "BuildingId.H",
    level: 8,
    category: "Stairs"
  }
];

describe("OmniboxDirections component", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <OmniboxDirections
          initialLocation={mockPOIs[0]}
          destination={mockPOIs[1]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function on press", () => {
    const mockSetDestination = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        setDestination={mockSetDestination}
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
      />
    );

    const backArrow = wrapper.find({ testID: "backArrow" });
    backArrow.simulate("press");
    expect(mockSetDestination).toHaveBeenCalledTimes(1);
  });

  it("should call a function on user input", () => {
    const mockQueryText = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        queryText={mockQueryText}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("changeText", "H805");
    expect(mockQueryText).toHaveBeenCalledTimes(1);
    expect(mockQueryText.mock.calls[0][0]).toBe("H805");
  });

  it("should call a function on user input", () => {
    const mockQueryText = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        queryText={mockQueryText}
      />
    );

    const textInput = wrapper.find({
      testID: "searchInputDestinationLocation"
    });
    textInput.simulate("changeText", "H805");
    expect(mockQueryText).toHaveBeenCalledTimes(1);
    expect(mockQueryText.mock.calls[0][0]).toBe("H805");
  });
});
