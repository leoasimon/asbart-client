import React from "react";

import "./index.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout__container">
      <div className="vertical-line" />
      <div className="horizontal-line" />
      <div className="intersection" />
      <div className="layout--menu">Menu</div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
