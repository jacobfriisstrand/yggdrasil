import { useState } from "react";

function InputField({ type, name, placeholder, id, labelText, ...whatever }) {
  const [isFocused, setFocused] = useState(false);

  return (
    <>
      <label
        htmlFor={id}
        {...whatever}
        className="grid w-72"
      >
        <input
          className="rounded-sm py-4 pl-2 mb-2 [grid-area:1/1] focus:ring-2 focus:ring-accent"
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(e.target.value.trim() !== "")}
          onChange={() => setFocused(true)}
          type={type}
          name={name}
          id={id}
          {...whatever}
        />
        <div
          className={
            isFocused
              ? `translate-x-[-32px] translate-y-[-8px] scale-75 transition-all duration-100` + // Adjust the duration and ease-out as needed
                " " +
                `[grid-area:1/1]`
              : `p-4 transition-all duration-100 [grid-area:1/1]` // Adjust the duration and ease-out as needed
          }
        >
          {labelText}
        </div>
      </label>
    </>
  );
}

export default InputField;
