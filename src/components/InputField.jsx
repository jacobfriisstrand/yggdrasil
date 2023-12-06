import styles from "./styles/InputField.module.css";
import { useState } from "react";

function InputField({ type, name, placeholder, id, labelText, ...whatever }) {
  const [isFocused, setFocused] = useState(false);
  return (
    <>
      <label className={styles.label} htmlFor={id} {...whatever}>
        <input onFocus={() => setFocused((prev) => true)} onBlur={(e) => setFocused(e.target.value.trim() !== "")} className={styles.input} type={type} name={name} id={id} {...whatever} />
        <div className={isFocused ? styles.focused + " " + styles.labelText : styles.labelText}>{labelText}</div>
      </label>
    </>
  );
}

export default InputField;
