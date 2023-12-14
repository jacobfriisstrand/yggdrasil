function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={`${classStyle}`}>
      <legend className="text-3xl mb-4 font-heading">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
