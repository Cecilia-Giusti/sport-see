import axios from "axios";

async function getSessions(setDataSession, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataSession(res.data.activity.sessions));
  } else {
    await axios
      .get(`http://localhost:3000/user/${userId}/activity`)
      .then((res) => setDataSession(res.data.data.sessions));
  }
}

export default getSessions;
