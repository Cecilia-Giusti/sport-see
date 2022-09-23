import React, { useEffect, useState } from "react";
import Activities from "../components/Activities";
import Header from "../components/Header";
import "../style/profilePage.css";
import Macros from "../components/Macros";
import getSessions from "../services/sessions";
import getAverageSessions from "../services/averageSessions";
import getPerformances from "../services/performances";
import { getScore } from "../services/users";
import { getUsers } from "../services/users";
import { useParams } from "react-router";
import Error from "../components/Error";

/** Profile page
 * @param {array} dataUser - user data
 * @param {array} dataActivities - activities data
 * @param {array} dataAverage - average sessions data
 * @param {array}   dataPerformance - performance data
 * @param {array} dataScore - score data
 * @return {JSX.Element}
 */
const ProfilePage = () => {
  const [dataUser, setDataUser] = useState(null);
  const userId = useParams().id;
  const [dataSession, setDataSession] = useState(null);
  const [dataAverage, setDataAverage] = useState(null);
  const [dataPerformance, setDataPerformance] = useState(null);
  const [dataScore, setDataScore] = useState(null);

  useEffect(() => {
    getUsers(setDataUser, userId);
    getSessions(setDataSession, userId);
    getAverageSessions(setDataAverage, userId);
    getPerformances(setDataPerformance, userId);
    getScore(setDataScore, userId);
  }, [dataUser, userId]);

  return (
    <div className="section--profilPage">
      {dataUser &&
      dataSession &&
      dataAverage &&
      dataPerformance &&
      dataScore ? (
        <div className="profilPage__container">
          <Header firstName={dataUser.firstName} />
          <div className="profilPage__content">
            <Activities
              dataSession={dataSession}
              dataAverage={dataAverage}
              dataPerformance={dataPerformance}
              dataScore={dataScore}
            />
            <Macros macros={dataUser.keyData} />
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
};

export default ProfilePage;
