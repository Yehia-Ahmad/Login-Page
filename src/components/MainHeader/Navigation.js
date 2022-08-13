import React from "react";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const closePage = () => {
    props.onClosePageHandler();
  };
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/" onClick={closePage}>
            User
          </a>
        </li>
        <li>
          <a href="/" onClick={closePage}>
            Admin
          </a>
        </li>
        <li>
          <button onClick={closePage}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
