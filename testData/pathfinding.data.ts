import { BuildingId, Line, BuildingFloor } from "../src/types/main";
/**
 * This file contains expected results and a fixture for the
 * pathfinding tests.
 */

export const h85103toH815: Line[] = [
  [
    {
      children: [7, 11],
      id: 20,
      location: { latitude: 45.496957, longitude: -73.578855 }
    },
    {
      children: [6, 8, 10, 20],
      id: 7,
      location: {
        latitude: 45.49714193688946,
        longitude: -73.57874800022101
      }
    }
  ],
  [
    {
      children: [6, 8, 10, 20],
      id: 7,
      location: {
        latitude: 45.49714193688946,
        longitude: -73.57874800022101
      }
    },
    {
      children: [7, 13, 15],
      id: 10,
      location: {
        latitude: 45.49720844470052,
        longitude: -73.57888278122401
      }
    }
  ],
  [
    {
      children: [7, 13, 15],
      id: 10,
      location: {
        latitude: 45.49720844470052,
        longitude: -73.57888278122401
      }
    },
    {
      children: [1, 10, 16],
      id: 15,
      location: {
        latitude: 45.497301508502154,
        longitude: -73.57906181867575
      }
    }
  ],
  [
    {
      children: [1, 10, 16],
      id: 15,
      location: {
        latitude: 45.497301508502154,
        longitude: -73.57906181867575
      }
    },
    {
      children: [0, 2, 15, 17],
      id: 1,
      location: {
        latitude: 45.49735509062119,
        longitude: -73.57918419446206
      }
    }
  ],
  [
    {
      children: [0, 2, 15, 17],
      id: 1,
      location: {
        latitude: 45.49735509062119,
        longitude: -73.57918419446206
      }
    },
    {
      children: [1, 3, 4],
      id: 2,
      location: {
        latitude: 45.49743264359791,
        longitude: -73.57911244537091
      }
    }
  ],
  [
    {
      children: [1, 3, 4],
      id: 2,
      location: {
        latitude: 45.49743264359791,
        longitude: -73.57911244537091
      }
    },
    {
      children: [2, 9, 19],
      id: 4,
      location: {
        latitude: 45.49756354338001,
        longitude: -73.57899677510714
      }
    }
  ],
  [
    {
      children: [2, 9, 19],
      id: 4,
      location: {
        latitude: 45.49756354338001,
        longitude: -73.57899677510714
      }
    },
    {
      children: [4, 5],
      id: 19,
      location: { latitude: 45.497613, longitude: -73.57895 }
    }
  ]
];

export const h96119toH911: Line[] = [
  [
    {
      children: [1, 2],
      id: 20,
      location: { latitude: 45.497064, longitude: -73.578788 }
    },
    {
      children: [11, 20],
      id: 1,
      location: { latitude: 45.497154, longitude: -73.578732 }
    }
  ],
  [
    {
      children: [11, 20],
      id: 1,
      location: { latitude: 45.497154, longitude: -73.578732 }
    },
    {
      children: [1, 10, 12],
      id: 11,
      location: { latitude: 45.497223, longitude: -73.578861 }
    }
  ],
  [
    {
      children: [1, 10, 12],
      id: 11,
      location: { latitude: 45.497223, longitude: -73.578861 }
    },
    {
      children: [9, 11, 13],
      id: 10,
      location: { latitude: 45.497322, longitude: -73.579066 }
    }
  ],
  [
    {
      children: [9, 11, 13],
      id: 10,
      location: { latitude: 45.497322, longitude: -73.579066 }
    },
    {
      children: [10, 14, 17],
      id: 13,
      location: { latitude: 45.49739, longitude: -73.579014 }
    }
  ],
  [
    {
      children: [10, 14, 17],
      id: 13,
      location: { latitude: 45.49739, longitude: -73.579014 }
    },
    {
      children: [13, 15],
      id: 14,
      location: { latitude: 45.497454, longitude: -73.579139 }
    }
  ],
  [
    {
      children: [13, 15],
      id: 14,
      location: { latitude: 45.497454, longitude: -73.579139 }
    },
    {
      children: [14, 16],
      id: 15,
      location: { latitude: 45.497489, longitude: -73.57917 }
    }
  ],
  [
    {
      children: [14, 16],
      id: 15,
      location: { latitude: 45.497489, longitude: -73.57917 }
    },
    {
      children: [15, 19],
      id: 16,
      location: { latitude: 45.497651, longitude: -73.579018 }
    }
  ],
  [
    {
      children: [15, 19],
      id: 16,
      location: { latitude: 45.497651, longitude: -73.579018 }
    },
    {
      children: [16, 17],
      id: 19,
      location: { latitude: 45.497658, longitude: -73.57901 }
    }
  ]
];

