import React from "react";
import ReactDOM from "react-dom/client";
import AppList from "./AppListGroup.tsx";
import AppAlert from "./AppAlert.tsx";
import AppBtn from "./AppButton.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppList />
    <AppAlert />
    <AppBtn />
  </React.StrictMode>
);
