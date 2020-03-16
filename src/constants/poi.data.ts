import { POI, POICategory, BuildingId, FloorOverlay } from "../types/main";

export const floorOverlays: FloorOverlay[] = [
  // Test floor, will be deleted
  {
    id: 1,
    buildingId: BuildingId.H,
    level: 1,
    bounds: [
      [45.49772, -73.579507],
      [45.49679, -73.578391]
    ],
    image: require("../../assets/floors/H1.png")
  },
  {
    id: 2,
    buildingId: BuildingId.MB,
    level: 1,
    bounds: [
      [45.4956, -73.57953],
      [45.494916, -73.57846]
    ],
    image: require("../../assets/floors/MB-1.png")
  }
];

export const POIInfo: POI[] = [
  // ------------------
  // LEVEL 8
  // ------------------
  {
    id: null,
    displayName: "Women's Bathroom",
    description: "",
    location: {
      latitude: 45.497239,
      longitude: -73.578674
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Washroom
  },
  {
    id: null,
    displayName: "Men's Bathroom",
    description: "",
    location: {
      latitude: 45.497109,
      longitude: -73.578798
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Washroom
  },
  {
    id: null,
    displayName: "Elevator",
    description: "",
    location: {
      latitude: 45.497314,
      longitude: -73.578751
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Elevator
  },
  {
    id: null,
    displayName: "Escalators Up",
    description: "",
    location: {
      latitude: 45.497267,
      longitude: -73.578869
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Escalator
  },
  {
    id: null,
    displayName: "Escalators Down",
    description: "",
    location: {
      latitude: 45.49731,
      longitude: -73.57901
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Escalator
  },
  {
    id: null,
    displayName: "Stairs 1",
    description: "",
    location: {
      latitude: 45.497354,
      longitude: -73.578713
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Stairs
  },
  {
    id: null,
    displayName: "Stairs 2",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Stairs
  },
  {
    id: null,
    displayName: "Stairs 3",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Stairs
  },
  {
    id: null,
    displayName: "Stairs 4",
    description: "",
    location: {
      latitude: 45.497055,
      longitude: -73.578849
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Stairs
  },
  {
    id: null,
    displayName: "H801",
    description: "",
    location: {
      latitude: 45.497308,
      longitude: -73.578542
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H803",
    description: "",
    location: {
      latitude: 45.497257,
      longitude: -73.578592
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H805.01",
    description: "",
    location: {
      latitude: 45.497229,
      longitude: -73.5786
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H805.02",
    description: "",
    location: {
      latitude: 45.497218,
      longitude: -73.578575
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H805.03",
    description: "",
    location: {
      latitude: 45.497218,
      longitude: -73.578561
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H806.01",
    description: "",
    location: {
      latitude: 45.49718,
      longitude: -73.578765
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H806.02",
    description: "",
    location: {
      latitude: 45.497195,
      longitude: -73.578795
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H806.03",
    description: "",
    location: {
      latitude: 45.49721,
      longitude: -73.578826
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H807",
    description: "",
    location: {
      latitude: 45.497159,
      longitude: -73.578684
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H811",
    description: "",
    location: {
      latitude: 45.497059,
      longitude: -73.578777
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H813",
    description: "",
    location: {
      latitude: 45.49701,
      longitude: -73.578823
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H815",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578855
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H817",
    description: "",
    location: {
      latitude: 45.496942,
      longitude: -73.57887
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H818",
    description: "",
    location: {
      latitude: 45.497018,
      longitude: -73.578881
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H819",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578897
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H820",
    description: "",
    location: {
      latitude: 45.497083,
      longitude: -73.579062
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H821",
    description: "",
    location: {
      latitude: 45.49701,
      longitude: -73.579013
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H822",
    description: "",
    location: {
      latitude: 45.497141,
      longitude: -73.579179
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H823",
    description: "",
    location: {
      latitude: 45.497024,
      longitude: -73.579036
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H825",
    description: "",
    location: {
      latitude: 45.49708,
      longitude: -73.579154
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H827",
    description: "",
    location: {
      latitude: 45.497091,
      longitude: -73.579177
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H829",
    description: "",
    location: {
      latitude: 45.497128,
      longitude: -73.579253
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H831",
    description: "",
    location: {
      latitude: 45.497179,
      longitude: -73.57938
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H832.02",
    description: "",
    location: {
      latitude: 45.497279,
      longitude: -73.579196
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H832.05",
    description: "",
    location: {
      latitude: 45.497274,
      longitude: -73.579151
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H832.06",
    description: "",
    location: {
      latitude: 45.497258,
      longitude: -73.579138
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H835",
    description: "",
    location: {
      latitude: 45.497232,
      longitude: -73.579334
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H837",
    description: "",
    location: {
      latitude: 45.497282,
      longitude: -73.579288
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H839",
    description: "",
    location: {
      latitude: 45.497298,
      longitude: -73.579272
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H841",
    description: "",
    location: {
      latitude: 45.497397,
      longitude: -73.579178
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H843",
    description: "",
    location: {
      latitude: 45.497479,
      longitude: -73.579103
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H845",
    description: "",
    location: {
      latitude: 45.49753,
      longitude: -73.579054
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H847",
    description: "",
    location: {
      latitude: 45.497545,
      longitude: -73.579042
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H849",
    description: "",
    location: {
      latitude: 45.497596,
      longitude: -73.578987
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H851.01",
    description: "",
    location: {
      latitude: 45.497587,
      longitude: -73.57896
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H851.02",
    description: "",
    location: {
      latitude: 45.497599,
      longitude: -73.578935
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H851.03",
    description: "",
    location: {
      latitude: 45.497613,
      longitude: -73.57895
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H853",
    description: "",
    location: {
      latitude: 45.497548,
      longitude: -73.578917
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H854",
    description: "",
    location: {
      latitude: 45.497479,
      longitude: -73.57888
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H855",
    description: "",
    location: {
      latitude: 45.497492,
      longitude: -73.578802
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H857",
    description: "",
    location: {
      latitude: 45.497458,
      longitude: -73.578728
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H859",
    description: "",
    location: {
      latitude: 45.497425,
      longitude: -73.578664
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H860.01",
    description: "",
    location: {
      latitude: 45.497382,
      longitude: -73.578763
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H860.03",
    description: "",
    location: {
      latitude: 45.497399,
      longitude: -73.578797
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H860.04",
    description: "",
    location: {
      latitude: 45.497393,
      longitude: -73.578812
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H860.05",
    description: "",
    location: {
      latitude: 45.497412,
      longitude: -73.578823
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H860.06",
    description: "",
    location: {
      latitude: 45.497403,
      longitude: -73.578831
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H861",
    description: "",
    location: {
      latitude: 45.497413,
      longitude: -73.578637
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H863",
    description: "",
    location: {
      latitude: 45.497365,
      longitude: -73.578517
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H865",
    description: "",
    location: {
      latitude: 45.497358,
      longitude: -73.578483
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H867",
    description: "",
    location: {
      latitude: 45.497343,
      longitude: -73.578478
    },
    buildingId: BuildingId.H,
    level: 8,
    category: POICategory.Classroom
  },

  // ------------------
  // LEVEL 9
  // ------------------
  {
    id: null,
    displayName: "H961-33",
    description: "",
    location: {
      latitude: 45.497513,
      longitude: -73.579157
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-31",
    description: "",
    location: {
      latitude: 45.497541,
      longitude: -73.579136
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-29",
    description: "",
    location: {
      latitude: 45.497565,
      longitude: -73.579111
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-27",
    description: "",
    location: {
      latitude: 45.497589,
      longitude: -73.579087
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-25",
    description: "",
    location: {
      latitude: 45.497614,
      longitude: -73.579061
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-23",
    description: "",
    location: {
      latitude: 45.497638,
      longitude: -73.579039
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-21",
    description: "",
    location: {
      latitude: 45.497659,
      longitude: -73.579019
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-19",
    description: "",
    location: {
      latitude: 45.497658,
      longitude: -73.57901
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-17",
    description: "",
    location: {
      latitude: 45.497643,
      longitude: -73.578983
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-15",
    description: "",
    location: {
      latitude: 45.497629,
      longitude: -73.578953
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-13",
    description: "",
    location: {
      latitude: 45.497612,
      longitude: -73.578921
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-11",
    description: "",
    location: {
      latitude: 45.497592,
      longitude: -73.578882
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-9",
    description: "",
    location: {
      latitude: 45.497575,
      longitude: -73.578849
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-7",
    description: "",
    location: {
      latitude: 45.497562,
      longitude: -73.578817
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-3",
    description: "",
    location: {
      latitude: 45.497526,
      longitude: -73.578751
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-1",
    description: "",
    location: {
      latitude: 45.497508,
      longitude: -73.57871
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-2",
    description: "",
    location: {
      latitude: 45.497512,
      longitude: -73.578743
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-4",
    description: "",
    location: {
      latitude: 45.497526,
      longitude: -73.578772
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-6",
    description: "",
    location: {
      latitude: 45.497544,
      longitude: -73.578805
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-10",
    description: "",
    location: {
      latitude: 45.497554,
      longitude: -73.578849
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-8",
    description: "",
    location: {
      latitude: 45.497514,
      longitude: -73.578916
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-26",
    description: "",
    location: {
      latitude: 45.497591,
      longitude: -73.579067
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-28",
    description: "",
    location: {
      latitude: 45.497565,
      longitude: -73.579092
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961-30",
    description: "",
    location: {
      latitude: 45.49754,
      longitude: -73.579113
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H966",
    description: "",
    location: {
      latitude: 45.497446,
      longitude: -73.578938
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H962",
    description: "",
    location: {
      latitude: 45.497386,
      longitude: -73.578998
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H959",
    description: "",
    location: {
      latitude: 45.497292,
      longitude: -73.578814
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H961",
    description: "",
    location: {
      latitude: 45.49734,
      longitude: -73.578771
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H963",
    description: "",
    location: {
      latitude: 45.497426,
      longitude: -73.578702
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H967",
    description: "",
    location: {
      latitude: 45.497358,
      longitude: -73.578526
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H901-3",
    description: "",
    location: {
      latitude: 45.497336,
      longitude: -73.5785
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H901-1",
    description: "",
    location: {
      latitude: 45.49731,
      longitude: -73.578563
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H905",
    description: "",
    location: {
      latitude: 45.497215,
      longitude: -73.578657
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H907-1",
    description: "",
    location: {
      latitude: 45.4972,
      longitude: -73.578667
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H907-2",
    description: "",
    location: {
      latitude: 45.497164,
      longitude: -73.578708
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H909",
    description: "",
    location: {
      latitude: 45.497112,
      longitude: -73.578741
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H911",
    description: "",
    location: {
      latitude: 45.497164,
      longitude: -73.578708
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H913",
    description: "",
    location: {
      latitude: 45.49706,
      longitude: -73.578789
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H915",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578867
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H917",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578867
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H919",
    description: "",
    location: {
      latitude: 45.496987,
      longitude: -73.578944
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H921",
    description: "",
    location: {
      latitude: 45.49702,
      longitude: -73.579009
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H923",
    description: "",
    location: {
      latitude: 45.497065,
      longitude: -73.579094
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H920",
    description: "",
    location: {
      latitude: 45.497135,
      longitude: -73.579108
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H925-2",
    description: "",
    location: {
      latitude: 45.497042,
      longitude: -73.579145
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H925-1",
    description: "",
    location: {
      latitude: 45.497096,
      longitude: -73.579158
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H927",
    description: "",
    location: {
      latitude: 45.497156,
      longitude: -73.579235
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H929",
    description: "",
    location: {
      latitude: 45.497159,
      longitude: -73.579262
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H931",
    description: "",
    location: {
      latitude: 45.497201,
      longitude: -73.579329
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H933",
    description: "",
    location: {
      latitude: 45.49723,
      longitude: -73.579365
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H937",
    description: "",
    location: {
      latitude: 45.497288,
      longitude: -73.57919
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H930",
    description: "",
    location: {
      latitude: 45.497228,
      longitude: -73.579347
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H932",
    description: "",
    location: {
      latitude: 45.497255,
      longitude: -73.579319
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "H928",
    description: "",
    location: {
      latitude: 45.497169,
      longitude: -73.579215
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Classroom
  },
  {
    id: null,
    displayName: "Women's Bathroom",
    description: "",
    location: {
      latitude: 45.497224,
      longitude: -73.578709
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Washroom
  },
  {
    id: null,
    displayName: "Men's Bathroom",
    description: "",
    location: {
      latitude: 45.497101,
      longitude: -73.578807
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Washroom
  },
  {
    id: null,
    displayName: "Escalator",
    description: "",
    location: {
      latitude: 45.497317,
      longitude: -73.57901
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Escalator
  },
  {
    id: null,
    displayName: "Stairs",
    description: "",
    location: {
      latitude: 45.49706,
      longitude: -73.578846
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Stairs
  },
  {
    id: null,
    displayName: "Elevator",
    description: "",
    location: {
      latitude: 45.497264,
      longitude: -73.578806
    },
    buildingId: BuildingId.H,
    level: 9,
    category: POICategory.Elevator
  }
];
