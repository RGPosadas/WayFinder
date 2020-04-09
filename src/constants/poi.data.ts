import { POI, POICategory, MarkerLocation, SearchResult } from "../types/main";

/**
 * Converts a given POI into a Marker Location
 *
 * MarkerLocation is used for the start and end locations for a travel plan,
 * and can be a building, POI or campus.
 *
 * @param poi POI to be converted
 */
export const POIToMarker = (poi: POI): MarkerLocation => {
  return poi;
};

/**
 * Converts a given POI into a search result.
 *
 * A search result is a representation of a MarkerLocation used for the
 * autocomplete component, and can be a building, POI or campus.
 *
 * @param poi POI to be converted
 */
export const POIToSearchResult = (poi: POI): SearchResult => {
  return {
    id: poi.id,
    displayName: poi.displayName,
    location: poi.location,
    searchName: poi.displayName,
    extraInformation: `Building: ${poi.buildingId} Level: ${poi.level}`,
  };
};

export const MarkerToSearchResult = (
  markerLocation: MarkerLocation
): SearchResult => {
  return {
    id: markerLocation.id,
    displayName: markerLocation.displayName,
    location: markerLocation.location,
    searchName: markerLocation.displayName,
    extraInformation: "",
  };
};

/**
 * Get all Points of Interest
 */
export const getAllPOI = (): POI[] => {
  return POIInfo;
};

