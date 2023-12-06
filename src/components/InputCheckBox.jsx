import styles from "./styles/InputCheckBox.module.css";

function InputCheckBox({ type, id, labelText, price }) {
  return (
    <div className={styles.greenCampingInput}>
      <input className={styles.input + " " + styles.visuallyHidden} type={type} id={id} />
      <label className={styles.label} htmlFor={id}>
        <>
          {labelText} {price}
        </>
      </label>
    </div>
  );
}

export default InputCheckBox;
