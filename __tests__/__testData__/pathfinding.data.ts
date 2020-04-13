import {
  TravelNode,
  Line,
  POICategory,
  FloorPath,
  POI,
  BuildingFloor,
} from "../../src/types/main";

/**
 * This file contains expected results and fixtures for the
 * pathfinding tests.
 */

export const h85103toH815: Line[] = [
  [
    {
      latitude: 45.496957,
      longitude: -73.578855,
    },
    {
      latitude: 45.49714193688946,
      longitude: -73.57874800022101,
    },
  ],
  [
    {
      latitude: 45.49714193688946,
      longitude: -73.57874800022101,
    },
    {
      latitude: 45.49720844470052,
      longitude: -73.57888278122401,
    },
  ],
  [
    {
      latitude: 45.49720844470052,
      longitude: -73.57888278122401,
    },
    {
      latitude: 45.497301508502154,
      longitude: -73.57906181867575,
    },
  ],
  [
    {
      latitude: 45.497301508502154,
      longitude: -73.57906181867575,
    },
    {
      latitude: 45.49735509062119,
      longitude: -73.57918419446206,
    },
  ],
  [
    {
      latitude: 45.49735509062119,
      longitude: -73.57918419446206,
    },
    {
      latitude: 45.49743264359791,
      longitude: -73.57911244537091,
    },
  ],
  [
    {
      latitude: 45.49743264359791,
      longitude: -73.57911244537091,
    },
    {
      latitude: 45.49756354338001,
      longitude: -73.57899677510714,
    },
  ],
  [
    {
      latitude: 45.49756354338001,
      longitude: -73.57899677510714,
    },
    {
      latitude: 45.497613,
      longitude: -73.57895,
    },
  ],
];

export const h96119toH911: Line[] = [
  [
    {
      latitude: 45.497064,
      longitude: -73.578788,
    },
    {
      latitude: 45.497154,
      longitude: -73.578732,
    },
  ],
  [
    {
      latitude: 45.497154,
      longitude: -73.578732,
    },
    {
      latitude: 45.497223,
      longitude: -73.578861,
    },
  ],
  [
    {
      latitude: 45.497223,
      longitude: -73.578861,
    },
    {
      latitude: 45.497322,
      longitude: -73.579066,
    },
  ],
  [
    {
      latitude: 45.497322,
      longitude: -73.579066,
    },
    {
      latitude: 45.49739,
      longitude: -73.579014,
    },
  ],
  [
    {
      latitude: 45.49739,
      longitude: -73.579014,
    },
    {
      latitude: 45.497454,
      longitude: -73.579139,
    },
  ],
  [
    {
      latitude: 45.497454,
      longitude: -73.579139,
    },
    {
      latitude: 45.497489,
      longitude: -73.57917,
    },
  ],
  [
    {
      latitude: 45.497489,
      longitude: -73.57917,
    },
    {
      latitude: 45.497651,
      longitude: -73.579018,
    },
  ],
  [
    {
      latitude: 45.497651,
      longitude: -73.579018,
    },
    {
      latitude: 45.497658,
      longitude: -73.57901,
    },
  ],
];

export const h923toH921: Line[] = [
  [
    {
      latitude: 45.49702,
      longitude: -73.579009,
    },
    {
      latitude: 45.497065,
      longitude: -73.579094,
    },
  ],
];

export const h96119toH9619: Line[] = [
  [
    {
      latitude: 45.497575,
      longitude: -73.578849,
    },
    {
      latitude: 45.497658,
      longitude: -73.57901,
    },
  ],
];

