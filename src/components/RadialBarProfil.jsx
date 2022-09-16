import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "../style/radialChart.css";
import PropTypes from "prop-types";

const RadialBarProfil = ({ data }) => {
  return (
    <div className="radialChart">
      <h5 className="radialChart__title">Score</h5>
      <h6 className="radialChart__item">
        <span>{data[0].score}%</span> <br />
        de votre objectif
      </h6>
      <RadialBarChart
        width={258}
        height={263}
        data={data}
        style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
        innerRadius={80}
        barSize={10}
        startAngle={200 + 360}
        endAngle={200}
      >
        <circle cx="50%" cy="50%" fill="white" r="75"></circle>
        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
        <RadialBar cornerRadius={5} dataKey={"score"} />
      </RadialBarChart>
    </div>
  );
};

RadialBarProfil.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      fill: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
};

export default RadialBarProfil;
