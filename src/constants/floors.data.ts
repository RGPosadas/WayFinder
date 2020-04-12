import { BuildingFloor } from "../types/main";

export const buildingFloors: BuildingFloor[] = [
  {
    id: 1,
    buildingId: "H",
    level: 8,
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
        children: [0, 2, 15, 17],
      },
      {
        id: 2,
        location: {
          latitude: 45.49743264359791,
          longitude: -73.57911244537091,
        },
        children: [1, 3, 4],
      },
      {
        id: 3,
        location: {
          latitude: 45.497389166942305,
          longitude: -73.57901186253285,
        },
        children: [2],
      },
      {
        id: 4,
        location: {
          latitude: 45.49756354338001,
          longitude: -73.57899677510714,
        },
        children: [2, 5, 9],
      },
      {
        id: 5,
        location: {
          latitude: 45.497613365120166,
          longitude: -73.57895318921065,
        },
        children: [4],
      },
      {
        id: 6,
        location: {
          latitude: 45.497348275354476,
          longitude: -73.57855018730616,
        },
        children: [7, 9],
      },
      {
        id: 7,
        location: {
          latitude: 45.49714193688946,
          longitude: -73.57874800022101,
        },
        children: [6, 8, 10, 11],
      },
      {
        id: 8,
        location: {
          latitude: 45.49708224429956,
          longitude: -73.57862964774823,
        },
        children: [7],
      },
      {
        id: 9,
        location: {
          latitude: 45.49741149279668,
          longitude: -73.57868966217494,
        },
        children: [4, 6, 13],
      },
      {
        id: 10,
        location: {
          latitude: 45.49720844470052,
          longitude: -73.57888278122401,
        },
        children: [7, 13, 15],
      },
      {
        id: 11,
        location: {
          latitude: 45.496983774888996,
          longitude: -73.57889082785105,
        },
        children: [7, 12],
      },
      {
        id: 12,
        location: { latitude: 45.49719904430793, longitude: -73.579332051234 },
        children: [11, 17],
      },
      {
        id: 13,
        location: {
          latitude: 45.49736449098771,
          longitude: -73.57873593028044,
        },
        children: [9, 10, 14],
      },
      {
        id: 14,
        location: {
          latitude: 45.497409612725065,
          longitude: -73.57882980759597,
        },
        children: [13],
      },
      {
        id: 15,
        location: {
          latitude: 45.497301508502154,
          longitude: -73.57906181867575,
        },
        children: [1, 10, 16],
      },
      {
        id: 16,
        location: { latitude: 45.49733534984642, longitude: -73.5790262794063 },
        children: [15],
      },
      {
        id: 17,
        location: {
          latitude: 45.49730597420072,
          longitude: -73.57923445639382,
        },
        children: [1, 12, 18],
      },
      {
        id: 18,
        location: {
          latitude: 45.49726038236117,
          longitude: -73.57913990852605,
        },
        children: [17],
      },
    ],
    disabledUnfriendly: [],
  },
  {
    id: 2,
    buildingId: "H",
    level: 9,
    bounds: null,
    image: null,
    travelNodes: [
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
        children: [5, 8, 10],
      },
      {
        id: 10,
        location: {
          latitude: 45.497322,
          longitude: -73.579066,
        },
        children: [9, 11, 13],
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
        children: [10, 14, 17],
      },
      {
        id: 14,
        location: {
          latitude: 45.497454,
          longitude: -73.579139,
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
          latitude: 45.497563,
          longitude: -73.578837,
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
    ],
    disabledUnfriendly: [],
  },
  {
    id: 3,
    buildingId: "MB",
    level: 1,
    bounds: [
      [45.495778, -73.5797],
      [45.494802, -73.578297],
    ],
    image: require("../../assets/floors/MB-1.png"),
    travelNodes: [
      {
        id: 0,
        location: {
          latitude: 45.49527159782319,
          longitude: -73.57945036143064,
        },
        children: [1],
      },
      {
        id: 1,
        location: {
          latitude: 45.49538722650027,
          longitude: -73.57932228595018,
        },
        children: [0, 11],
      },
      {
        id: 2,
        location: {
          latitude: 45.495498624635324,
          longitude: -73.57925221323967,
        },
        children: [3, 11],
      },
      {
        id: 3,
        location: {
          latitude: 45.49536466482581,
          longitude: -73.57903562486172,
        },
        children: [2, 4, 6],
      },
      {
        id: 4,
        location: {
          latitude: 45.495250211192285,
          longitude: -73.57914458960295,
        },
        children: [3, 5],
      },
      {
        id: 5,
        location: {
          latitude: 45.49527089276958,
          longitude: -73.57918918132782,
        },
        children: [4],
      },
      {
        id: 6,
        location: {
          latitude: 45.49536913015795,
          longitude: -73.57889883220196,
        },
        children: [3, 12],
      },
      {
        id: 7,
        location: {
          latitude: 45.49522388917384,
          longitude: -73.57863295823336,
        },
        children: [8, 9, 12, 14],
      },
      {
        id: 8,
        location: {
          latitude: 45.49526219710733,
          longitude: -73.57857998460531,
        },
        children: [7],
      },
      {
        id: 9,
        location: {
          latitude: 45.495190281578864,
          longitude: -73.57858702540398,
        },
        children: [7],
      },
      {
        id: 10,
        location: {
          latitude: 45.49516513462401,
          longitude: -73.57874594628811,
        },
        children: [7],
      },
      {
        id: 11,
        location: {
          latitude: 45.495454035943894,
          longitude: -73.57927702759403,
        },
        children: [1, 2],
      },
      {
        id: 12,
        location: {
          latitude: 45.495319,
          longitude: -73.578834,
        },
        children: [6, 7, 13],
      },
      {
        id: 13,
        location: {
          latitude: 45.495291,
          longitude: -73.578866,
        },
        children: [12, 14],
      },
      {
        id: 14,
        location: {
          latitude: 45.495197,
          longitude: -73.578708,
        },
        children: [7, 10, 13],
      },
    ],
    disabledUnfriendly: [7, 12],
  },
  {
    id: 4,
    buildingId: "CC",
    level: 1,
    bounds: [
      [45.458639, -73.640921],
      [45.457962, -73.639775],
    ],
    image: require("../../assets/floors/CC1.png"),
    travelNodes: [
      {
        id: 0,
        location: {
          latitude: 45.45844095574591,
          longitude: -73.64070363342762,
        },
        children: [1],
      },
      {
        id: 1,
        location: {
          latitude: 45.45836076219479,
          longitude: -73.64047598093748,
        },
        children: [0, 2],
      },
      {
        id: 2,
        location: {
          latitude: 45.45825399406411,
          longitude: -73.64020708948374,
        },
        children: [1, 3],
      },
      {
        id: 3,
        location: {
          latitude: 45.458161806440636,
          longitude: -73.63997407257557,
        },
        children: [2, 4],
      },
      {
        id: 4,
        location: {
          latitude: 45.45813687812879,
          longitude: -73.6399157345295,
        },
        children: [3],
      },
    ],
    disabledUnfriendly: [],
  },
];
