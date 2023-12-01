function FormGroup({ children, headline }) {
  return (
    <fieldset>
      <legend>{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
