import React from "react";
import Card from "./Card";
import caloriesIcon from "../assets/calories-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import "../style/macros.css";

const Macros = ({ macros }) => {
  return (
    <aside className="macros__container">
      <Card type="Calories" number={macros.calorieCount} image={caloriesIcon} />
      <Card type="Proteines" number={macros.proteinCount} image={proteinIcon} />
      <Card
        type="Glucides"
        number={macros.carbohydrateCount}
        image={carbsIcon}
      />
      <Card type="Lipides" number={macros.lipidCount} image={fatIcon} />
    </aside>
  );
};

export default Macros;
