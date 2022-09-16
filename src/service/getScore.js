import axios from "axios";

async function getScore(setDataScore, dataMocked, userId) {
  if (dataMocked) {
    await axios
      .get("./data/db.json")
      .then((res) => setDataScore(res.data.user.score));
  } else {
    try {
      axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
        if (res.data.data.todayScore) {
          setDataScore(res.data.data.todayScore);
        } else {
          setDataScore(res.data.data.score);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default getScore;
