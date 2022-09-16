import axios from "axios";

async function getAverageSessions(setDataAverage, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataAverage(res.data["average-session"].sessions));
  } else {
    try {
      await axios
        .get(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((res) => setDataAverage(res.data.data.sessions));
    } catch (error) {
      console.log(error);
      console.log(error.response);
      if (error.response.status === 404) {
        return 404;
      }
    }
  }
}

export default getAverageSessions;
