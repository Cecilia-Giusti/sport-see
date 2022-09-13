import React from "react";
import BarChartProfil from "./BarChartProfil";
import LineChartProfil from "./LineChartProfil";
import RadialBarProfil from "./RadialBarProfil";
import RadarChartProfil from "./RadarChartProfil";
import "../style/activities.css";

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

export default Activities;
