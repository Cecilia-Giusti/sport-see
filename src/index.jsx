import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<App />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
