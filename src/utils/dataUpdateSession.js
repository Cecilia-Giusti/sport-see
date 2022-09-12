import { DataTransformActivities } from "../Class/DataTransformActivities";

/**Modélisation des données de l'activité journalières
 * @param {Object} - Données json à traiter
 * @return {Array}
 */
const dataUpdateSession = (dataActivitiesSession) => {
  let dataSessionArray = [];

  dataActivitiesSession.forEach((element) => {
    let newData = new DataTransformActivities(element);
    dataSessionArray.push(newData);
  });
  return dataSessionArray;
};
export default dataUpdateSession;
