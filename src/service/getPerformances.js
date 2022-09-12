import axios from "axios";

async function getPerformances(setDataPerformance) {
  await axios.get("./data/db.json").then((res) => setDataPerformance(res.data));
}

export default getPerformances;
