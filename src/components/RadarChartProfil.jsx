import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import "../style/radarChart.css";

const RadarChartProfil = ({ data }) => {
  return (
    <div className="radarChart">
      <RadarChart
        width={258}
        height={263}
        margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        data={data}
        style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tickLine={false}
          axisLine={false}
          dy={5}
          stroke="#FFF"
          tick={{ fill: "#FFFFFF", fontSize: 12 }}
        />
        <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </div>
  );
};

export default RadarChartProfil;
