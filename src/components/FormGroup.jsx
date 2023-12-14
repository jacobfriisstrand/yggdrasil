function FormGroup({ children, headline, classStyle }) {
  return (
    <fieldset className={`${classStyle} mb-10`}>
      <legend className="text-3xl mb-10 font-heading">{headline}</legend>
      {children}
    </fieldset>
  );
}

export default FormGroup;
