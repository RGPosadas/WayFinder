import { Platform } from "react-native";
import { getOmniboxAutoCompleteHeight } from "../src/services/auto-complete-height.service";

describe("Auto-complete-height-service", () => {
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
