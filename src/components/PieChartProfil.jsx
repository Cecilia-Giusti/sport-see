import React from "react";
import { PieChart, Pie } from "recharts";

const PieChartProfil = ({ data }) => {
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieChartProfil;
