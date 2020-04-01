import { Platform } from "react-native";
import DynamicStylingService from "../src/services/dynamic-styling.service";

describe("Auto-complete-height-service", () => {
  const {
    getOmniboxAutoCompleteHeight,
    getSearchBarAutoCompleteHeight
  } = DynamicStylingService.getInstance();

  it("should get the correct height of the AutoComplete component", () => {
    let startSearchResultValues: any[];
    let startLocationInputValue: string;
    let endLocationSearchResults: any[];
    let showTimePicker: boolean = false;
    let endLocationInputValue: string = null;

    let autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      showTimePicker,
      endLocationInputValue
    );
    expect(autoComplete).toBe(260);

    startSearchResultValues = ["1"];
    startLocationInputValue = "test";
    endLocationSearchResults = null;
    showTimePicker = false;
    endLocationInputValue = null;

    autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      showTimePicker,
      endLocationInputValue
    );
    expect(autoComplete).toBe(310);

    startSearchResultValues = [];
    startLocationInputValue = "";
    endLocationSearchResults = ["1"];
    showTimePicker = false;
    endLocationInputValue = "test";

    autoComplete = getOmniboxAutoCompleteHeight(
      startSearchResultValues,
      startLocationInputValue,
      endLocationSearchResults,
      showTimePicker,
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
      showTimePicker,
      endLocationInputValue
    );
    expect(autoComplete).toBe(235);
  });
});
