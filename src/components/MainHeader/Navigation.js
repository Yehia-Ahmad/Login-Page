import React from "react";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">User</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
