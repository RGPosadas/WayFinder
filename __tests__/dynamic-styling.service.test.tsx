import { Platform } from "react-native";
import DynamicStylingService from "../src/services/dynamic-styling.service";

describe("DynamicStylingService", () => {
  const {
    getOmniboxAutoCompleteHeight,
    getSearchBarAutoCompleteHeight,
  } = DynamicStylingService.getInstance();

  it("should get the correct height of the AutoComplete component", () => {
    let startLocationSearchResults: any[];
    let startLocationInputValue: string;
    let endLocationSearchResults: any[];
    let showTimePicker: boolean = false;
    let endLocationInputValue: string = null;

    let autoComplete = getOmniboxAutoCompleteHeight(
      startLocationInputValue,
      endLocationInputValue,
      startLocationSearchResults,
      endLocationSearchResults,
      showTimePicker
    );
    expect(autoComplete).toBe(260);

    startLocationSearchResults = ["1"];
    startLocationInputValue = "test";
    endLocationSearchResults = null;
    showTimePicker = false;
    endLocationInputValue = null;

    autoComplete = getOmniboxAutoCompleteHeight(
      startLocationInputValue,
      endLocationInputValue,
      startLocationSearchResults,
      endLocationSearchResults,
      showTimePicker
    );
    expect(autoComplete).toBe(310);

    startLocationSearchResults = [];
    startLocationInputValue = "";
    endLocationSearchResults = ["1"];
    showTimePicker = false;
    endLocationInputValue = "test";

    autoComplete = getOmniboxAutoCompleteHeight(
      startLocationInputValue,
      endLocationInputValue,
      startLocationSearchResults,
      endLocationSearchResults,
      showTimePicker
    );
    expect(autoComplete).toBe(310);

    startLocationSearchResults = [];
    startLocationInputValue = null;
    endLocationSearchResults = null;
    showTimePicker = true;
    endLocationInputValue = null;

    Platform.OS = "ios";

    autoComplete = getOmniboxAutoCompleteHeight(
      startLocationInputValue,
      endLocationInputValue,
      startLocationSearchResults,
      endLocationSearchResults,
      showTimePicker
    );
    expect(autoComplete).toBe(235);
  });
});
