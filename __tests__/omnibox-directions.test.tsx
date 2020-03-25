import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Platform } from "react-native";
import { getOmniboxAutoCompleteHeight } from "../src/services/autoCompleteHeight.service";
import OmniboxDirections from "../src/components/search/omnibox-directions.component";
import { POI, BuildingId, POICategory } from "../src/types/main";
import { queryText } from "../src/services/queryUserIntput.service";

const mockPOIs: POI[] = [
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "Stairs 2",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Washroom
  },
  {
    id: "f5a7d95c-170b-48c9-aac3-e9faafa6033d",
    displayName: "Stairs 3",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Washroom
  }
];

describe("OmniboxDirections component", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <OmniboxDirections
          initialLocation={mockPOIs[0]}
          destination={mockPOIs[1]}
          currentLocation={null}
          setDestination={null}
          setInitialLocation={null}
          queryText={queryText}
          setIsDestinationFocused={null}
          isDestinationFocused={null}
          setStartTravelPlan={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function when back arrow pressed", () => {
    const mockSetDestination = jest.fn();
    const mocSetInitialLocation = jest.fn();
    const mockSetIsDestinationFocused = jest.fn();
    const mockSetStartTravelPlan = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        setDestination={mockSetDestination}
        setInitialLocation={mocSetInitialLocation}
        setIsDestinationFocused={mockSetIsDestinationFocused}
        initialLocation={mockPOIs[0]}
        setStartTravelPlan={mockSetStartTravelPlan}
        destination={mockPOIs[1]}
        currentLocation={null}
        queryText={null}
        isDestinationFocused={null}
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
        currentLocation={null}
        isDestinationFocused={null}
        setDestination={null}
        setInitialLocation={null}
        setIsDestinationFocused={null}
        setStartTravelPlan={null}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("changeText", "H805");
    expect(mockQueryText).toHaveBeenCalledTimes(1);
    expect(mockQueryText.mock.calls[0][0]).toBe("H805");
  });

  it("should call the provided functin when initial location textInput is focused", () => {
    const mockSetIsDestinationFocused = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        setIsDestinationFocused={mockSetIsDestinationFocused}
        currentLocation={null}
        setDestination={null}
        setInitialLocation={null}
        queryText={null}
        isDestinationFocused={null}
        setStartTravelPlan={null}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("focus");
    expect(mockSetIsDestinationFocused).toHaveBeenCalledTimes(1);
    expect(mockSetIsDestinationFocused.mock.calls[0][0]).toBe(false);
  });

  it("should call a function when destination location textInput text is changed", () => {
    const mockQueryText = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        queryText={mockQueryText}
        currentLocation={null}
        setDestination={null}
        setInitialLocation={null}
        setIsDestinationFocused={null}
        isDestinationFocused={null}
        setStartTravelPlan={null}
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
    const mockSetIsDestinationFocused = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        setIsDestinationFocused={mockSetIsDestinationFocused}
        currentLocation={null}
        setDestination={null}
        setInitialLocation={null}
        queryText={null}
        isDestinationFocused={null}
        setStartTravelPlan={null}
      />
    );

    const textInput = wrapper.find({
      testID: "searchInputDestinationLocation"
    });
    textInput.simulate("focus");
    expect(mockSetIsDestinationFocused).toHaveBeenCalledTimes(1);
    expect(mockSetIsDestinationFocused.mock.calls[0][0]).toBe(true);
  });

  it("should call setshowTimePicker() when pressed", () => {
    const mockSetshowTimePicker = jest.fn();

    const useStateSpy = jest.spyOn(React, "useState");
    // @ts-ignore
    useStateSpy.mockImplementation(init => [init, mockSetshowTimePicker]);

    const wrapper = shallow(
      <OmniboxDirections
        initialLocation={mockPOIs[0]}
        destination={mockPOIs[1]}
        currentLocation={null}
        setDestination={null}
        setInitialLocation={null}
        queryText={null}
        setIsDestinationFocused={null}
        isDestinationFocused={null}
        setStartTravelPlan={null}
      />
    );

    wrapper
      .find({ testID: "timePickerButton" })
      .props()
      .onPress();

    expect(mockSetshowTimePicker).toHaveBeenCalledTimes(1);
  });

  it("should get the height of the autoComplete component", () => {
    let autoCompleteValues: string[];
    let value: string;
    let autoCompleteValuesDest: string[];
    let showTimePicker: Boolean;
    let destinationValue: string;

    let autoComplete = getOmniboxAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      (showTimePicker = null),
      (destinationValue = null)
    );
    expect(autoComplete).toBe(260);

    autoCompleteValues = ["1"];
    value = "tst";
    autoCompleteValuesDest = null;
    showTimePicker = null;
    destinationValue = null;

    autoComplete = getOmniboxAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      (showTimePicker = null),
      (destinationValue = null)
    );
    expect(autoComplete).toBe(310);

    autoCompleteValues = [];
    value = "";
    autoCompleteValuesDest = ["1"];
    showTimePicker = null;
    destinationValue = "test";

    autoComplete = getOmniboxAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      (showTimePicker = null),
      destinationValue
    );
    expect(autoComplete).toBe(310);

    autoCompleteValues = [];
    value = null;
    autoCompleteValuesDest = null;
    showTimePicker = true;
    destinationValue = null;

    Platform.OS = "ios";

    autoComplete = getOmniboxAutoCompleteHeight(
      autoCompleteValues,
      value,
      autoCompleteValuesDest,
      (showTimePicker = null),
      (destinationValue = null)
    );
    expect(autoComplete).toBe(235);
  });
});
