import React from "react";
import Card from "./Card";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";

const Macros = ({ macros }) => {
  return (
    <div className="macros__content">
      <Card type="Calories" number={macros.calorieCount} image={caloriesIcon} />
      <Card type="Proteines" number={macros.proteinCount} image={proteinIcon} />
      <Card
        type="Glucides"
        number={macros.carbohydrateCount}
        image={carbsIcon}
      />
      <Card type="Lipides" number={macros.lipidCount} image={fatIcon} />
    </div>
  );
};

export default Macros;
