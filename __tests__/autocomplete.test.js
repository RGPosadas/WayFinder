import React from "react";
import { TouchableOpacity } from "react-native";
import AutoComplete from "../src/components/search/autocomplete.component";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

let mockPOIs = [
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "Stairs 2",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034
    },
    buildingId: "BuildingId.H",
    level: 8,
    category: "Stairs"
  },
  {
    id: "f5a7d95c-170b-48c9-aac3-e9faafa6033d",
    displayName: "Stairs 3",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251
    },
    buildingId: "BuildingId.H",
    level: 8,
    category: "Stairs"
  }
];

describe("AutoComplete component", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<AutoComplete />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should run provided function on press", () => {
    const mockSetLocation = jest.fn();

    const wrapper = shallow(
      <AutoComplete
        autoCompleteValues={mockPOIs}
        setLocation={mockSetLocation}
      />
    );
    const touchableList = wrapper
      .find("FlatList")
      .props()
      .renderItem({ item: { displayName: "test" } });
    expect(touchableList.type).toBe(TouchableOpacity);
  });
});
