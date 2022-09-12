import { DataTransformAverage } from "../Class/DataTransformAverage";

/**Modélisation des données des sessions moyennes
 * @param {Object} - Données json à traiter
 * @return {Array}
 */
const dataUpdateAverage = (data) => {
  let dataAverageArray = [];

  data.forEach((element) => {
    let newData = new DataTransformAverage(element);
    dataAverageArray.push(newData);
  });
  return dataAverageArray;
};
export default dataUpdateAverage;
