import axios from "axios";

async function getUsers(setDataUser, dataMocked, idUser) {
  if (dataMocked) {
    await axios.get("./data/db.json").then((res) => setDataUser(res.data.user));
  } else {
    await axios
      .get("http://localhost:3000/user/" + idUser)
      .then((res) => setDataUser(res.data.data));
  }
}

export default getUsers;
