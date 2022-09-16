import React from "react";
import BarChartProfil from "./BarChartProfil";
import LineChartProfil from "./LineChartProfil";
import RadialBarProfil from "./RadialBarProfil";
import RadarChartProfil from "./RadarChartProfil";
import "../style/activities.css";
import PropTypes from "prop-types";

const Activities = ({
  dataActivities,
  dataAverage,
  dataPerformance,
  dataScore,
}) => {
  return (
    <div className="activities__container">
      <BarChartProfil data={dataActivities} />
      <div className="activities__contents">
        <LineChartProfil data={dataAverage} />
        <RadarChartProfil data={dataPerformance} />
        <RadialBarProfil data={dataScore} />
      </div>
    </div>
  );
};

Activities.propTypes = {
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

export default Activities;
