import React from "react";
import Activities from "../components/Activities";
import Header from "../components/Header";
import "../style/profilePage.css";
import Macros from "../components/Macros";
import PropTypes from "prop-types";

/** Profile page
 * @param {array} dataUser - user data
 * @param {array} dataActivities - activities data
 * @param {array} dataAverage - average sessions data
 * @param {array}   dataPerformance - performance data
 * @param {array} dataScore - score data
 * @return {JSX.Element}
 */
const ProfilePage = ({
  dataUser,
  dataActivities,
  dataAverage,
  dataPerformance,
  dataScore,
}) => {
  return (
    <div className="profilPage__container">
      <Header firstName={dataUser.firstName} />
      <div className="profilPage__content">
        <Activities
          dataActivities={dataActivities}
          dataAverage={dataAverage}
          dataPerformance={dataPerformance}
          dataScore={dataScore}
        />
        <Macros macros={dataUser.keyData} />
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  dataUser: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    keyData: PropTypes.object.isRequired,
  }),
  dataActivities: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number.isRequired,
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
    })
  ),
  dataAverage: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLenght: PropTypes.number.isRequired,
    })
  ),
  dataPerformance: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  dataScore: PropTypes.arrayOf(
    PropTypes.shape({
      fill: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
};

export default ProfilePage;
