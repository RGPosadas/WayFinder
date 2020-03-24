import { findPathOnFloor } from "../src/services/pathfinding.service";

describe("Find the shortest path on a given floor", () => {
  it("should return the shortest path between two given locations on H 8th floor", () => {
    const shortest = findPathOnFloor(
      1,
      {
        latitude: 45.497613,
        longitude: -73.57895
      },
      {
        latitude: 45.496957,
        longitude: -73.578855
      }
    );
    expect(shortest).toEqual([
      [
        {
          children: [7, 11],
          id: 20,
          location: { latitude: 45.496957, longitude: -73.578855 }
        },
        {
          children: [6, 8, 10, 11, 20],
          id: 7,
          location: {
            latitude: 45.49714193688946,
            longitude: -73.57874800022101
          }
        }
      ],
      [
        {
          children: [6, 8, 10, 11, 20],
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
          children: [2, 5, 9, 19],
          id: 4,
          location: {
            latitude: 45.49756354338001,
            longitude: -73.57899677510714
          }
        }
      ],
      [
        {
          children: [2, 5, 9, 19],
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
    ]);
  });
});

describe("Find the shortest path between two locations where the closest line to these locations is the same", () => {
  it("should return one line only between two locations next to each other", () => {
    const shortest = findPathOnFloor(
      2,
      {
        latitude: 45.497065,
        longitude: -73.579094
      },
      {
        latitude: 45.49702,
        longitude: -73.579009
      }
    );
    expect(shortest).toEqual([
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
    ]);
  });

  it("should return one line only between two locations near the edges of a line", () => {
    const shortest = findPathOnFloor(
      2,
      {
        latitude: 45.497658,
        longitude: -73.57901
      },
      {
        latitude: 45.497508,
        longitude: -73.57871
      }
    );
    expect(shortest).toEqual([
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
    ]);
  });
});

describe("edge", () => {
  it("should return path", () => {
    const shortest = findPathOnFloor(
      2,
      {
        latitude: 45.497658,
        longitude: -73.57901
      },
      {
        latitude: 45.497064,
        longitude: -73.578788
      }
    );
    expect(shortest).toEqual(5);
  });
});
