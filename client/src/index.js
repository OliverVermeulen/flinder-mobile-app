// Packages
import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// CSS
import "./css/style.css";
import "./css/home.css";
import "./css/onboarding.css";
import "./css/dashboard.css";
import "./css/profile.css";
import "./css/swipe.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
