import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataMocked, IdUser } from "./components/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataMocked.Provider value={false}>
      <IdUser.Provider value={18}>
        <App />
      </IdUser.Provider>
    </DataMocked.Provider>
  </React.StrictMode>
);
