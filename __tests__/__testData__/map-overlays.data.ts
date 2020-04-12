import { SearchResult } from "../../src/types/main";

export const mockStartLocation: SearchResult = {
  id: "H801",
  displayName: "H801",
  location: {
    latitude: 45.497308,
    longitude: -73.578542,
  },
  searchName: "H801",
  extraInformation: "Building: H, Level: 8",
};

export const mockEndLocation: SearchResult = {
  id: "MB",
  displayName: "John Molson School of Business",
  location: {
    latitude: 45.49529042487793,
    longitude: -73.5789511712376,
  },
  searchName: "MB: John Molson School of Business",
  extraInformation: "Campus: SGW",
};
