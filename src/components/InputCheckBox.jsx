import styles from "./styles/InputCheckBox.module.css";

function InputCheckBox({ type, id, labelText, price, onChange }) {
  return (
    <div>
      <input className={styles.input + " " + styles.visuallyHidden} onChange={onChange} type={type} id={id} />
      <label className={styles.label} htmlFor={id}>
        <>
          {labelText} {price}
        </>
      </label>
    </div>
  );
}

export default InputCheckBox;
