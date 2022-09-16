import axios from "axios";
import { DataSessionsAverage } from "../Class/DataSessionsAverage";

async function getAverageSessions(setDataAverage, dataMocked, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let dataAverageArray = [];
      let reponse = res.data["average-session"].sessions;
      reponse.forEach((element) => {
        let newData = new DataSessionsAverage(element);
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
            let newData = new DataSessionsAverage(element);
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
