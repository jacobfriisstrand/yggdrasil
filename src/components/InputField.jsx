import { useState } from "react";

function InputField({ type, name, placeholder, id, labelText, ...whatever }) {
  const [isFocused, setFocused] = useState(false);
  return (
    <>
      <label htmlFor={id} {...whatever} className="">
        {/* //TODO: Fix at autocompleted inhold i felterne ikke udløser animation */}
        <input onFocus={() => setFocused((prev) => true)} onBlur={(e) => setFocused(e.target.value.trim() !== "")} type={type} name={name} id={id} {...whatever} />
        <div className={isFocused ? `bg-red-400` + " " + `bg-green-500` : `bg-green-500`}>{labelText}</div>
      </label>
    </>
  );
}

export default InputField;
