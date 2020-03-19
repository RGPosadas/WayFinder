import CustomMarker from "../src/components/map-overlays/custom-marker.component";
import { Buildings } from "../src/constants/buildings.data";
import { BuildingId } from "../src/types/main";
import renderer from "react-test-renderer";
import React from "react";
import { shallow } from "enzyme";
import { BUILDING_MARKER_COLOR, CONCORDIA_RED } from "../src/constants/style";
import { POIInfo } from "../src/constants/poi.data";

describe("CustomMarker component", () => {
  const buildingH = Buildings[0];
  const H = BuildingId[BuildingId.H];

  it("should match snapshot", () => {
    const tree = renderer.create(<CustomMarker />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function on press", () => {
    const mockOnPress = jest.fn();
    const wrapper = shallow(
      <CustomMarker
        location={buildingH.location}
        markerType={"building"}
        text={H}
        onPress={mockOnPress}
        testID={"marker" + H}
      />
    );
    const marker = wrapper.find({ testID: "marker" + H });
    marker.simulate("press");
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it("should be black if it is a building marker", () => {
    const wrapper = shallow(
      <CustomMarker
        location={buildingH.location}
        markerType={"building"}
        text={H}
        onPress={() => {}}
        testID={"marker" + H}
      />
    );

    const bubble = wrapper.find({ testID: "marker" + H + "Bubble" }).props();
    expect(bubble).toHaveProperty(
      ["style", "backgroundColor"],
      BUILDING_MARKER_COLOR
    );
  });

  it("should be red if it is a poi marker", () => {
    const H801 = POIInfo[9];
    const wrapper = shallow(
      <CustomMarker
        location={buildingH.location}
        markerType={"poi"}
        text={H801.displayName}
        onPress={() => {}}
        testID={"poi" + H801.id}
      />
    );

    const bubble = wrapper.find({ testID: "poi" + H801.id + "Bubble" }).props();
    expect(bubble).toHaveProperty(["style", "backgroundColor"], CONCORDIA_RED);
  });
});
