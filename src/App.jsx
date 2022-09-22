import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUsers, getScore } from "./services/users";
import getSessions from "./services/sessions";
import getAverageSessions from "./services/averageSessions";
import getPerformances from "./services/performances";
import "./style/app.css";
import ProfilePage from "./pages/ProfilePage";
import Error from "./components/Error";

/** APP
 * @return {JSX.Element}
 */
const App = () => {
  const [dataUser, setDataUser] = useState(null);
  const [dataSession, setDataSession] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [dataScore, setDataScore] = useState(null);

  const userId = useParams().id;

  useEffect(() => {
    getUsers(setDataUser, userId);
    getSessions(setDataSession, userId);
    getAverageSessions(setDataAverage, userId);
    getPerformances(setDataPerformance, userId);
    getScore(setDataScore, userId);
  }, [userId]);

  return (
    <div className="section--profilPage">
      {dataUser &&
      dataSession &&
      dataAverage &&
      dataPerformance &&
      dataScore ? (
        <ProfilePage
          dataUser={dataUser}
          dataActivities={dataSession}
          dataAverage={dataAverage}
          dataPerformance={dataPerformance}
          dataScore={dataScore}
        />
      ) : (
        <Error />
      )}
    </div>
  );
};
export default App;
