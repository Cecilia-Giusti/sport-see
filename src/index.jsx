import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataMocked } from "./components/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataMocked.Provider value={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<App />} />
        </Routes>
      </BrowserRouter>
    </DataMocked.Provider>
  </React.StrictMode>
);
