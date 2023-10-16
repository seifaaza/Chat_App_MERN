import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import axios from "axios";

disableReactDevTools();

const localServerUrl = "http://localhost:8080";
const deploymentServerUrl = "";

axios.defaults.baseURL = localServerUrl;
// axios.defaults.baseURL = "https://chatflow-api.onrender.com";
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
