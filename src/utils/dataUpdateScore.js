import { DataTransformScore } from "../Class/DataTransformScore";

/**Modélisation de la donnée score
 * @param {Object} - Données json à traiter
 * @return {Number}
 */
const dataUpdateScore = (data) => {
  let dataUpdate = new DataTransformScore(data);

  let newData = [
    {
      name: `${dataUpdate.name}`,
      score: dataUpdate.score,
      fill: `${dataUpdate.fill}`,
    },
  ];

  return newData;
};

export default dataUpdateScore;
