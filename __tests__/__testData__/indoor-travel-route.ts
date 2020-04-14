import { POICategory, Line, FloorPath } from "../../src/types/main";

export const mockPOIs: any[] = [
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "H803",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Washroom,
  },
  {
    id: "f5a7d95c-170b-48c9-aac3-e9faafa6033d",
    displayName: "H805",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Washroom,
  },
  {
    id: "Current Location",
    displayName: "Current Location",
    location: {
      latitude: 45.499044,
      longitude: -73.579176,
    },
  },
  {
    id: "8194adef-b60d-43de-8b71-103c318ba901",
    displayName: "H961-13",

    description: "",
    location: {
      latitude: 45.497612,
      longitude: -73.578921,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "ff63d075-8254-4d72-877a-ea83689ee59a",
    displayName: "CC111",

    description: "",
    location: {
      latitude: 45.458241,
      longitude: -73.640234,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "827ffa92-c0d3-44d5-bde1-751af95c675f",
    displayName: "MB1.333", // Need verification

    description: "Exit/Entrance to classroom",
    location: {
      latitude: 45.49527233688608,
      longitude: -73.57920391224633,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Classroom,
  },
];

export const mockBuilding: any[] = [
  {
    id: "GN",
    campusId: "SGW",
    displayName: "Grey Nuns Building",
    location: { latitude: 45.4935790877303, longitude: -73.5766034018584 },
  },
  {
    id: "EV",
    campusId: "SGW",
    displayName: "Engineering, CS and VA Integrated Complex",
    location: { latitude: 45.495621869806875, longitude: -73.57822377879872 },
  },
  {
    id: "MB",
    campusId: "SGW",
    displayName: "John Molson School of Business",
    location: { latitude: 45.49529042487793, longitude: -73.5789511712376 },
  },
  {
    id: "H",
    campusId: "SGW",
    displayName: "Henry F. Hall Building",
    location: { latitude: 45.49729998360628, longitude: -73.57890789359567 },
  },
];

export const sameBuildingSameFloor: Line[][] = [
  [
    [
      { latitude: 45.497482, longitude: -73.579034 },
      { latitude: 45.49743264359791, longitude: -73.57911244537091 },
    ],
    [
      { latitude: 45.49743264359791, longitude: -73.57911244537091 },
      { latitude: 45.49735509062119, longitude: -73.57918419446206 },
    ],
    [
      { latitude: 45.49735509062119, longitude: -73.57918419446206 },
      { latitude: 45.49730597420072, longitude: -73.57923445639382 },
    ],
    [
      { latitude: 45.49730597420072, longitude: -73.57923445639382 },
      { latitude: 45.497253, longitude: -73.579251 },
    ],
  ],
];

export const differentBuildingSameCampus: Line[][] = [
  [
    [
      { latitude: 45.497314, longitude: -73.578751 },
      { latitude: 45.49720844470052, longitude: -73.57888278122401 },
    ],
    [
      { latitude: 45.49720844470052, longitude: -73.57888278122401 },
      { latitude: 45.497301508502154, longitude: -73.57906181867575 },
    ],
    [
      { latitude: 45.497301508502154, longitude: -73.57906181867575 },
      { latitude: 45.49735509062119, longitude: -73.57918419446206 },
    ],
    [
      { latitude: 45.49735509062119, longitude: -73.57918419446206 },
      { latitude: 45.49730597420072, longitude: -73.57923445639382 },
    ],
    [
      { latitude: 45.49730597420072, longitude: -73.57923445639382 },
      { latitude: 45.497253, longitude: -73.579251 },
    ],
  ],
  [
    [
      { latitude: 45.49554740223838, longitude: -73.57927136202986 },
      { latitude: 45.49554740223838, longitude: -73.57927136202986 },
    ],
  ],
];

export const currentLocationAsStart: Line[][] = [
  [
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
      { latitude: 45.49736449098771, longitude: -73.57873593028044 },
    ],
    [
      { latitude: 45.49736449098771, longitude: -73.57873593028044 },
      { latitude: 45.497314, longitude: -73.578751 },
    ],
  ],
];

export const differentCampus: FloorPath[] = [
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
        { latitude: 45.458241, longitude: -73.640234 },
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
      id: "07366816-4ca4-47b5-808f-ba034508bd10",
      level: 8,
      location: { latitude: 45.497267, longitude: -73.578869 },
    },
    level: 8,
    path: [
      [
        { latitude: 45.497267, longitude: -73.578869 },
        { latitude: 45.497314, longitude: -73.578751 },
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
        { latitude: 45.497612, longitude: -73.578921 },
      ],
    ],
  },
];

export const expectedDirectionSteps: string[] = [
  "Take the entrance/exit on floor 1 in the CC building.",
  "Go to the H building.",
  "Take the EscalatorUp on floor 8 to floor 9 in the H building.",
  "Head to your Destination.",
];

export const updatedFloorPaths: FloorPath[] = [
  {
    buildingId: "H",
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
        { latitude: 45.49736449098771, longitude: -73.57873593028044 },
      ],
      [
        { latitude: 45.49736449098771, longitude: -73.57873593028044 },
        { latitude: 45.497314, longitude: -73.578751 },
      ],
    ],
  },
];
