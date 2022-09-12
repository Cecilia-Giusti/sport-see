import { DataTransformPerformance } from "../Class/DataTransformPerformance";

/**Modélisation des données des performances
 * @param {Object} - Données json à traiter
 * @return {Array}
 */
const dataUpdatePerformance = (data) => {
  let dataSessionArray = [];

  data.forEach((element) => {
    let newData = new DataTransformPerformance(element);
    dataSessionArray.push(newData);
  });
  return dataSessionArray.reverse();
};

export default dataUpdatePerformance;
