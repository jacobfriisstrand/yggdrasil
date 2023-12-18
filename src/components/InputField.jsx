import { useState } from "react";

function InputField({ type, name, id, labelText }) {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <label htmlFor={id} className="grid w-72">
        <input
          className="mb-2 rounded-md py-4 pl-3 shadow-sm [grid-area:1/1] focus:ring-2 focus:ring-accent"
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value.trim() !== "")}
          onChange={() => setFocused(true)}
          type={type}
          name={name}
          id={id}
          required
        />
        <div
          className={
            isFocused
              ? `translate-x-[-32px] translate-y-[-8px] scale-75 transition-all duration-[100]` +
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
