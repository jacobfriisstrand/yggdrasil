import styles from "./styles/Input.module.css";

function Input({ type, name, placeholder, id, labelText, ...whatever }) {
  return (
    <>
      <label className={styles.label} htmlFor={id} {...whatever}>
        <input className={styles.input} type={type} name={name} id={id} {...whatever} />
        <div className={styles.labelText}>{labelText}</div>
      </label>
    </>
  );
}

export default Input;
