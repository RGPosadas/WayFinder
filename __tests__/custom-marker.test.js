import CustomMarker from "../src/components/map-overlays/custom-marker.component";
import { Buildings } from "../src/constants";
import renderer from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";
import {
  BUILDING_MARKER_COLOR,
  START_LOCATION_COLOR,
  END_LOCATION_COLOR,
} from "../src/styles";

describe("CustomMarker component", () => {
  it("should match snapshot", () => {
    const building = Buildings[0];
    const tree = renderer
      .create(
        <CustomMarker
          location={building.location}
          markerType={"building"}
          text={"asdf"}
          onPress={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function on press", () => {
    const mockOnPress = jest.fn();
    const building = Buildings[0];
    const wrapper = shallow(
      <CustomMarker
        location={building.location}
        markerType={"poi"}
        text={"asdf"}
        onPress={mockOnPress}
        testID={"marker"}
      />
    );
    const marker = wrapper.find({ testID: "marker" });
    marker.simulate("press");
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should be black if it is a building marker", () => {
    const building = Buildings[0];
    const wrapper = shallow(
      <CustomMarker
        location={building.location}
        markerType={"building"}
        text={"asdf"}
        testID={"building"}
        onPress={() => {}}
      />
    );

    const bubble = wrapper.find({ testID: "buildingBubble" }).at(0).props();
    expect(bubble).toHaveProperty(
      ["style", "backgroundColor"],
      BUILDING_MARKER_COLOR
    );
  });

  it("should be blue with zIndex: 2 if it is a startLocation marker", () => {
    const building = Buildings[0];
    const wrapper = shallow(
      <CustomMarker
        location={building.location}
        markerType={"startLocation"}
        text={"H"}
        onPress={() => {}}
        testID={"startLocation"}
        zIndex={2}
      />
    );

    const marker = wrapper.find({ testID: "startLocation" }).at(0).props();
    expect(marker).toHaveProperty(["style", "zIndex"], 2);

    const bubble = wrapper
      .find({ testID: "startLocationBubble" })
      .at(0)
      .props();
    expect(bubble).toHaveProperty(
      ["style", "backgroundColor"],
      START_LOCATION_COLOR
    );
  });

  it("should be green with zIndex: 2 if it is an endLocation marker", () => {
    const building = Buildings[0];
    const wrapper = shallow(
      <CustomMarker
        location={building.location}
        markerType={"endLocation"}
        text={"H"}
        onPress={() => {}}
        testID={"endLocation"}
        zIndex={2}
      />
    );

    const marker = wrapper.find({ testID: "endLocation" }).at(0).props();
    expect(marker).toHaveProperty(["style", "zIndex"], 2);

    const bubble = wrapper.find({ testID: "endLocationBubble" }).at(0).props();
    expect(bubble).toHaveProperty(
      ["style", "backgroundColor"],
      END_LOCATION_COLOR
    );
  });
});
