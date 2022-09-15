import axios from "axios";

async function getPerformances(setDataPerformance, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataPerformance(res.data.performance));
  } else {
    await axios
      .get(`http://localhost:3000/user/${userId}/performance`)
      .then((res) => setDataPerformance(res.data.data));
  }
}

export default getPerformances;
