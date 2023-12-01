function Input({ type, name, placeholder, id, labelText, ...whatever }) {
  return (
    <div>
      <label htmlFor={id} {...whatever}>
        {labelText}
      </label>
      <input type={type} name={name} id={id} placeholder={placeholder} {...whatever} />
      <p></p>
    </div>
  );
}

export default Input;
