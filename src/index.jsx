import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataMocked, UserId } from "./components/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataMocked.Provider value={true}>
      <UserId.Provider value={18}>
        <App />
      </UserId.Provider>
    </DataMocked.Provider>
  </React.StrictMode>
);
