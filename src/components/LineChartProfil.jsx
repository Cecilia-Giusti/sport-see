import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import "../style/graphLine.css";

const LineChartProfil = ({ data }) => {
  return (
    <div>
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{ top: 5, right: 0, left: 10, bottom: 5 }}
        className="graphLine__content"
      >
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 12 }}
          fillOpacity={0.5}
          tickLine={false}
          style={{ transform: "scale(0.9)", transformOrigin: "bottom" }}
          tickMargin={10}
          axisLine={false}
        />

        <YAxis hide={true} dataKey="sessionLenght" />

        <Tooltip wrapperStyle={{ backgroundColor: "#fff" }} />
        <Line
          type="natural"
          dataKey="sessionLenght"
          stroke="white"
          strokeWidth=" 2"
          dot={false}
          opacity={0.8}
        />
      </LineChart>
    </div>
  );
};

export default LineChartProfil;
