import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import "./style/app.css";
import { DataTransformAverage } from "./Class/DataTransformAverage";
import { DataTransformActivities } from "./Class/DataTransformActivities";
// import { DataTransformPerformance } from "./Class/DataTransformPerformance";
import getUsers from "./service/getUsers";
import getSessions from "./service/getSessions";
import getAverageSessions from "./service/getAverageSessions";

const App = () => {
  const [dataUser, setDataUser] = useState([]);
  const [dataSession, setDataSession] = useState([]);
  const [dataAverage, setDataAverage] = useState([]);

  useEffect(() => {
    getUsers(setDataUser);
  }, []);

  useEffect(() => {
    getSessions(setDataSession);
  }, []);

  useEffect(() => {
    getAverageSessions(setDataAverage);
  }, []);

  // //Performance
  // const [dataPerformance, setDataPerformance] = useState([]);

  // useEffect(() => {
  //   axios.get("./data/db.json").then((res) => setDataPerformance(res.data));
  // }, []);

  // console.log(dataPerformance);

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

  /**Modélisation des données de l'activité journalières
   * @param {Object} - Données json à traiter
   * @return {Array}
   */
  const DataUpdateSession = (dataActivitiesSession) => {
    let dataSessionArray = [];

    dataActivitiesSession.forEach((element) => {
      let newData = new DataTransformActivities(element);
      dataSessionArray.push(newData);
    });
    return dataSessionArray;
  };

  // /**Modélisation des données des performances
  //  * @param {Object} - Données json à traiter
  //  * @return {Array}
  //  */
  // const DataUpdatePerformance = (dataPerformances) => {
  //   let dataSessionArray = [];
  //   let dataPerformanceArray = dataPerformances.data;

  //   dataPerformanceArray.forEach((element) => {
  //     let newData = new DataTransformPerformance(
  //       element,
  //       dataPerformances.kind
  //     );
  //     dataSessionArray.push(newData);
  //   });
  //   return dataSessionArray;
  // };

  return (
    <ProfilePage
      dataUser={dataUser.user}
      dataActivities={DataUpdateSession(dataSession)}
      dataAverage={dataUpdateAverage(dataAverage)}
      // dataPerformance={DataUpdatePerformance(dataPerformance.performance)}
    />
  );
};
export default App;
