import React from "react";
import Activities from "../components/Activities";
import Header from "../components/Header";
import "../style/header.css";
// import Macros from "../components/Macros";

const ProfilePage = ({ dataUser }) => {
  return (
    <div className="container">
      <Header firstName="Cecilia" />
      <section>
        <Activities />
        {/* <Macros macros={dataUser.keyData} /> */}
      </section>
    </div>
  );
};

export default ProfilePage;
