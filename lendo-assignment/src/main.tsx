import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/app.scss";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { THEME_CONFIG } from "./config";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={THEME_CONFIG}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
