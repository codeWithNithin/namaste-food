import React from "react";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const PreLogin = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default PreLogin;
