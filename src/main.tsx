import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./app/styles/bootstrap.scss";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
