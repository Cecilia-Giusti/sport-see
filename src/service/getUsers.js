import axios from "axios";
import { DataUser } from "../Class/DataUser";

/**  Get Data - user
 * @param {function} setDataUser - to update dataUser
 * @param {Boolean} dataMocked - if data are mocked
 * @param {number} userId - user id
 */
async function getUsers(setDataUser, dataMocked, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => {
      let data = res.data.user;

      let newData = new DataUser(data);
      return setDataUser(newData);
    });
  } else {
    try {
      await axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
        let data = res.data.data;

        let newData = new DataUser(data);
        return setDataUser(newData);
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getUsers;
