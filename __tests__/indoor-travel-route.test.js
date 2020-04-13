import React from "react";
import IndoorTravelRoute from "../src/components/travel-route/indoor-travel-route.component";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import { Alert } from "react-native";
import * as testData from "./__testData__/indoor-travel-route";

describe("Indoor Travel Route component", () => {
  it("should match indoor travel route snapshot", () => {
    const tree = renderer
      .create(
        <IndoorTravelRoute
          start={testData.mockPOIs[0]}
          end={testData.mockPOIs[1]}
          chosenFloorLevel={8}
          setTravelState={null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("it should alert the user if theirs no indoor floor plans", () => {
    const mockSetTravelState = jest.fn();
    const wrapper = shallow(
      <IndoorTravelRoute
        start={testData.mockBuilding[0]}
        end={testData.mockBuilding[1]}
        chosenFloorLevel={8}
        setTravelState={mockSetTravelState}
      />
    );

    expect(mockSetTravelState).toHaveBeenCalledTimes(1);
  });
});
