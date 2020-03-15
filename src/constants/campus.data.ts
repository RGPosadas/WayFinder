import { Campus, CampusId } from "../types/main";

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
    buildings: []
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
