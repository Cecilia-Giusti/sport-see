import React from "react";
import Activities from "../components/Activities";
import Header from "../components/Header";
import "../style/profilePage.css";
import Macros from "../components/Macros";

const ProfilePage = ({
  dataUser,
  dataActivities,
  dataAverage,
  dataPerformance,
}) => {
  return (
    <div className="profilPage__container">
      <Header firstName={dataUser.userInfos.firstName} />
      <div className="profilPage__content">
        <Activities
          dataActivities={dataActivities}
          dataAverage={dataAverage}
          dataPerformance={dataPerformance}
        />
        <Macros macros={dataUser.keyData} />
      </div>
    </div>
  );
};

export default ProfilePage;
