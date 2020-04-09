import { Campus, CampusId, MarkerLocation } from "../types/main";

/**
 * Converts a given campus to a marker location.
 *
 * MarkerLocation is used for the start and end locations for a travel plan,
 * and can be a building, POI or campus.
 *
 * @param campus Campus object to convert to a marker location
 */
export const campusToMarker = (campus: Campus): MarkerLocation => {
  return {
    id: `campus-${campus.id}`,
    displayName: campus.id,
    location: campus.region,
  };
};

/**
 * Get Campus by id.
 * @param id Id of the campus
 */
export const getCampusById = (id: CampusId): Campus => {
  return Campuses.filter((campus) => campus.id === id)[0];
};

/**
 * Get All campuses
 */
export const getAllCampuses = (): Campus[] => {
  return Campuses;
};

const Campuses: Campus[] = [
  {
    id: "SGW",
    displayName: "Sir George Williams Campus",
    description: "",
    region: {
      latitude: 45.495376377001215,
      longitude: -73.5777054168284,
      latitudeDelta: 0.013275900094058102,
      longitudeDelta: 0.009238533675670624,
    },
    buildings: [
      "B",
      "CB",
      "CI",
      "CL",
      "D",
      "EN",
      "ER",
      "EV",
      "FA",
      "FB",
      "FG",
      "GA",
      "GM",
      "GN",
      "GS",
      "H",
      "K",
      "LB",
      "LD",
      "LS",
      "M",
      "MB",
      "MI",
      "MU",
      "P",
      "PR",
      "Q",
      "R",
      "RR",
      "S",
      "SB",
      "T",
      "TD",
      "V",
      "VA",
      "X",
      "Z",
    ],
  },
  {
    id: "Loyola",
    displayName: "Loyola Campus",
    description: "",
    region: {
      latitude: 45.45840118394234,
      latitudeDelta: 0.013102120988982335,
      longitude: -73.63942572847009,
      longitudeDelta: 0.009821243584156036,
    },
    buildings: [
      "AD",
      "BB",
      "BH",
      "CC",
      "CJ",
      "DO",
      "FC",
      "GE",
      "HA",
      "HB",
      "HC",
      "HU",
      "JR",
      "PC",
      "PS",
      "PT",
      "PY",
      "QA",
      "RA",
      "RF",
      "SC",
      "SH",
      "SI",
      "SP",
      "TA",
      "VE",
      "VL",
    ],
  },
];
