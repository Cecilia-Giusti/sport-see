import axios from "axios";

async function getAverageSessions(setDataAverage, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataAverage(res.data["average-session"].sessions));
  } else {
    await axios
      .get(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((res) => setDataAverage(res.data.data.sessions));
  }
}

export default getAverageSessions;
