import axios from "axios";
import { DataScore } from "../Class/DataScore";

async function getScore(setDataScore, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataScore(res.data.user.score));
  } else {
    try {
      axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
        if (res.data.data.todayScore) {
          let data = res.data.data.todayScore;
          let dataUpdate = new DataScore(data);

          let newData = [
            {
              name: `${dataUpdate.name}`,
              score: dataUpdate.score,
              fill: `${dataUpdate.fill}`,
            },
          ];

          return setDataScore(newData);
        } else {
          let data = res.data.data.score;
          let dataUpdate = new DataScore(data);

          let newData = [
            {
              name: `${dataUpdate.name}`,
              score: dataUpdate.score,
              fill: `${dataUpdate.fill}`,
            },
          ];

          return setDataScore(newData);
        }
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getScore;
