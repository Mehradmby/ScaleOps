import React from "react";
import Header from "../Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <header><Header/></header>
      <main className="container py-4">{children}</main>
      <footer>
      </footer>
    </>
  );
};

export default MainLayout;
