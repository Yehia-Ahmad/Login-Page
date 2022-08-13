import React, { useEffect, useReducer, useState } from "react";

import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const reduceEmail = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { val: state.val, isValid: state.val.includes("@") };
  }
  return { val: "", isValid: false };
};

const reducePassword = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const [emailState, disPatchEmail] = useReducer(reduceEmail, {
    val: "",
    isValid: null,
  });

  const [passwordState, disPatchPassword] = useReducer(reducePassword, {
    value: "",
    isValid: null,
  });
  useEffect(() => {
    const handler = setTimeout(() => {
      console.log("Check for validation");
      setIsDisabled(emailState.isValid && passwordState.isValid);
    }, 600);
    return () => {
      console.log("Cleanup");
      clearTimeout(handler);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    disPatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const emailvalidationHandler = () => {
    disPatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    disPatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordvalidationHandler = () => {
    disPatchPassword({ type: "INPUT_BLUR" });
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
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={emailvalidationHandler}
          />
        </div>

        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
