import axios from "axios";

async function getUsers(setDataUser) {
  await axios.get("./data/db.json").then((res) => setDataUser(res.data));
}

export default getUsers;
