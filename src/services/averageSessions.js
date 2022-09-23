import axios from "axios";
import { SessionsAverage } from "../models/SessionsAverage";
import { dataMocked } from "./apiSetting";

/**  Get Data - Average session
 * @param {function} setDataAverage - to update dataAverage
 * @param {number} userId - user id
 */
async function getAverageSessions(setDataAverage, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let dataAverageArray = [];
      let reponse = res.data["average-session"].sessions;
      reponse.forEach((element) => {
        let newData = new SessionsAverage(element);
        dataAverageArray.push(newData);
      });
      return setDataAverage(dataAverageArray);
    });
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((res) => {
          let dataAverageArray = [];
          let reponse = res.data.data.sessions;
          reponse.forEach((element) => {
            let newData = new SessionsAverage(element);
            dataAverageArray.push(newData);
          });
          return setDataAverage(dataAverageArray);
        });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getAverageSessions;
