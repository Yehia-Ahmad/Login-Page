import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const closePage = () => {
    props.onClosePageHandler();
  };

  const ctx = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/" onClick={closePage}>
              User
            </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/" onClick={closePage}>
              Admin
            </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={closePage}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
