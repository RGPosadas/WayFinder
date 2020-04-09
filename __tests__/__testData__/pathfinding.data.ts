import {
  TravelNode,
  Line,
  BuildingId,
  POICategory,
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

export const h96117toMBMensBathroom = [
  {
    buildingId: "H",
    connectorType: 7,
    level: 9,
    path: [
      [
        { latitude: 45.497269, longitude: -73.578862 },
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
    connectorType: 7,
    level: 8,
    path: [
      [
        { latitude: 45.49731, longitude: -73.57901 },
        { latitude: 45.49731, longitude: -73.57901 },
      ],
    ],
  },
  {
    buildingId: "MB",
    level: 1,
    path: [
      [
        { latitude: 45.49554740223838, longitude: -73.57927136202986 },
        { latitude: 45.495498624635324, longitude: -73.57925221323967 },
      ],
      [
        { latitude: 45.495498624635324, longitude: -73.57925221323967 },
        { latitude: 45.495454035943894, longitude: -73.57927702759403 },
      ],
      [
        { latitude: 45.495454035943894, longitude: -73.57927702759403 },
        { latitude: 45.49538722650027, longitude: -73.57932228595018 },
      ],
      [
        { latitude: 45.49538722650027, longitude: -73.57932228595018 },
        { latitude: 45.49533465172625, longitude: -73.57934289831273 },
      ],
    ],
  },
];

export const h96117toH9MensBathroom = [
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

export const h9117toH8WomensBathroom = [
  {
    buildingId: "H",
    connectorType: 7,
    level: 9,
    path: [
      [
        { latitude: 45.497269, longitude: -73.578862 },
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
    connectorType: 7,
    level: 8,
    path: [
      [
        { latitude: 45.49731, longitude: -73.57901 },
        { latitude: 45.497301508502154, longitude: -73.57906181867575 },
      ],
      [
        { latitude: 45.497301508502154, longitude: -73.57906181867575 },
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
];

export const h8WomensBathroomToH9117 = [
  {
    buildingId: "H",
    connectorType: 6,
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
    connectorType: 6,
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

export const h3rdFloorMock = {
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

export const h3rdFloorPoiMock = {
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
};
