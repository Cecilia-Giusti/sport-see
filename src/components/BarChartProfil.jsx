import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import "../style/barChart.css";

const BarChartProfil = ({ data }) => {
  return (
    <div className="barChart">
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 80,
          right: 50,
          left: 45,
          bottom: 20,
        }}
        barSize={7}
        barGap={8}
        tickMargin={16}
        className="barChart__content"
        barCategoryGap="54px"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis
          yAxisId="kilogram"
          tickLine={false}
          orientation="right"
          axisLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickMargin={44}
          minTickGap={27}
          dataKey="kilogram"
          domain={["dataMin - 1", "dataMax + 1"]}
        />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          domain={[0, "dataMax + 50"]}
          orientation="left"
          hide
        />

        <Tooltip />
        <Legend />
        <Bar
          yAxisId="kilogram"
          dataKey="kilogram"
          name="Poids (kg)"
          fill="rgba(40, 45, 48, 1)"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="rgba(230, 0, 0, 1)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default BarChartProfil;
