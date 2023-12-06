import styles from "./styles/GreenCampingInput.module.css";

function GreenCampingInput({ type, id, labelText, price }) {
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

export default GreenCampingInput;
