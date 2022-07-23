import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${styles.button} ${props.className}`;
  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
