import axios from "axios";

async function getScore(setDataScore) {
  await axios.get("./data/db.json").then((res) => setDataScore(res.data.user));
}

export default getScore;
