import axios from "axios";

async function getSessions(setDataSession) {
  await axios
    .get("./data/db.json")
    .then((res) => setDataSession(res.data.activity.sessions));
}

export default getSessions;
