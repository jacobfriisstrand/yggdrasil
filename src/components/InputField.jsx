import { useState } from "react";

function InputField({ type, name, placeholder, id, labelText, ...whatever }) {
  const [isFocused, setFocused] = useState(false);
  return (
    <>
      <label htmlFor={id} {...whatever} className="grid w-fit items-center">
        {/* //TODO: Fix at autocompleted inhold i felterne ikke udløser animation */}
        <input
          className="p-4 [grid-area:1/1]"
          onFocus={() => setFocused((prev) => true)}
          onBlur={(e) => setFocused(e.target.value.trim() !== "")}
          type={type}
          name={name}
          id={id}
          {...whatever}
        />
        <div
          className={
            isFocused
              ? `translate-x-[-20px] translate-y-[-20px] scale-75 transition-all duration-100` +
                " " +
                `[grid-area:1/1]`
              : `p-4 transition-all duration-100 [grid-area:1/1]`
          }
        >
          {labelText}
        </div>
      </label>
    </>
  );
}

export default InputField;
