import axios from "axios";

async function getPerformances(setDataPerformance, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataPerformance(res.data.performance));
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}/performance`)
        .then((res) => setDataPerformance(res.data.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default getPerformances;
