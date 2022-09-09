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
  const renderColorfulLegendText = (value) => {
    return <span style={{ color: "#74798C" }}>{value}</span>;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barChart__content--toolTip">
          <p className="barChart__item--toolTip">{`${payload[0].value} `}g</p>
          <p className="barChart__item--toolTip">
            {`${payload[1].value} `}Kcal
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="barChart">
      <h4 className="barChart__title">Activité quotidienne</h4>
      <BarChart
        width={835}
        height={320}
        data={data}
        margin={{
          top: 23,
          right: 43,
          left: 43,
          bottom: 20,
        }}
        barSize={7}
        barGap={8}
        tickMargin={16}
        className="barChart__content"
        barCategoryGap={54}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" tickLine={false} tick={{ fill: "#9B9EAC" }} />
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

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: " rgba(196, 196, 196, 0.5)" }}
        />
        <Legend
          marginBottom={10}
          align="right"
          verticalAlign="top"
          iconType="circle"
          iconSize={10}
          height={95}
          formatter={renderColorfulLegendText}
        />
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
