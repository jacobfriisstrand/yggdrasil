import styles from "./styles/Input.module.css";

function Input({ type, name, placeholder, id, labelText, ...whatever }) {
  return (
    <>
      <label className={styles.visuallyHidden} htmlFor={id} {...whatever}>
        {labelText}
      </label>
      <div className={styles.inputContainer}>
        <input className={styles.input} type={type} name={name} id={id} {...whatever} />
        <span className={styles.inputPlaceholder}>{placeholder}</span>
      </div>
    </>
  );
}

export default Input;
