import React, { useContext, useEffect, useState } from "react";
import getUsers from "./service/getUsers";
import getScore from "./service/getScore";
import getSessions from "./service/getSessions";
import getAverageSessions from "./service/getAverageSessions";
import getPerformances from "./service/getPerformances";
import "./style/app.css";
import dataUpdateAverage from "./utils/dataUpdateAverage";
import dataUpdateScore from "./utils/dataUpdateScore";
import dataUpdateSession from "./utils/dataUpdateSession";
import dataUpdatePerformance from "./utils/dataUpdatePerformance";
import ProfilePage from "./pages/ProfilePage";
import axios from "axios";
import { DataMocked, IdUser } from "./components/AppContext";

const App = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataSession, setDataSession] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [dataScore, setDataScore] = useState(null);
  const dataMocked = useContext(DataMocked);
  const idUser = useContext(IdUser);

  useEffect(() => {}, []);

  // console.log(dataUser);

  useEffect(() => {
    getUsers(setDataUser, dataMocked, idUser);
  }, [dataMocked, idUser]);

  useEffect(() => {
    getSessions(setDataSession);
  }, []);

  useEffect(() => {
    getAverageSessions(setDataAverage);
  }, []);

  useEffect(() => {
    getPerformances(setDataPerformance);
  }, []);

  useEffect(() => {
    getScore(setDataScore);
  }, []);

  return (
    <div className="section--profilPage">
      {dataUser &&
        dataSession &&
        dataAverage &&
        dataPerformance &&
        dataScore && (
          <ProfilePage
            dataUser={dataUser}
            dataActivities={dataUpdateSession(dataSession)}
            dataAverage={dataUpdateAverage(dataAverage)}
            dataPerformance={dataUpdatePerformance(
              dataPerformance.performance.data
            )}
            dataScore={dataUpdateScore(dataScore)}
          />
        )}
    </div>
  );
};
export default App;
