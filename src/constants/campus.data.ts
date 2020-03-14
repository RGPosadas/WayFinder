import { Campus, CampusId } from "../types/main";

const Campuses: Campus[] = [
  {
    id: CampusId.SGW,
    description: "",
    displayName: "Sir George Williams Campus",
    region: {
      latitude: 45.495376377001215,
      longitude: -73.5777054168284,
      latitudeDelta: 0.013275900094058102,
      longitudeDelta: 0.009238533675670624
    },
    buildings: []
  },
  {
    id: CampusId.Loyola,
    displayName: "Loyola",
    description: "",
    region: {
      latitude: 45.45826676273795,
      longitude: -73.63963862881064,
      latitudeDelta: 0.011306376851507594,
      longitudeDelta: 0.007863231003298665
    },
    buildings: []
  }
];

/**
 * Get Campus by id.
 * @param id Id of the campus
 */
export const getCampus = (id: CampusId): Campus => {
  return Campuses.filter(campus => campus.id === id)[0];
};
