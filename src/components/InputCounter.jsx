import styles from "./styles/InputCounter.module.css";

function InputCounter({ ticketName, value, setValue }) {
  const totalValue = value;

  return (
    <>
      <label className={styles.visuallyHidden} htmlFor="numberInput" name="numberInput">
        {ticketName}
      </label>
      <button type="button" aria-label="Add 1 ticket" onClick={() => setValue(value + 1)}>
        +
      </button>
      <input type="number" id="numberInput" readOnly value={totalValue} />
      <button type="button" aria-label="Subtract 1 ticket" onClick={() => setValue(value > 0 ? value - 1 : 0)}>
        -
      </button>
    </>
  );
}

export default InputCounter;
