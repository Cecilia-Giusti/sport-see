import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import "./style/app.css";
import { DataTransformAverage } from "./Class/DataTransformAverage";
import { DataTransformActivities } from "./Class/DataTransformActivities";

const App = () => {
  const dataUser = {
    user: {
      id: 18,
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34,
      },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  };

  const dataActivities = {
    activity: {
      userId: 18,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500,
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390,
        },
      ],
    },
  };

  const dataAverage = {
    "average-session": {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 40,
        },
        {
          day: 3,
          sessionLength: 50,
        },
        {
          day: 4,
          sessionLength: 30,
        },
        {
          day: 5,
          sessionLength: 30,
        },
        {
          day: 6,
          sessionLength: 50,
        },
        {
          day: 7,
          sessionLength: 50,
        },
      ],
    },
  };

  //Appel API !

  // const [dataUserAxios, setDataUserAxios] = useState([]);

  // useEffect(() => {
  //   axios.get("./data/db.json").then((res) => setDataUserAxios(res.data.user));
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`./data/db.json`);
  //       const dataUser = await response.json();
  //       setDataUser(dataUser);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const dataJson = dataAverage["average-session"].sessions;

  /**Modélisation des données des sessions moyennes
   * @param {Object} - Données json à traiter
   * @return {Array}
   */
  const dataUpdateAverage = (dataJson) => {
    let dataAverageArray = [];

    dataJson.forEach((element) => {
      let newData = new DataTransformAverage(element);
      dataAverageArray.push(newData);
    });
    return dataAverageArray;
  };

  const dataActivitiesSession = dataActivities.activity.sessions;

  const DataUpdateSession = (dataActivitiesSession) => {
    let dataSessionArray = [];

    dataActivitiesSession.forEach((element) => {
      let newData = new DataTransformActivities(element);
      dataSessionArray.push(newData);
    });
    return dataSessionArray;
  };

  return (
    <ProfilePage
      dataUser={dataUser.user}
      dataActivities={DataUpdateSession(dataActivitiesSession)}
      dataAverage={dataUpdateAverage(dataJson)}
    />
  );
};
export default App;
