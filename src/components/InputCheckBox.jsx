function InputCheckBox({ type, id, labelText, price, onChange }) {
  return (
    <div className="delay-50 flex w-fit place-items-center gap-4 rounded-sm px-4 ring-accent transition ease-in-out hover:ring-2">
      <input type={type} id={id} onChange={onChange} className="peer" />
      <label className="cursor-pointer py-4" htmlFor={id}>
        <>
          {labelText} {price}
        </>
      </label>
    </div>
  );
}

export default InputCheckBox;
