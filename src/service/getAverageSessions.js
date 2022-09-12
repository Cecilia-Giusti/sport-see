import axios from "axios";

async function getAverageSessions(setDataAverage) {
  await axios
    .get("./data/db.json")
    .then((res) => setDataAverage(res.data["average-session"].sessions));
}

export default getAverageSessions;
