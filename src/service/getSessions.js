import axios from "axios";
import { DataActivities } from "../Class/DataActivities";

async function getSessions(setDataSession, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataSession(res.data.activity.sessions));
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}/activity`)
        .then((res) => {
          let dataSessionArray = [];
          let data = res.data.data.sessions;

          data.forEach((element) => {
            let newData = new DataActivities(element);
            dataSessionArray.push(newData);
          });
          return setDataSession(dataSessionArray);
        });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getSessions;
