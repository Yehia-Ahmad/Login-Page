import React from "react";

import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  return (
    <Card className={styles.login}>
      <form>
        <div className={styles.control}>
          <label>E-Mail</label>
          <input type="emil" id="emil" />
        </div>
        <div className={styles.control}>
          <label>Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.actions}>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
