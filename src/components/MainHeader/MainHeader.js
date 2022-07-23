import React from "react";

import Styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = () => {
  return (
    <header className={Styles["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
