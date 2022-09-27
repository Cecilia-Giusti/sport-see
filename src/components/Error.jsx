import React from "react";
import "../style/error.css";

/** Error
 * @return {JSX.Element}
 */
const Error = ({ code }) => {
  return (
    <div className="error_content">
      <h1 className="error_title">Erreur !</h1>
      {code === "ERR_NETWORK" ? (
        <p className="error_body">
          Veuillez patienter cette page est en cours de maintenance
        </p>
      ) : (
        <p className="error_body">
          Cette page n'existe pas veuillez retourner à la page d'accueil
        </p>
      )}
    </div>
  );
};

export default Error;
