import React from "react";

import Styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={Styles["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation onClosePageHandler={props.onClosePage} />
    </header>
  );
};

export default MainHeader;
