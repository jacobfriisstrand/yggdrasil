import styles from "./styles/InputRadio.module.css";

function InputRadio(props) {
  return (
    <>
      <input
        className={styles.input + " " + styles.visuallyHidden}
        type={props.type}
        name="area"
        id={props.id}
        onChange={() => {
          props.setSelectedArea((area) => props.id);
        }}
      />
      <label className={styles.label} htmlFor={props.id}>
        <div className={styles.visuallyHidden}>{props.labelText}</div>
        <h3>{props.areaName}</h3>
        <p>Total spots: {props.totalSpots}</p>
        <p>Available spots: {props.availableSpots}</p>
      </label>
    </>
  );
}

export default InputRadio;