export const brokenGraph: TravelNode[] = [
  {
    id: 0,
    location: {
      latitude: 45.497348,
      longitude: -73.578553,
    },
    children: [1, 12],
  },
  {
    id: 1,
    location: {
      latitude: 45.497154,
      longitude: -73.578732,
    },
    children: [2, 11],
  },
  {
    id: 2,
    location: {
      latitude: 45.496979,
      longitude: -73.578896,
    },
    children: [1, 3],
  },
  {
    id: 3,
    location: {
      latitude: 45.497081,
      longitude: -73.579109,
    },
    children: [2, 4, 5],
  },
  {
    id: 4,
    location: {
      latitude: 45.497042,
      longitude: -73.579145,
    },
    children: [3],
  },
  {
    id: 5,
    location: {
      latitude: 45.497146,
      longitude: -73.579202,
    },
    children: [3, 6, 9],
  },
  {
    id: 6,
    location: {
      latitude: 45.497219,
      longitude: -73.579361,
    },
    children: [5, 7],
  },
  {
    id: 7,
    location: {
      latitude: 45.497283,
      longitude: -73.579301,
    },
    children: [6, 8],
  },
  {
    id: 8,
    location: {
      latitude: 45.497277,
      longitude: -73.579226,
    },
    children: [7, 9],
  },
  {
    id: 9,
    location: {
      latitude: 45.497233,
      longitude: -73.579128,
    },
    children: [5, 8],
  },
  {
    id: 10,
    location: {
      latitude: 45.497322,
      longitude: -73.579066,
    },
    children: [11, 13],
  },
  {
    id: 11,
    location: {
      latitude: 45.497223,
      longitude: -73.578861,
    },
    children: [1, 10, 12],
  },
  {
    id: 12,
    location: {
      latitude: 45.497414,
      longitude: -73.578683,
    },
    children: [0, 11],
  },
  {
    id: 13,
    location: {
      latitude: 45.49739,
      longitude: -73.579014,
    },
    children: [14, 17],
  },
  {
    id: 14,
    location: {
      latitude: 45.49739,
      longitude: -73.579014,
    },
    children: [13, 15],
  },
  {
    id: 15,
    location: {
      latitude: 45.497489,
      longitude: -73.57917,
    },
    children: [14, 16],
  },
  {
    id: 16,
    location: {
      latitude: 45.497651,
      longitude: -73.579018,
    },
    children: [15, 17],
  },
  {
    id: 17,
    location: {
      latitude: 45.497651,
      longitude: -73.579018,
    },
    children: [13, 16, 18],
  },
  {
    id: 18,
    location: {
      latitude: 45.497504,
      longitude: -73.578713,
    },
    children: [17],
  },
];

export const h96117toMBMensBathroom: FloorPath[] = [
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "37f6e5b8-0b86-4fed-9d3a-9f5e3a4231bd",
      level: 9,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 9,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497223, longitude: -73.578861 },
      ],
      [
        { latitude: 45.497223, longitude: -73.578861 },
        { latitude: 45.497322, longitude: -73.579066 },
      ],
      [
        { latitude: 45.497322, longitude: -73.579066 },
        { latitude: 45.49739, longitude: -73.579014 },
      ],
      [
        { latitude: 45.49739, longitude: -73.579014 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "058086ab-58be-4174-a34d-d0dd7e80014f",
      level: 8,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497314, longitude: -73.578751 },
      ],
    ],
  },
  {
    buildingId: "MB",
    level: 1,
    path: [
      [
        { latitude: 45.49533465172625, longitude: -73.57934289831273 },
        { latitude: 45.49538722650027, longitude: -73.57932228595018 },
      ],
      [
        { latitude: 45.49538722650027, longitude: -73.57932228595018 },
        { latitude: 45.495454035943894, longitude: -73.57927702759403 },
      ],
      [
        { latitude: 45.495454035943894, longitude: -73.57927702759403 },
        { latitude: 45.495498624635324, longitude: -73.57925221323967 },
      ],
      [
        { latitude: 45.495498624635324, longitude: -73.57925221323967 },
        { latitude: 45.49554740223838, longitude: -73.57927136202986 },
      ],
    ],
  },
];

