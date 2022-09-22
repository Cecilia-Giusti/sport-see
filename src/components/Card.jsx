import React from "react";
import "../style/card.css";
import PropTypes from "prop-types";

/** Card to macronutrient
 * @param {string} type - type of macronutrient
 * @param {number} number - number of macronutrient
 * @param {string} image - image of macronutrient
 * @return {JSX.Element}
 */
const Card = ({ type, number, image }) => {
  return (
    <div className="macro__card">
      <img className="macro__img" src={image} alt="logo" />
      <div className="macro__content">
        {type === "Calories" ? (
          <p className="macro__number">{number.toLocaleString("en-IN")}kCal</p>
        ) : (
          <p className="macro__number">{number}g</p>
        )}
        <p className="macro__item">{type}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
