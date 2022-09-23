import axios from "axios";
import { User } from "../models/User";
import { Score } from "../models/Score";
import { dataMocked } from "./apiSetting";

/**  Get Data - user
 * @param {function} setDataUser - to update dataUser
 * @param {number} userId - user id
 */
export async function getUsers(setDataUser, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let data = res.data.user;

      let newData = new User(data);
      return setDataUser(newData);
    });
  } else {
    try {
      await axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
        let data = res.data.data;

        let newData = new User(data);
        return setDataUser(newData);
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

/**  Get Data - Score
 * @param {function} setDataPerformance - to update dataScore
 * @param {number} userId - user id
 */
export async function getScore(setDataScore, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let data = res.data.user.score;
      let dataUpdate = new Score(data);

      let newData = [
        {
          name: `${dataUpdate.name}`,
          score: dataUpdate.score,
          fill: `${dataUpdate.fill}`,
        },
      ];

      return setDataScore(newData);
    });
  } else {
    try {
      axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
        if (res.data.data.todayScore) {
          let data = res.data.data.todayScore;
          let dataUpdate = new Score(data);

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
          let dataUpdate = new Score(data);

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
