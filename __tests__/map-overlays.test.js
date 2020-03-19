import React from "react";
import MapOverlays from "../src/components/map-overlays/map-overlays.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { BuildingId, ZoomLevel } from "../src/types/main";
import { Buildings } from "../src/constants/buildings.data";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../src/constants/style";

describe("MapOverlays component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<MapOverlays />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change the polygon color and call onBuildingTap after polygon press", () => {
    const mockOnBuildingTap = jest.fn();
    const wrapper = shallow(
      <MapOverlays
        indoorInformation={null}
        zoomLevel={ZoomLevel.OUTDOOR}
        onBuildingTap={mockOnBuildingTap}
        tappedBuilding={null}
      />
    );
    const polygon = wrapper.find({ coordinates: Buildings[0].boundingBox });
    expect(polygon.prop("fillColor", BUILDING_UNTAPPED));
    polygon.simulate("press");
    expect(mockOnBuildingTap).toHaveBeenCalledTimes(1);
    expect(polygon.prop("fillColor", CONCORDIA_RED));
    expect(mockOnBuildingTap.mock.calls[0][0]).toBe(BuildingId.H);
  });

  it("should call onBuildingTap after marker press", () => {
    const mockOnBuildingTap = jest.fn();
    const fakeIndoorInformation = {
      currentFloor: { index: 0, level: 8 },
      floors: [{ index: 0, level: 8 }]
    };
    const wrapper = shallow(
      <MapOverlays
        indoorInformation={fakeIndoorInformation}
        zoomLevel={ZoomLevel.INDOOR}
        onBuildingTap={mockOnBuildingTap}
        tappedBuilding={null}
      />
    );
    const marker = wrapper.find({ location: Buildings[0].location });
    marker.simulate("press");
    expect(mockOnBuildingTap).toHaveBeenCalledTimes(1);
    expect(mockOnBuildingTap.mock.calls[0][0]).toBe(BuildingId.H);
  });
});
