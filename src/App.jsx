import React from "react";
import ProfilePage from "./pages/ProfilePage";
import "./style/app.css";

const App = () => {
  const dataUser = {
    user: {
      id: 18,
      userInfos: {
        firstName: "Cecilia",
        lastName: "Ratorez",
        age: 34,
      },
      score: 0.3,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  };

  const dataActivities = {
    activity: {
      userId: 18,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500,
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390,
        },
      ],
    },
  };

  return (
    <ProfilePage dataUser={dataUser.user} dataActivities={dataActivities} />
  );
};

export default App;
