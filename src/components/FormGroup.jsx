import React from "react";

function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset>
      <legend>{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
