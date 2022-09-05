import React from "react";
import "../style/header.css";

const Header = ({ firstName }) => {
  return (
    <div>
      <h1 className="header__title">
        Bonjour <span style={{ color: "#FF0101" }}>{firstName}</span>
      </h1>
      <h2 className="header__slogan">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  );
};

export default Header;
