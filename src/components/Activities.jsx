import React from "react";
import BarChartProfil from "./BarChartProfil";
import LineChartProfil from "./LineChartProfil";
import PieChartProfil from "./PieChartProfil";
import RadarChartProfil from "./RadarChartProfil";
import "../style/activities.css";

const Activities = ({ dataActivities, dataAverage }) => {
  return (
    <div className="activities__container">
      <BarChartProfil data={dataActivities} />
      <div className="activities__contents">
        <LineChartProfil data={dataAverage} />
        <RadarChartProfil />
        <PieChartProfil />
      </div>
    </div>
  );
};

export default Activities;
