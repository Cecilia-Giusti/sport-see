import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
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
import { DataMocked } from "./components/AppContext";
import Error from "./components/Error";

const App = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataSession, setDataSession] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [dataScore, setDataScore] = useState(null);
  const dataMocked = useContext(DataMocked);
  const userId = useParams().id;

  useEffect(() => {
    getUsers(setDataUser, dataMocked, userId);
    getSessions(setDataSession, dataMocked, userId);
    getAverageSessions(setDataAverage, dataMocked, userId);
    getPerformances(setDataPerformance, dataMocked, userId);
    getScore(setDataScore, dataMocked, userId);
  }, [dataMocked, userId]);

  return (
    <div className="section--profilPage">
      {dataUser &&
      dataSession &&
      dataAverage &&
      dataPerformance &&
      dataScore ? (
        <ProfilePage
          dataUser={dataUser}
          dataActivities={dataUpdateSession(dataSession)}
          dataAverage={dataUpdateAverage(dataAverage)}
          dataPerformance={dataUpdatePerformance(dataPerformance.data)}
          dataScore={dataUpdateScore(dataScore)}
        />
      ) : (
        <Error />
      )}
    </div>
  );
};
export default App;
