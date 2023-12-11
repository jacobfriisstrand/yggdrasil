function InputCheckBox({ type, id, labelText, price, onChange }) {
  return (
    <div>
      <input type={type} id={id} />
      <label htmlFor={id}>
        <>
          {labelText} {price}
        </>
      </label>
    </div>
  );
}

export default InputCheckBox;