export const h923toH921: Line[] = [
  [
    {
      children: [2, 3, 19],
      id: 20,
      location: { latitude: 45.49702, longitude: -73.579009 }
    },
    {
      children: [2, 3, 20],
      id: 19,
      location: { latitude: 45.497065, longitude: -73.579094 }
    }
  ]
];

export const h96119toH9611: Line[] = [
  [
    {
      children: [17, 18, 19],
      id: 20,
      location: { latitude: 45.497508, longitude: -73.57871 }
    },
    {
      children: [17, 18, 20],
      id: 19,
      location: { latitude: 45.497658, longitude: -73.57901 }
    }
  ]
];

export const brokenGraph: BuildingFloor[] = [
  {
    id: 2,
    buildingId: BuildingId.H,
    level: 9,
    bounds: null,
    image: null,
    travelNodes: [
      {
        id: 0,
        location: {
          latitude: 45.497348,
          longitude: -73.578553
        },
        children: [1, 12]
      },
      {
        id: 1,
        location: {
          latitude: 45.497154,
          longitude: -73.578732
        },
        children: [2, 11]
      },
      {
        id: 2,
        location: {
          latitude: 45.496979,
          longitude: -73.578896
        },
        children: [1, 3]
      },
      {
        id: 3,
        location: {
          latitude: 45.497081,
          longitude: -73.579109
        },
        children: [2, 4, 5]
      },
      {
        id: 4,
        location: {
          latitude: 45.497042,
          longitude: -73.579145
        },
        children: [3]
      },
      {
        id: 5,
        location: {
          latitude: 45.497146,
          longitude: -73.579202
        },
        children: [3, 6, 9]
      },
      {
        id: 6,
        location: {
          latitude: 45.497219,
          longitude: -73.579361
        },
        children: [5, 7]
      },
      {
        id: 7,
        location: {
          latitude: 45.497283,
          longitude: -73.579301
        },
        children: [6, 8]
      },
      {
        id: 8,
        location: {
          latitude: 45.497277,
          longitude: -73.579226
        },
        children: [7, 9]
      },
      {
        id: 9,
        location: {
          latitude: 45.497233,
          longitude: -73.579128
        },
        children: [5, 8]
      },
      {
        id: 10,
        location: {
          latitude: 45.497322,
          longitude: -73.579066
        },
        children: [11, 13]
      },
      {
        id: 11,
        location: {
          latitude: 45.497223,
          longitude: -73.578861
        },
        children: [1, 10, 12]
      },
      {
        id: 12,
        location: {
          latitude: 45.497414,
          longitude: -73.578683
        },
        children: [0, 11]
      },
      {
        id: 13,
        location: {
          latitude: 45.49739,
          longitude: -73.579014
        },
        children: [14, 17]
      },
      {
        id: 14,
        location: {
          latitude: 45.49739,
          longitude: -73.579014
        },
        children: [13, 15]
      },
      {
        id: 15,
        location: {
          latitude: 45.497489,
          longitude: -73.57917
        },
        children: [14, 16]
      },
      {
        id: 16,
        location: {
          latitude: 45.497651,
          longitude: -73.579018
        },
        children: [15, 17]
      },
      {
        id: 17,
        location: {
          latitude: 45.497651,
          longitude: -73.579018
        },
        children: [13, 16, 18]
      },
      {
        id: 18,
        location: {
          latitude: 45.497504,
          longitude: -73.578713
        },
        children: [17]
      }
    ]
  }
];
