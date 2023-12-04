import React from "react";
import styles from "./styles/FormGroup.module.css";

function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={styles[classStyle]}>
      <legend>{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