export const POIInfo: POI[] = [
  // ------------------
  // HALL LEVEL 8
  // ------------------
  {
    id: "d24c5c62-3e13-4414-bcfd-77fd1e237d23",
    displayName: "Women's Bathroom",
    description: "",
    location: {
      latitude: 45.497239,
      longitude: -73.578674,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Washroom,
  },
  {
    id: "a70f66dc-dc4d-4b84-b202-e8de5d1c81cf",
    displayName: "Men's Bathroom",
    description: "",
    location: {
      latitude: 45.497109,
      longitude: -73.578798,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Washroom,
  },
  {
    id: "058086ab-58be-4174-a34d-d0dd7e80014f",
    displayName: "Elevator",
    description: "",
    location: {
      latitude: 45.497314,
      longitude: -73.578751,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Elevator,
  },
  {
    id: "07366816-4ca4-47b5-808f-ba034508bd10",
    displayName: "Escalators Up",
    description: "",
    location: {
      latitude: 45.497267,
      longitude: -73.578869,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.EscalatorUp,
  },
  {
    id: "f1b0422b-63f2-471e-919d-21d7cffbaa87",
    displayName: "Escalators Down",
    description: "",
    location: {
      latitude: 45.49731,
      longitude: -73.57901,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.EscalatorDown,
  },
  {
    id: "5454457b-debf-4511-9bd0-6bc61c9177a3",
    displayName: "Exit",
    description: "",
    location: {
      latitude: 45.49731,
      longitude: -73.57901,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Exit,
  },
  {
    id: "8c28ea3e-73ad-46d2-9031-5edec3c83187",
    displayName: "Stairs 1",
    description: "",
    location: {
      latitude: 45.497354,
      longitude: -73.578713,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Stairs,
  },
  {
    id: "c4541028-739d-4651-b9f5-dc4d54054807",
    displayName: "Stairs 2",
    description: "",
    location: {
      latitude: 45.497482,
      longitude: -73.579034,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Stairs,
  },
  {
    id: "f5a7d95c-170b-48c9-aac3-e9faafa6033d",
    displayName: "Stairs 3",
    description: "",
    location: {
      latitude: 45.497253,
      longitude: -73.579251,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Stairs,
  },
  {
    id: "f3cf704f-18b3-471a-b27f-be9175f7a5fa",
    displayName: "Stairs 4",
    description: "",
    location: {
      latitude: 45.497055,
      longitude: -73.578849,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Stairs,
  },
  {
    id: "a9462139-ef45-4d40-b5ca-52cfebcc26d2",
    displayName: "H801",
    description: "",
    location: {
      latitude: 45.497308,
      longitude: -73.578542,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "f6546526-c00d-468b-9c6d-6d42ca44387d",
    displayName: "H803",
    description: "",
    location: {
      latitude: 45.497257,
      longitude: -73.578592,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "5180cae3-9b97-45d8-b647-0a21b9a159e6",
    displayName: "H805.01",
    description: "",
    location: {
      latitude: 45.497229,
      longitude: -73.5786,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "ac600efa-ed9b-48a6-a576-53e3a0588bf1",
    displayName: "H805.02",
    description: "",
    location: {
      latitude: 45.497218,
      longitude: -73.578575,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "f34b033e-cf72-45dc-a90e-055cb9e351f5",
    displayName: "H805.03",
    description: "",
    location: {
      latitude: 45.497218,
      longitude: -73.578561,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "64e3185c-ad0f-4a61-882e-9f3ec7bed8e4",
    displayName: "H806.01",
    description: "",
    location: {
      latitude: 45.49718,
      longitude: -73.578765,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "a633c606-a3ec-4568-82cd-0356db4cc5fa",
    displayName: "H806.02",
    description: "",
    location: {
      latitude: 45.497195,
      longitude: -73.578795,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "99e57c1b-308a-41e2-a5a8-f370f63220c3",
    displayName: "H806.03",
    description: "",
    location: {
      latitude: 45.49721,
      longitude: -73.578826,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "3ac8ea7e-0e62-480a-9a86-0f465b570719",
    displayName: "H807",
    description: "",
    location: {
      latitude: 45.497159,
      longitude: -73.578684,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "87323dd1-e3fc-4562-b844-fdc7bb45ed1f",
    displayName: "H811",
    description: "",
    location: {
      latitude: 45.497059,
      longitude: -73.578777,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "2d618f80-4b64-47b4-bd8d-128ab4dccdf5",
    displayName: "H813",
    description: "",
    location: {
      latitude: 45.49701,
      longitude: -73.578823,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "851fd47f-0df4-4c76-ace4-6d37c63a9d16",
    displayName: "H815",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578855,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "0bef5deb-770a-4250-82d2-1140d8019c83",
    displayName: "H817",
    description: "",
    location: {
      latitude: 45.496942,
      longitude: -73.57887,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "deac3745-4662-4a38-b660-a7989451345c",
    displayName: "H818",
    description: "",
    location: {
      latitude: 45.497018,
      longitude: -73.578881,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "1da76043-0a3d-414f-8f9a-a4386e8fd990",
    displayName: "H819",
    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578897,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "47fb3f6a-6122-4bde-8c6c-a4791894af10",
    displayName: "H820",
    description: "",
    location: {
      latitude: 45.497083,
      longitude: -73.579062,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "e766f54b-8a19-4579-aa72-2e8b740332c8",
    displayName: "H821",
    description: "",
    location: {
      latitude: 45.49701,
      longitude: -73.579013,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "52357cbc-9c36-4b59-8325-ff3c6aa82a84",
    displayName: "H822",
    description: "",
    location: {
      latitude: 45.497141,
      longitude: -73.579179,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "4cc147c9-d597-4110-9638-f582db80d698",
    displayName: "H823",
    description: "",
    location: {
      latitude: 45.497024,
      longitude: -73.579036,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "0e37f222-873e-4ff0-b575-d3686f0e23b5",
    displayName: "H825",
    description: "",
    location: {
      latitude: 45.49708,
      longitude: -73.579154,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "23a1ff92-5990-44fc-9758-27f8bc43c181",
    displayName: "H827",
    description: "",
    location: {
      latitude: 45.497091,
      longitude: -73.579177,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "58f9fd26-ec00-47ec-aa34-e907f3dbbbf6",
    displayName: "H829",
    description: "",
    location: {
      latitude: 45.497128,
      longitude: -73.579253,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "821ba553-fc19-470f-a6ef-f52c9ca75344",
    displayName: "H831",
    description: "",
    location: {
      latitude: 45.497179,
      longitude: -73.57938,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "11251422-f70e-45d3-96ac-a85ddef24a88",
    displayName: "H832.02",
    description: "",
    location: {
      latitude: 45.497279,
      longitude: -73.579196,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "36e72bc6-dc26-4aa9-be0d-fa6aca0fc02d",
    displayName: "H832.05",
    description: "",
    location: {
      latitude: 45.497274,
      longitude: -73.579151,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "7cd8f614-d239-4c89-afd4-8ac91aaf417d",
    displayName: "H832.06",
    description: "",
    location: {
      latitude: 45.497258,
      longitude: -73.579138,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "5772ea65-4059-4550-924f-220376df41be",
    displayName: "H835",
    description: "",
    location: {
      latitude: 45.497232,
      longitude: -73.579334,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "13b28caa-5896-4130-b1cf-8734c0dea317",
    displayName: "H837",
    description: "",
    location: {
      latitude: 45.497282,
      longitude: -73.579288,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "29d27c64-0134-40bc-9aca-41a8312a574d",
    displayName: "H839",
    description: "",
    location: {
      latitude: 45.497298,
      longitude: -73.579272,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "a61a7cfb-5ae3-49e5-97f2-7bb248220bdd",
    displayName: "H841",
    description: "",
    location: {
      latitude: 45.497397,
      longitude: -73.579178,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "47733232-bb96-4cd9-a588-5211dee6ecd1",
    displayName: "H843",
    description: "",
    location: {
      latitude: 45.497479,
      longitude: -73.579103,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "f9233bcc-7ea9-4e80-b960-65bd966c1cfe",
    displayName: "H845",
    description: "",
    location: {
      latitude: 45.49753,
      longitude: -73.579054,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "9a330d9c-c8b8-4682-aa56-6c1598c944cb",
    displayName: "H847",
    description: "",
    location: {
      latitude: 45.497545,
      longitude: -73.579042,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "f23ebbb1-ccdb-4ad9-923f-b3a7c629f27c",
    displayName: "H849",
    description: "",
    location: {
      latitude: 45.497596,
      longitude: -73.578987,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "d55857f8-815a-4d75-8492-cee856b95445",
    displayName: "H851.01",
    description: "",
    location: {
      latitude: 45.497587,
      longitude: -73.57896,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "6572e10d-c845-4673-8259-f3a1461d7fc5",
    displayName: "H851.02",
    description: "",
    location: {
      latitude: 45.497599,
      longitude: -73.578935,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "af7b3f16-597d-438c-9bae-b4327f082a56",
    displayName: "H851.03",
    description: "",
    location: {
      latitude: 45.497613,
      longitude: -73.57895,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "7cc5ad9f-1b74-44b2-98a7-726774c0cf05",
    displayName: "H853",
    description: "",
    location: {
      latitude: 45.497548,
      longitude: -73.578917,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "4f7887d0-a1b1-4987-a5d9-e72ed3afab9b",
    displayName: "H854",
    description: "",
    location: {
      latitude: 45.497479,
      longitude: -73.57888,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "480750a8-3cbf-4bff-8279-dca9089786dc",
    displayName: "H855",
    description: "",
    location: {
      latitude: 45.497492,
      longitude: -73.578802,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "d0cb722c-0219-4e84-8f28-de94d8081f13",
    displayName: "H857",
    description: "",
    location: {
      latitude: 45.497458,
      longitude: -73.578728,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "05f64dbb-9fe1-48a3-a771-40fdaadf090a",
    displayName: "H859",
    description: "",
    location: {
      latitude: 45.497425,
      longitude: -73.578664,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "e941c71f-973a-4739-aedb-acf49f512cff",
    displayName: "H860.01",
    description: "",
    location: {
      latitude: 45.497382,
      longitude: -73.578763,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "1f4c3a6a-312a-475c-b945-3b1dad4129ac",
    displayName: "H860.03",
    description: "",
    location: {
      latitude: 45.497399,
      longitude: -73.578797,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "3748d9f7-19ec-4c83-8051-021fb22d01b2",
    displayName: "H860.04",
    description: "",
    location: {
      latitude: 45.497393,
      longitude: -73.578812,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "a42db2d1-a757-480f-8260-d68701e9cbba",
    displayName: "H860.05",
    description: "",
    location: {
      latitude: 45.497412,
      longitude: -73.578823,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "32d13041-6dec-4236-be75-3f3cbde206e6",
    displayName: "H860.06",
    description: "",
    location: {
      latitude: 45.497403,
      longitude: -73.578831,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "246f2cb5-183d-4c66-81d4-1102b1ce4ab8",
    displayName: "H861",
    description: "",
    location: {
      latitude: 45.497413,
      longitude: -73.578637,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "2ebe71b6-1cc4-4da9-8102-50adb682aa08",
    displayName: "H863",
    description: "",
    location: {
      latitude: 45.497365,
      longitude: -73.578517,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "d0385cbe-80bc-466b-9641-ea2ce9461a13",
    displayName: "H865",
    description: "",
    location: {
      latitude: 45.497358,
      longitude: -73.578483,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },
  {
    id: "858febe6-9b56-46da-a432-5b18431c7fac",
    displayName: "H867",
    description: "",
    location: {
      latitude: 45.497343,
      longitude: -73.578478,
    },
    buildingId: "H",
    level: 8,
    category: POICategory.Classroom,
  },

  // ------------------
  // HALL LEVEL 9
  // ------------------
  {
    id: "266f079d-7033-4546-9724-eb634fea4a22",
    displayName: "H961-33",

    description: "",
    location: {
      latitude: 45.497513,
      longitude: -73.579157,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "f84b6d0f-453a-47b4-8038-3ebe8eaf9e33",
    displayName: "H961-31",

    description: "",
    location: {
      latitude: 45.497541,
      longitude: -73.579136,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "e36e76d3-36c8-468a-b57b-f15daacf7f0d",
    displayName: "H961-29",

    description: "",
    location: {
      latitude: 45.497565,
      longitude: -73.579111,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "8f4f0f48-e43f-43b7-9936-068268eee4ac",
    displayName: "H961-27",

    description: "",
    location: {
      latitude: 45.497589,
      longitude: -73.579087,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "095fa404-bb34-4bcf-9a9e-27ca90afc197",
    displayName: "H961-25",

    description: "",
    location: {
      latitude: 45.497614,
      longitude: -73.579061,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "01a6a388-3ab0-4d60-b2ba-2cf3c8625542",
    displayName: "H961-23",

    description: "",
    location: {
      latitude: 45.497638,
      longitude: -73.579039,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "8b54c148-1288-44f9-9b98-a3bd3238f3e9",
    displayName: "H961-21",

    description: "",
    location: {
      latitude: 45.497659,
      longitude: -73.579019,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "1d774dcc-6fed-4596-bee4-5adead3c1dfc",
    displayName: "H961-19",

    description: "",
    location: {
      latitude: 45.497658,
      longitude: -73.57901,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "4772ab52-ecf7-4711-990d-86b4c53871e4",
    displayName: "H961-17",

    description: "",
    location: {
      latitude: 45.497643,
      longitude: -73.578983,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "6d2a6e24-6d6e-4811-806d-8f26c253172c",
    displayName: "H961-15",

    description: "",
    location: {
      latitude: 45.497629,
      longitude: -73.578953,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
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
    id: "063fdb60-a42b-4434-b2b6-cddedd56d174",
    displayName: "H961-11",

    description: "",
    location: {
      latitude: 45.497592,
      longitude: -73.578882,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "fcc8c9ec-d174-47ce-ac71-3ca8055ae78a",
    displayName: "H961-9",

    description: "",
    location: {
      latitude: 45.497575,
      longitude: -73.578849,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "74e61a00-ebb9-46ad-a9c4-31376a9554e1",
    displayName: "H961-7",

    description: "",
    location: {
      latitude: 45.497562,
      longitude: -73.578817,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "568577e2-581d-4334-87b2-7ae09eb9a292",
    displayName: "H961-3",

    description: "",
    location: {
      latitude: 45.497526,
      longitude: -73.578751,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "378a3778-0f43-4b9c-a8a6-3ec7250a7a9c",
    displayName: "H961-1",

    description: "",
    location: {
      latitude: 45.497508,
      longitude: -73.57871,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "f9691e16-3463-4544-b5ff-b7b490ca762b",
    displayName: "H961-2",

    description: "",
    location: {
      latitude: 45.497512,
      longitude: -73.578743,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "26afc0d3-1674-4c40-97ba-bc0155773adf",
    displayName: "H961-4",

    description: "",
    location: {
      latitude: 45.497526,
      longitude: -73.578772,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "62871210-f24f-4c5b-9d31-0e6111640a94",
    displayName: "H961-6",

    description: "",
    location: {
      latitude: 45.497544,
      longitude: -73.578805,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "519076a6-4414-4ab8-ba85-80459b6971e9",
    displayName: "H961-10",

    description: "",
    location: {
      latitude: 45.497554,
      longitude: -73.578849,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "0979a843-2d4c-4284-9019-ac9fc7641eb5",
    displayName: "H961-8",

    description: "",
    location: {
      latitude: 45.497514,
      longitude: -73.578916,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "31184f57-3719-4c50-9a5c-edcf3316e0b2",
    displayName: "H961-26",

    description: "",
    location: {
      latitude: 45.497591,
      longitude: -73.579067,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "31e9dc15-7637-42c3-a9fd-2b78d91622ce",
    displayName: "H961-28",

    description: "",
    location: {
      latitude: 45.497565,
      longitude: -73.579092,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "4bea728a-a32b-4ea1-a181-db1cedc2a1ec",
    displayName: "H961-30",

    description: "",
    location: {
      latitude: 45.49754,
      longitude: -73.579113,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "fcf24b42-ab75-42d4-9668-f175434b1c47",
    displayName: "H966",

    description: "",
    location: {
      latitude: 45.497446,
      longitude: -73.578938,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "851d0ec5-b4e6-434d-8cba-c01d64092263",
    displayName: "H962",

    description: "",
    location: {
      latitude: 45.497386,
      longitude: -73.578998,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "ef35a6d7-5150-4596-b4b0-2626c3db7aeb",
    displayName: "H959",

    description: "",
    location: {
      latitude: 45.497292,
      longitude: -73.578814,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "79f48da6-9367-4a2b-8d4c-4afdbd74a954",
    displayName: "H961",

    description: "",
    location: {
      latitude: 45.49734,
      longitude: -73.578771,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "e76607aa-d878-4efd-a9c8-5b5b500fd93f",
    displayName: "H963",

    description: "",
    location: {
      latitude: 45.497426,
      longitude: -73.578702,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "e13bac9e-e593-4eac-9f6a-e9c368294e4b",
    displayName: "H965-1",

    description: "",
    location: {
      latitude: 45.497411,
      longitude: -73.578635,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "ddd20a9b-964b-43d3-80c8-8f0d8b2573b1",
    displayName: "H965-3",

    description: "",
    location: {
      latitude: 45.497395,
      longitude: -73.578601,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "d7f892df-089f-4c49-b49c-71134fe84ff6",
    displayName: "H967",

    description: "",
    location: {
      latitude: 45.497358,
      longitude: -73.578526,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "b97817c4-c459-4a88-8bd6-57c23db7917d",
    displayName: "H901-3",

    description: "",
    location: {
      latitude: 45.497336,
      longitude: -73.5785,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "47a9cb04-95a0-4299-b304-62a73bde1052",
    displayName: "H901-1",

    description: "",
    location: {
      latitude: 45.49731,
      longitude: -73.578563,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "b5b7c84f-7546-470a-8377-427488e4f480",
    displayName: "H905",

    description: "",
    location: {
      latitude: 45.497215,
      longitude: -73.578657,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "0fcca97d-17c5-4e8e-8451-66ca5691c082",
    displayName: "H907-1",

    description: "",
    location: {
      latitude: 45.4972,
      longitude: -73.578667,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "d66b48c4-c068-42a8-a0de-2688947f3738",
    displayName: "H907-2",

    description: "",
    location: {
      latitude: 45.497164,
      longitude: -73.578708,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "6a6c030c-5ace-4767-a799-a35a84cef76f",
    displayName: "H909",

    description: "",
    location: {
      latitude: 45.497112,
      longitude: -73.578741,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "39673728-de58-4756-b482-7b74106ac8ed",
    displayName: "H911",

    description: "",
    location: {
      latitude: 45.497064,
      longitude: -73.578788,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "91070dd4-e26b-4f38-bbf7-82f048e32375",
    displayName: "H913",

    description: "",
    location: {
      latitude: 45.497011,
      longitude: -73.578834,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "12063fe2-f655-49f9-a57a-6a8f87202a5a",
    displayName: "H915",

    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578867,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "67b24ede-1182-4e3d-b239-05a0130860f3",
    displayName: "H917",

    description: "",
    location: {
      latitude: 45.496957,
      longitude: -73.578867,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "9f45791d-7ee4-4dcc-b29c-b4857c7590f5",
    displayName: "H919",

    description: "",
    location: {
      latitude: 45.496987,
      longitude: -73.578944,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "0c921c7b-467a-4069-ae74-436ca33fb2b9",
    displayName: "H921",

    description: "",
    location: {
      latitude: 45.49702,
      longitude: -73.579009,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "b5f4461f-fc5e-47dd-9646-dccaaff4b1cc",
    displayName: "H923",

    description: "",
    location: {
      latitude: 45.497065,
      longitude: -73.579094,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "6b545421-ed5c-45ec-888f-f980e65a7ae6",
    displayName: "H920",

    description: "",
    location: {
      latitude: 45.497135,
      longitude: -73.579108,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "388a2c73-ce31-46d8-9f77-675ef48ee3d7",
    displayName: "H925-2",

    description: "",
    location: {
      latitude: 45.497042,
      longitude: -73.579145,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "78d257f6-e93e-4279-9eb4-9921959dcaf8",
    displayName: "H925-1",

    description: "",
    location: {
      latitude: 45.497096,
      longitude: -73.579158,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "6f5cb64d-706d-4807-ac1b-ed01fcbc7602",
    displayName: "H927",

    description: "",
    location: {
      latitude: 45.497156,
      longitude: -73.579235,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "8aa00403-e5dc-4518-b46c-d2f2d0120d0f",
    displayName: "H929",

    description: "",
    location: {
      latitude: 45.497159,
      longitude: -73.579262,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "43ea35e4-93a8-41a6-84ad-68aea94caeb8",
    displayName: "H931",

    description: "",
    location: {
      latitude: 45.497201,
      longitude: -73.579329,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "58722b25-083f-41a6-a7e5-2be4b8c71943",
    displayName: "H933",

    description: "",
    location: {
      latitude: 45.49723,
      longitude: -73.579365,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "befdfa2a-e2be-455d-befa-1dacc53d9ddd",
    displayName: "H937",

    description: "",
    location: {
      latitude: 45.497288,
      longitude: -73.57919,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "63105679-2d75-4c9d-8c1d-84b1fca9eb28",
    displayName: "H930",

    description: "",
    location: {
      latitude: 45.497228,
      longitude: -73.579347,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "a7d0c94a-4902-4292-802e-bd71496cf4d8",
    displayName: "H932",

    description: "",
    location: {
      latitude: 45.497255,
      longitude: -73.579319,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "083f4e24-37be-450b-93db-678d9646c745",
    displayName: "H928",

    description: "",
    location: {
      latitude: 45.497169,
      longitude: -73.579215,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Classroom,
  },
  {
    id: "c069eb38-736e-40e1-b6f9-a06a531c71b0",
    displayName: "Women's Bathroom",

    description: "",
    location: {
      latitude: 45.497224,
      longitude: -73.578709,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Washroom,
  },
  {
    id: "ee1d2161-e599-4181-80eb-226dea97eabe",
    displayName: "Men's Bathroom",

    description: "",
    location: {
      latitude: 45.497101,
      longitude: -73.578807,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Washroom,
  },
  {
    id: "f45af436-f9bb-40b8-97c5-8526ad68ac55",
    displayName: "Escalators Up",

    description: "",
    location: {
      latitude: 45.497317,
      longitude: -73.57901,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.EscalatorUp,
  },
  {
    id: "ad1b69e7-3983-4d2e-91ad-6ef2dd87e908",
    displayName: "Escalators Down",

    description: "",
    location: {
      latitude: 45.497269,
      longitude: -73.578862,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.EscalatorDown,
  },
  {
    id: "5d0f9dd5-35ec-4d95-a478-0dd0b6454693",
    displayName: "Stairs 1",

    description: "",
    location: {
      latitude: 45.497354,
      longitude: -73.578713,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Stairs,
  },
  {
    id: "363649b3-61ea-4138-b8bb-b116412bcabb",
    displayName: "Stairs 2",

    description: "",
    location: {
      latitude: 45.497438,
      longitude: -73.578964,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Stairs,
  },
  {
    id: "17aeeb25-3760-412d-ae0e-978f560c9cde",
    displayName: "Stairs 3",

    description: "",
    location: {
      latitude: 45.497211,
      longitude: -73.579182,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Stairs,
  },
  {
    id: "a15f5890-eb65-4a05-a578-08d4cabe254d",
    displayName: "Stairs 4",

    description: "",
    location: {
      latitude: 45.497055,
      longitude: -73.578849,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Stairs,
  },
  {
    id: "37f6e5b8-0b86-4fed-9d3a-9f5e3a4231bd",
    displayName: "Elevator",

    description: "",
    location: {
      latitude: 45.497314,
      longitude: -73.578751,
    },
    buildingId: "H",
    level: 9,
    category: POICategory.Elevator,
  },
  // ------------------
  // LOYOLA CC1
  // ------------------
  {
    id: "2d23a027-4596-4b9c-8ce2-439e24b0c5bc",
    displayName: "CC1 Exit",

    description: "",
    location: {
      latitude: 45.458116,
      longitude: -73.639914,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Exit,
  },
  {
    id: "77f179c1-4347-47b5-a6b1-c37f5c66bcbd",
    displayName: "CC119",

    description: "",
    location: {
      latitude: 45.458403,
      longitude: -73.640648,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "d38dfd52-23bc-495a-830d-cd32e7d7f594",
    displayName: "CC122",

    description: "",
    location: {
      latitude: 45.458419,
      longitude: -73.64062,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "4e9f0b24-92dc-4783-8153-c1ae398658bf",
    displayName: "CC120",

    description: "",
    location: {
      latitude: 45.458407,
      longitude: -73.640594,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "f2d99335-80cf-40fc-bb48-7189a86536fc",
    displayName: "CC118",

    description: "",
    location: {
      latitude: 45.458373,
      longitude: -73.640502,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "fe802e50-65b8-4971-87ff-1b3c0ef284c7",
    displayName: "CC117",

    description: "",
    location: {
      latitude: 45.458351,
      longitude: -73.640516,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "18b0c8bb-28f7-4e52-bd8d-3e0515678ee7",
    displayName: "CC116",

    description: "",
    location: {
      latitude: 45.458365,
      longitude: -73.640458,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "89faa68e-0664-4dfe-9e3e-659448f0e858",
    displayName: "CC115",

    description: "",
    location: {
      latitude: 45.45834,
      longitude: -73.640472,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "181e2ee4-59f8-4331-9478-1cbcc4f63c67",
    displayName: "CC112",

    description: "",
    location: {
      latitude: 45.458265,
      longitude: -73.640212,
    },
    buildingId: "CC",
    level: 1,
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
    id: "77baa2c8-2be8-4f8a-9a6f-3fa00afd6848",
    displayName: "CC109",

    description: "",
    location: {
      latitude: 45.45822,
      longitude: -73.640191,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "3c77418d-d8c2-4348-bae1-6096810de6de",
    displayName: "CC107",

    description: "",
    location: {
      latitude: 45.458215,
      longitude: -73.640166,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "7f974e7d-74e3-454c-a124-fd0a424c865a",
    displayName: "CC106",

    description: "",
    location: {
      latitude: 45.458213,
      longitude: -73.640096,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "9485ed46-a4df-4d3d-bb9b-03e96878cfd6",
    displayName: "CC101",

    description: "",
    location: {
      latitude: 45.458174,
      longitude: -73.640072,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  {
    id: "ccdbd91b-88c8-4104-b5ff-724bb6de8331",
    displayName: "CC104",

    description: "",
    location: {
      latitude: 45.458182,
      longitude: -73.639984,
    },
    buildingId: "CC",
    level: 1,
    category: POICategory.Classroom,
  },
  // ------------------
  // SGW JMSB
  // ------------------
  {
    id: "106ed45e-c8ec-4d12-aa90-01131e117c2f",
    displayName: "Maisonneuve Exit",

    description: "Exit/Entrance to JMSB and the corner of dM and Guy",
    location: {
      latitude: 45.49554740223838,
      longitude: -73.57927136202986,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Exit,
  },
  {
    id: "7fc86bc6-bc8e-4d2e-a8b0-e6b08d0cdcd9",
    displayName: "Police St. Exit",

    description: "Exit/Entrance to JMSB and the corner of Police St. and Guy",
    location: {
      latitude: 45.495216991097614,
      longitude: -73.5785603480603,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Exit,
  },
  {
    id: "8819617a-ad2e-4090-b929-8ee8c0951dc1",
    displayName: "Men's Bathroom",

    description: "JMBS first 1st floor men's washroom",
    location: {
      latitude: 45.49533465172625,
      longitude: -73.57934289831273,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Washroom,
  },
  {
    id: "988db119-e9ac-450a-8e8c-23a41a17922f",
    displayName: "Women's Bathroom",

    description: "JMBS first 1st floor women's washroom",
    location: {
      latitude: 45.49536097369291,
      longitude: -73.5793187584316,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Washroom,
  },
  {
    id: "57fc8cce-59bf-4574-a0e6-078a0b2f601f",
    displayName: "Security",

    description: "Lost and founc and other related security services",
    location: {
      latitude: 45.4954328890034,
      longitude: -73.57924164492242,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Service,
  },
  {
    id: "cc35c44c-a0e1-45c0-b5ce-1f397dd79d24",
    displayName: "Elevators",

    description: "Fist 1st floor elevators",
    location: {
      latitude: 45.49529657885985,
      longitude: -73.57910082894914,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Elevator,
  },
  {
    id: "c9dc168e-1711-4351-a84f-91b2f78afc1f",
    displayName: "Escalators Down",

    description: "Escalators that leads to tunnel",
    location: {
      latitude: 45.49547821216783,
      longitude: -73.57911271713982,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.EscalatorDown,
  },
  {
    id: "66ff54b3-f49e-4b54-af8b-28edb00c1d2a",
    displayName: "Stairs to 2nd",

    description: "Stairs that only leads to second floor",
    location: {
      latitude: 45.49533532164122,
      longitude: -73.57893166803132,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Stairs,
  },
  {
    id: "ce79cf8b-a536-4aec-b3f9-9e4fcc99ef5e",
    displayName: "Stairs to S1",

    description: "Stairs that can lead to S1 and the tunnel",
    location: {
      latitude: 45.495277037243376,
      longitude: -73.57859236859093,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Stairs,
  },
  {
    id: "938b52f7-caf0-41b7-9b6f-c8239c2b51ee",
    displayName: "Stairs",

    description: "Stairs that leads to any higher floor",
    location: {
      latitude: 45.49517268921914,
      longitude: -73.57866881154786,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Stairs,
  },
  {
    id: "b61d6510-8933-4497-aea4-6a24123170e8",
    displayName: "MB1.210",

    description: "Exit/Entrance to atrium",
    location: {
      latitude: 45.49531181987517,
      longitude: -73.57897190116654,
    },
    buildingId: "MB",
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
  {
    id: "f98956d7-eca8-4633-a196-6a97e5346206",
    displayName: "MB1.666", // Need verification

    description: "Exit/Entrance to classroom",
    location: {
      latitude: 45.49528079752893,
      longitude: -73.57941178344498,
    },
    buildingId: "MB",
    level: 1,
    category: POICategory.Classroom,
  },
];