export const h96117toH9MensBathroom: FloorPath[] = [
  {
    buildingId: "H",
    level: 9,
    path: [
      [
        { latitude: 45.497101, longitude: -73.578807 },
        { latitude: 45.497154, longitude: -73.578732 },
      ],
      [
        { latitude: 45.497154, longitude: -73.578732 },
        { latitude: 45.497223, longitude: -73.578861 },
      ],
      [
        { latitude: 45.497223, longitude: -73.578861 },
        { latitude: 45.497322, longitude: -73.579066 },
      ],
      [
        { latitude: 45.497322, longitude: -73.579066 },
        { latitude: 45.49739, longitude: -73.579014 },
      ],
      [
        { latitude: 45.49739, longitude: -73.579014 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
];

export const h9117toH8WomensBathroom: FloorPath[] = [
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 8,
      description: "",
      displayName: "Stairs 2",
      id: "363649b3-61ea-4138-b8bb-b116412bcabb",
      level: 9,
      location: { latitude: 45.497438, longitude: -73.578964 },
    },
    level: 9,
    path: [
      [
        { latitude: 45.497438, longitude: -73.578964 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 8,
      description: "",
      displayName: "Stairs 2",
      id: "c4541028-739d-4651-b9f5-dc4d54054807",
      level: 8,
      location: { latitude: 45.497482, longitude: -73.579034 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497482, longitude: -73.579034 },
        { latitude: 45.49756354338001, longitude: -73.57899677510714 },
      ],
      [
        { latitude: 45.49756354338001, longitude: -73.57899677510714 },
        { latitude: 45.49741149279668, longitude: -73.57868966217494 },
      ],
      [
        { latitude: 45.49741149279668, longitude: -73.57868966217494 },
        { latitude: 45.497348275354476, longitude: -73.57855018730616 },
      ],
      [
        { latitude: 45.497348275354476, longitude: -73.57855018730616 },
        { latitude: 45.497239, longitude: -73.578674 },
      ],
    ],
  },
];

export const h8WomensBathroomToH9117: FloorPath[] = [
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 6,
      description: "",
      displayName: "Escalators Up",
      id: "07366816-4ca4-47b5-808f-ba034508bd10",
      level: 8,
      location: { latitude: 45.497267, longitude: -73.578869 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497267, longitude: -73.578869 },
        { latitude: 45.49720844470052, longitude: -73.57888278122401 },
      ],
      [
        { latitude: 45.49720844470052, longitude: -73.57888278122401 },
        { latitude: 45.49714193688946, longitude: -73.57874800022101 },
      ],
      [
        { latitude: 45.49714193688946, longitude: -73.57874800022101 },
        { latitude: 45.497239, longitude: -73.578674 },
      ],
    ],
  },
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 6,
      description: "",
      displayName: "Escalators Up",
      id: "f45af436-f9bb-40b8-97c5-8526ad68ac55",
      level: 9,
      location: { latitude: 45.497317, longitude: -73.57901 },
    },
    level: 9,
    path: [
      [
        { latitude: 45.497317, longitude: -73.57901 },
        { latitude: 45.497322, longitude: -73.579066 },
      ],
      [
        { latitude: 45.497322, longitude: -73.579066 },
        { latitude: 45.49739, longitude: -73.579014 },
      ],
      [
        { latitude: 45.49739, longitude: -73.579014 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
];

export const h3rdPoiMock: POI = {
  id: "8dd47eee-23b4-437c-bd74-aad3876f83dc",
  displayName: "Stairs 1",
  description: "",
  location: {
    latitude: 45.497354,
    longitude: -73.578713,
  },
  buildingId: "H",
  level: 3,
  category: POICategory.Stairs,
};

export const h3rdBuildingFloorMock: BuildingFloor = {
  id: 3,
  buildingId: "H",
  level: 3,
  bounds: null,
  image: null,
  travelNodes: [
    {
      id: 0,
      location: {
        latitude: 45.497411422038525,
        longitude: -73.57930387743083,
      },
      children: [1],
    },
    {
      id: 1,
      location: {
        latitude: 45.49735509062119,
        longitude: -73.57918419446206,
      },
      children: [0],
    },
  ],
  unfriendlyConnections: [],
};

export const accessibleH96117toPoliceStExit: FloorPath[] = [
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "37f6e5b8-0b86-4fed-9d3a-9f5e3a4231bd",
      level: 9,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 9,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497223, longitude: -73.578861 },
      ],
      [
        { latitude: 45.497223, longitude: -73.578861 },
        { latitude: 45.497322, longitude: -73.579066 },
      ],
      [
        { latitude: 45.497322, longitude: -73.579066 },
        { latitude: 45.49739, longitude: -73.579014 },
      ],
      [
        { latitude: 45.49739, longitude: -73.579014 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "058086ab-58be-4174-a34d-d0dd7e80014f",
      level: 8,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497314, longitude: -73.578751 },
      ],
    ],
  },
  {
    buildingId: "MB",
    level: 1,
    path: [
      [
        { latitude: 45.495216991097614, longitude: -73.5785603480603 },
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
      ],
      [
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
        { latitude: 45.495197, longitude: -73.578708 },
      ],
      [
        { latitude: 45.495197, longitude: -73.578708 },
        { latitude: 45.495291, longitude: -73.578866 },
      ],
      [
        { latitude: 45.495291, longitude: -73.578866 },
        { latitude: 45.495319, longitude: -73.578834 },
      ],
      [
        { latitude: 45.495319, longitude: -73.578834 },
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
      ],
      [
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
      ],
      [
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
        { latitude: 45.49554740223838, longitude: -73.57927136202986 },
      ],
    ],
  },
];

