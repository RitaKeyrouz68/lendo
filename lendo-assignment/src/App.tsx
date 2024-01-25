import React from "react";
import Layout from "./components/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import AutoInvest from "./pages/auto-invest";

export const App: React.FC = () => (
  <div style={{ height: "100%" }}>
    <Layout>
      <Routes>
        <Route path={ROUTES.AUTO_INVEST} element={<AutoInvest />} />
        <Route path="*" element={<Navigate to={ROUTES.AUTO_INVEST} />} />
      </Routes>
    </Layout>
  </div>
);

export default App;
