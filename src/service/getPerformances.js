import axios from "axios";
import { DataPerformance } from "../Class/DataPerformance";

async function getPerformances(setDataPerformance, dataMocked, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let dataSessionArray = [];
      let data = res.data.performance.data;

      data.forEach((element) => {
        let newData = new DataPerformance(element);
        dataSessionArray.push(newData);
      });

      return setDataPerformance(dataSessionArray.reverse());
    });
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}/performance`)
        .then((res) => {
          let dataSessionArray = [];
          let data = res.data.data.data;

          data.forEach((element) => {
            let newData = new DataPerformance(element);
            dataSessionArray.push(newData);
          });

          return setDataPerformance(dataSessionArray.reverse());
        });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getPerformances;
