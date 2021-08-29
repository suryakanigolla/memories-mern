import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-layout__header"></div>
      <div className="main-layout__body">{children}</div>
    </div>
  );
};

export default MainLayout