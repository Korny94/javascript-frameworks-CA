import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom"
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
