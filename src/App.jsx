import React, { useEffect, useState } from "react";
import getUsers from "./service/getUsers";
import getSessions from "./service/getSessions";
import getAverageSessions from "./service/getAverageSessions";
import getPerformances from "./service/getPerformances";
import "./style/app.css";
import dataUpdateAverage from "./utils/dataUpdateAverage";
import dataUpdateSession from "./utils/dataUpdateSession";
import dataUpdatePerformance from "./utils/dataUpdatePerformance";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataSession, setDataSession] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);

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
    getPerformances(setDataPerformance);
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
