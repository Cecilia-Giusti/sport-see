import axios from "axios";

async function getDataKind(setDataPerformance) {
  await axios.get("./data/db.json").then((res) => setDataPerformance(res.data));
}

export default getDataKind;
