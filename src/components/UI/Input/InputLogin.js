import React from "react";

import styles from "./InputLogin.module.css";

const InputLogin = (props) => {
  return (
    <div
      className={`${styles.control} ${
        props.inputLoginValdation === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor="props.inputHtmlFor">{props.name}</label>
      <input
        type={props.inputType}
        id={props.inputType}
        value={props.inputValue}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputLogin;
