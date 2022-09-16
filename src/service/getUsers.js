import axios from "axios";

async function getUsers(setDataUser, dataMocked, userId) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => setDataUser(res.data.user));
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}`)
        .then((res) => setDataUser(res.data.data));
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  }
}

export default getUsers;
