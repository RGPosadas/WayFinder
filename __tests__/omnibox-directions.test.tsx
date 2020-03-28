import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Platform } from "react-native";
import { getOmniboxAutoCompleteHeight } from "../src/services/auto-complete-height.service";
import OmniboxDirections from "../src/components/search/omnibox-directions.component";
import { POI, BuildingId, POICategory, TravelState } from "../src/types/main";

const mockPOIs: POI[] = [
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "H803",
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
    displayName: "H805",
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
          startLocation={mockPOIs[0]}
          endLocation={mockPOIs[1]}
          currentLocation={null}
          setEndLocation={null}
          setStartLocation={null}
          setEndLocationFocused={null}
          endLocationFocused={null}
          setTravelState={null}
          updateSearchResults={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function when back arrow is pressed", () => {
    const mockSetEndLocation = jest.fn();
    const mockSetStartLocation = jest.fn();
    const mockSetEndLocationFocused = jest.fn();
    const mockSetTravelState = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        setEndLocation={mockSetEndLocation}
        setStartLocation={mockSetStartLocation}
        setEndLocationFocused={mockSetEndLocationFocused}
        startLocation={mockPOIs[0]}
        setTravelState={mockSetTravelState}
        endLocation={mockPOIs[1]}
        currentLocation={null}
        updateSearchResults={null}
        endLocationFocused={null}
      />
    );

    const backArrow = wrapper.find({ testID: "backArrow" });
    backArrow.simulate("press");

    expect(mockSetEndLocation).toHaveBeenCalledTimes(1);
    expect(mockSetTravelState).toHaveBeenCalledTimes(1);
    expect(mockSetEndLocation.mock.calls[0][0]).toBe(null);
    expect(mockSetTravelState.mock.calls[0][0]).toBe(TravelState.NONE);
  });

  it("should call provided function when start location textInput text is changed", () => {
    const mockUpdateSearchResults = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        startLocation={mockPOIs[0]}
        endLocation={mockPOIs[1]}
        currentLocation={null}
        endLocationFocused={null}
        setEndLocation={null}
        setStartLocation={null}
        setEndLocationFocused={null}
        setTravelState={null}
        updateSearchResults={mockUpdateSearchResults}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("changeText", "H803");
    expect(mockUpdateSearchResults).toHaveBeenCalledTimes(1);
    expect(mockUpdateSearchResults.mock.calls[0][0]).toBe("H803");
  });

  it("should call the provided function on focus of start location TextInput", () => {
    const mockSetEndLocationFocused = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        startLocation={mockPOIs[0]}
        endLocation={mockPOIs[1]}
        setEndLocationFocused={mockSetEndLocationFocused}
        currentLocation={null}
        setEndLocation={null}
        setStartLocation={null}
        updateSearchResults={null}
        endLocationFocused={null}
        setTravelState={null}
      />
    );

    const textInput = wrapper.find({ testID: "searchInputInitialLocation" });
    textInput.simulate("focus");
    expect(mockSetEndLocationFocused).toHaveBeenCalledTimes(1);
    expect(mockSetEndLocationFocused.mock.calls[0][0]).toBe(false);
  });

  it("should call a function when end location textInput text is changed", () => {
    const mockUpdateSearchResults = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        startLocation={mockPOIs[0]}
        endLocation={mockPOIs[1]}
        currentLocation={null}
        setEndLocation={null}
        setStartLocation={null}
        setEndLocationFocused={null}
        endLocationFocused={null}
        setTravelState={null}
        updateSearchResults={mockUpdateSearchResults}
      />
    );

    const textInput = wrapper.find({
      testID: "searchInputDestinationLocation"
    });
    textInput.simulate("changeText", "H805");
    expect(mockUpdateSearchResults).toHaveBeenCalledTimes(1);
    expect(mockUpdateSearchResults.mock.calls[0][0]).toBe("H805");
  });

  it("should call the provided functin when end location textInput is focused", () => {
    const mockSetEndLocationFocused = jest.fn();

    const wrapper = shallow(
      <OmniboxDirections
        startLocation={mockPOIs[0]}
        endLocation={mockPOIs[1]}
        setEndLocationFocused={mockSetEndLocationFocused}
        currentLocation={null}
        setEndLocation={null}
        setStartLocation={null}
        endLocationFocused={null}
        setTravelState={null}
        updateSearchResults={null}
      />
    );

    const textInput = wrapper.find({
      testID: "searchInputDestinationLocation"
    });
    textInput.simulate("focus");
    expect(mockSetEndLocationFocused).toHaveBeenCalledTimes(1);
    expect(mockSetEndLocationFocused.mock.calls[0][0]).toBe(true);
  });

  it("should call setshowTimePicker() when pressed", () => {
    const mockSetShowTimePicker = jest.fn();

    const useStateSpy = jest.spyOn(React, "useState");
    // @ts-ignore
    useStateSpy.mockImplementation(init => [init, mockSetShowTimePicker]);

    const wrapper = shallow(
      <OmniboxDirections
        startLocation={mockPOIs[0]}
        endLocation={mockPOIs[1]}
        currentLocation={null}
        setEndLocation={null}
        setStartLocation={null}
        setEndLocationFocused={null}
        endLocationFocused={null}
        setTravelState={null}
        updateSearchResults={null}
      />
    );

    wrapper
      .find({ testID: "timePickerButton" })
      .props()
      .onPress();

    expect(mockSetShowTimePicker).toHaveBeenCalledTimes(1);
  });

  it("should get the correct height of the AutoComplete component", () => {
    let startSearchResultValues: any[];
    let startLocationInputValue: string;
    let endLocationSearchResults: any[];
    let showTimePicker: boolean;
    let endLocationInputValue: string;

    let autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      (showTimePicker = null),
      (endLocationInputValue = null)
    );
    expect(autoComplete).toBe(260);

    startSearchResultValues = ["1"];
    startLocationInputValue = "test";
    endLocationSearchResults = null;
    showTimePicker = null;
    endLocationInputValue = null;

    autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      (showTimePicker = null),
      (endLocationInputValue = null)
    );
    expect(autoComplete).toBe(310);

    startSearchResultValues = [];
    startLocationInputValue = "";
    endLocationSearchResults = ["1"];
    showTimePicker = null;
    endLocationInputValue = "test";

    autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      (showTimePicker = null),
      endLocationInputValue
    );
    expect(autoComplete).toBe(310);

    startSearchResultValues = [];
    startLocationInputValue = null;
    endLocationSearchResults = null;
    showTimePicker = true;
    endLocationInputValue = null;

    Platform.OS = "ios";

    autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      (showTimePicker = null),
      (endLocationInputValue = null)
    );
    expect(autoComplete).toBe(235);
  });
});
