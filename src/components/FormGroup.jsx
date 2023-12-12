import React from "react";

function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={`${classStyle}`}>
      <legend className="text-2xl mb-4">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
