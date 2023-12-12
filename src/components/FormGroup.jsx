import React from "react";

function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={classStyle}>
      <legend className="sr-only">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
