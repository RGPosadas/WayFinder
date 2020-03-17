import React from "react";
import BuildingHighlights from "../src/components/building-highlights/building-highlights.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { BuildingId } from "../src/types/main";
import { Buildings } from "../src/constants/buildings.data";
import { CONCORDIA_RED, BUILDING_UNTAPPED } from "../src/constants/style";

describe("BuildingHighlights component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<BuildingHighlights />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should change the polygon color and call onBuildingTap after polygon press", () => {
    const mockOnBuildingTap = jest.fn();
    const wrapper = shallow(
      <BuildingHighlights onBuildingTap={mockOnBuildingTap} />
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
    const wrapper = shallow(
      <BuildingHighlights onBuildingTap={mockOnBuildingTap} />
    );
    const marker = wrapper.find({ coordinate: Buildings[0].location });
    marker.simulate("press");
    expect(mockOnBuildingTap).toHaveBeenCalledTimes(1);
    expect(mockOnBuildingTap.mock.calls[0][0]).toBe(BuildingId.H);
  });
});
