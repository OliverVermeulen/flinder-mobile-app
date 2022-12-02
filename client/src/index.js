// Packages
import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// CSS
import "./css/style.css";
import "./css/home.css";
import "./css/onboarding.css";
import "./css/chat.css";
import "./css/profile.css";
import "./css/swipe.css";
import "./css/help.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
