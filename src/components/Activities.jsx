import React from "react";
import BarChartProfil from "./BarChartProfil";
import LineChartProfil from "./LineChartProfil";
import PieChartProfil from "./PieChartProfil";
import RadarChartProfil from "./RadarChartProfil";

const Activities = ({ dataActivities }) => {
  return (
    <div>
      <BarChartProfil data={dataActivities} />
      <div>
        <LineChartProfil />
        <RadarChartProfil />
        <PieChartProfil />
      </div>
    </div>
  );
};

export default Activities;
