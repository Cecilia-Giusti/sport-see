import React, { useEffect, useState } from "react";
import ProfilePage from "./pages/ProfilePage";
import "./style/app.css";
import dataUpdateAverage from "./utils/dataUpdateAverage";
import dataUpdateSession from "./utils/dataUpdateSession";
import dataUpdatePerformance from "./utils/dataUpdatePerformance";
import getUsers from "./service/getUsers";
import getSessions from "./service/getSessions";
import getAverageSessions from "./service/getAverageSessions";
import getDataKind from "./service/getDataKind";

const App = () => {
  const [dataUser, setDataUser] = useState([]);
  const [dataSession, setDataSession] = useState([]);
  const [dataAverage, setDataAverage] = useState([]);
  const [dataPerformance, setDataPerformance] = useState([]);

  useEffect(() => {
    getUsers(setDataUser);
  }, []);

  useEffect(() => {
    getSessions(setDataSession);
  }, []);

  useEffect(() => {
    getAverageSessions(setDataAverage);
  }, []);

  useEffect(() => {
    getDataKind(setDataPerformance);
  }, []);

  return (
    <div className="section--profilPage">
      {dataUser && dataSession && dataAverage && dataPerformance && (
        <ProfilePage
          dataUser={dataUser.user}
          dataActivities={dataUpdateSession(dataSession)}
          dataAverage={dataUpdateAverage(dataAverage)}
          dataPerformance={dataUpdatePerformance(
            dataPerformance.performance.data
          )}
        />
      )}
    </div>
  );
};
export default App;