export const h96117toPoliceStExit: FloorPath[] = [
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "37f6e5b8-0b86-4fed-9d3a-9f5e3a4231bd",
      level: 9,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 9,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497223, longitude: -73.578861 },
      ],
      [
        { latitude: 45.497223, longitude: -73.578861 },
        { latitude: 45.497322, longitude: -73.579066 },
      ],
      [
        { latitude: 45.497322, longitude: -73.579066 },
        { latitude: 45.49739, longitude: -73.579014 },
      ],
      [
        { latitude: 45.49739, longitude: -73.579014 },
        { latitude: 45.497563, longitude: -73.578837 },
      ],
      [
        { latitude: 45.497563, longitude: -73.578837 },
        { latitude: 45.497643, longitude: -73.578983 },
      ],
    ],
  },
  {
    buildingId: "H",
    connector: {
      buildingId: "H",
      category: 4,
      description: "",
      displayName: "Elevator",
      id: "058086ab-58be-4174-a34d-d0dd7e80014f",
      level: 8,
      location: { latitude: 45.497314, longitude: -73.578751 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497314, longitude: -73.578751 },
        { latitude: 45.497314, longitude: -73.578751 },
      ],
    ],
  },
  {
    buildingId: "MB",
    level: 1,
    path: [
      [
        { latitude: 45.495216991097614, longitude: -73.5785603480603 },
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
      ],
      [
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
        { latitude: 45.495319, longitude: -73.578834 },
      ],
      [
        { latitude: 45.495319, longitude: -73.578834 },
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
      ],
      [
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
      ],
      [
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
        { latitude: 45.49554740223838, longitude: -73.57927136202986 },
      ],
    ],
  },
];

export const accessibleMbStairsToS1ToCC119: FloorPath[] = [
  {
    buildingId: "CC",
    level: 1,
    path: [
      [
        { latitude: 45.458116, longitude: -73.639914 },
        { latitude: 45.458161806440636, longitude: -73.63997407257557 },
      ],
      [
        { latitude: 45.458161806440636, longitude: -73.63997407257557 },
        { latitude: 45.45825399406411, longitude: -73.64020708948374 },
      ],
      [
        { latitude: 45.45825399406411, longitude: -73.64020708948374 },
        { latitude: 45.45836076219479, longitude: -73.64047598093748 },
      ],
      [
        { latitude: 45.45836076219479, longitude: -73.64047598093748 },
        { latitude: 45.458403, longitude: -73.640648 },
      ],
    ],
  },
  {
    buildingId: "MB",
    level: 1,
    path: [
      [
        { latitude: 45.495277037243376, longitude: -73.57859236859093 },
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
      ],
      [
        { latitude: 45.49522388917384, longitude: -73.57863295823336 },
        { latitude: 45.495197, longitude: -73.578708 },
      ],
      [
        { latitude: 45.495197, longitude: -73.578708 },
        { latitude: 45.495291, longitude: -73.578866 },
      ],
      [
        { latitude: 45.495291, longitude: -73.578866 },
        { latitude: 45.495319, longitude: -73.578834 },
      ],
      [
        { latitude: 45.495319, longitude: -73.578834 },
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
      ],
      [
        { latitude: 45.49536913015795, longitude: -73.57889883220196 },
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
      ],
      [
        { latitude: 45.49536466482581, longitude: -73.57903562486172 },
        { latitude: 45.49554740223838, longitude: -73.57927136202986 },
      ],
    ],
  },
];
