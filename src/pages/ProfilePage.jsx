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
      {dataUser && <Header firstName={dataUser.userInfos.firstName} />}
      <div className="profilPage__content">
        {dataActivities && dataAverage && (
          <Activities
            dataActivities={dataActivities}
            dataAverage={dataAverage}
            // dataPerformance={dataPerformance}
          />
        )}
        {dataUser && <Macros macros={dataUser.keyData} />}
      </div>
    </div>
  );
};

export default ProfilePage;
