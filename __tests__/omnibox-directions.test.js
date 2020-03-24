import React from "react";
import OmniboxDirections, {
  getAutoCompleteHeight
} from "../src/components/search/omnibox-directions.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Platform } from "react-native";

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

  it("should run provided function when back arrow pressed", () => {
    const mockSetDestination = jest.fn();
    const mockSetInitialLocation = jest.fn();
    const mocksetMarkerSetsDestination = jest.fn();
    const mockSetStartTravelPlan = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        setDestination={mockSetDestination}
        setInitialLocation={mockSetInitialLocation}
        setMarkerSetsDestination={mocksetMarkerSetsDestination}
        initialLocation={mockPOIs[0]}
        setStartTravelPlan={mockSetStartTravelPlan}
        destination={mockPOIs[1]}
      />
    );

    const backArrow = wrapper.find({ testID: "backArrow" });
    backArrow.simulate("press");

    expect(mockSetDestination).toHaveBeenCalledTimes(1);
    expect(mockSetStartTravelPlan).toHaveBeenCalledTimes(1);
    expect(mockSetDestination.mock.calls[0][0]).toBe(null);
    expect(mockSetStartTravelPlan.mock.calls[0][0]).toBe(false);
  });

  it("should call provided function when initial location textInput text is changed", () => {
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

  it("should call the provided functin when initial location textInput is focused", () => {
    const mockSetMarkerSetsDestination = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        setMarkerSetsDestination={mockSetMarkerSetsDestination}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("focus");
    expect(mockSetMarkerSetsDestination).toHaveBeenCalledTimes(1);
    expect(mockSetMarkerSetsDestination.mock.calls[0][0]).toBe(false);
  });

  it("should call a function when destination location textInput text is changed", () => {
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

  it("should call the provided functin when destination location textInput is focused", () => {
    const mockSetMarkerSetsDestination = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        setMarkerSetsDestination={mockSetMarkerSetsDestination}
      />
    );

    const textInput = wrapper.find({
      testID: "searchInputDestinationLocation"
    });
    textInput.simulate("focus");
    expect(mockSetMarkerSetsDestination).toHaveBeenCalledTimes(1);
    expect(mockSetMarkerSetsDestination.mock.calls[0][0]).toBe(true);
  });

  it("should call setshowTimePicker() when pressed", () => {
    const mockSetshowTimePicker = jest.fn();

    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, mockSetshowTimePicker]);

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
      />
    );

    wrapper
      .find({ testID: "timePickerButton" })
      .props()
      .onPress();

    expect(mockSetshowTimePicker).toHaveBeenCalledTimes(1);
  });

  it("should get the height of the autoComplete component", () => {
    (autoCompleteValues = []),
      (value = 0),
      (autoCompleteValuesDest = 0),
      (showTimePicker = 0),
      (destinationValue = 0);

    let autoComplete = getAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      showTimePicker,
      destinationValue
    );
    expect(autoComplete).toBe(235);

    (autoCompleteValues = [1]),
      (value = "tst"),
      (autoCompleteValuesDest = 0),
      (showTimePicker = 0),
      (destinationValue = 0);

    autoComplete = getAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      showTimePicker,
      destinationValue
    );
    expect(autoComplete).toBe(286);

    (autoCompleteValues = []),
      (value = ""),
      (autoCompleteValuesDest = [1]),
      (showTimePicker = 0),
      (destinationValue = "test");

    autoComplete = getAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      showTimePicker,
      destinationValue
    );
    expect(autoComplete).toBe(286);

    (autoCompleteValues = []),
      (value = 0),
      (autoCompleteValuesDest = 0),
      (showTimePicker = true),
      (destinationValue = 0);

    Platform.OS = "ios";

    autoComplete = getAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      showTimePicker,
      destinationValue
    );
    expect(autoComplete).toBe(235);
  });
});
