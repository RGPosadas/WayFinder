import { Campus, CampusId, BuildingId } from "../types/main";

const Campuses: Campus[] = [
  {
    id: CampusId.SGW,
    displayName: "Sir George Williams Campus",
    description: "",
    region: {
      latitude: 45.495376377001215,
      longitude: -73.5777054168284,
      latitudeDelta: 0.013275900094058102,
      longitudeDelta: 0.009238533675670624
    },
    buildings: [
      BuildingId.B,
      BuildingId.CB,
      BuildingId.CI,
      BuildingId.CL,
      BuildingId.D,
      BuildingId.EN,
      BuildingId.ER,
      BuildingId.EV,
      BuildingId.FA,
      BuildingId.FB,
      BuildingId.FG,
      BuildingId.GA,
      BuildingId.GM,
      BuildingId.GN,
      BuildingId.GS,
      BuildingId.H,
      BuildingId.K,
      BuildingId.LB,
      BuildingId.LD,
      BuildingId.LS,
      BuildingId.M,
      BuildingId.MB,
      BuildingId.MI,
      BuildingId.MU,
      BuildingId.P,
      BuildingId.PR,
      BuildingId.Q,
      BuildingId.R,
      BuildingId.RR,
      BuildingId.S,
      BuildingId.SB,
      BuildingId.T,
      BuildingId.TD,
      BuildingId.V,
      BuildingId.VA,
      BuildingId.X,
      BuildingId.Z
    ]
  },
  {
    id: CampusId.Loyola,
    displayName: "Loyola Campus",
    description: "",
    region: {
      latitude: 45.45840118394234,
      latitudeDelta: 0.013102120988982335,
      longitude: -73.63942572847009,
      longitudeDelta: 0.009821243584156036
    },
    buildings: [
      BuildingId.AD,
      BuildingId.BB,
      BuildingId.BH,
      BuildingId.CC,
      BuildingId.CJ,
      BuildingId.DO,
      BuildingId.FC,
      BuildingId.GE,
      BuildingId.HA,
      BuildingId.HB,
      BuildingId.HC,
      BuildingId.HU,
      BuildingId.JR,
      BuildingId.PC,
      BuildingId.PS,
      BuildingId.PT,
      BuildingId.PY,
      BuildingId.QA,
      BuildingId.RA,
      BuildingId.RF,
      BuildingId.SC,
      BuildingId.SH,
      BuildingId.SI,
      BuildingId.SP,
      BuildingId.TA,
      BuildingId.VE,
      BuildingId.VL
    ]
  }
];

/**
 * Get Campus by id.
 * @param id Id of the campus
 */
export const getCampusById = (id: CampusId): Campus => {
  return Campuses.filter(campus => campus.id === id)[0];
};

/**
 * Get All campuses
 */
export const getAllCampuses = (): Campus[] => {
  return Campuses;
};
