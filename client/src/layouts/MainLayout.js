import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__header">
        <Header></Header>
      </div>
      <div className="main-layout__body container">{children}</div>
    </div>
  );
};

export default MainLayout