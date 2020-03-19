import CustomMarker from "../src/components/map-overlays/custom-marker.component";
import { Buildings } from "../src/constants/buildings.data";
import renderer from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";
import { BUILDING_MARKER_COLOR } from "../src/constants/style";

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
        onPress={() => {}}
      />
    );

    const bubble = wrapper
      .find({ testID: "bubble" })
      .at(0)
      .props();
    expect(bubble).toHaveProperty(
      ["style", "backgroundColor"],
      BUILDING_MARKER_COLOR
    );
  });
});
