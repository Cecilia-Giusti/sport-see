import React from "react";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";
import axios from "axios";
import "./style/App.css";

const App = () => {
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json")
      .then((res) => setDataUser(res.data.user))
      .catch(() => console.log("Error"));
  }, []);

  // Obligation d'ajouter un log avant car problème d'asynchrome
  console.log(dataUser);

  return <ProfilePage dataUser={dataUser} />;
};

export default App;
