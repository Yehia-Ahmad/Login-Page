import React, { useEffect, useState } from "react";

import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Check for validation");
      setIsDisabled(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 600);
    return () => {
      console.log("Cleanup");
      clearTimeout(handler);
    };
  }, [enteredEmail, enteredPassword]);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailvalidationHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordvalidationHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailvalidationHandler}
          />
        </div>

        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordvalidationHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!isDisabled}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
