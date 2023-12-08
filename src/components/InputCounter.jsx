import styles from "./styles/InputCounter.module.css";
import AttendeeInput from "./AttendeeInput";

function InputCounter({ ticketName, value, setValue, setTickets, price, ticketType }) {
  const totalValue = value;

  return (
    <>
      <label className={styles.visuallyHidden} htmlFor="numberInput" name="numberInput">
        {ticketName}
      </label>
      <button
        type="button"
        aria-label={`Add 1 ${ticketName} ticket`}
        onClick={() => {
          setValue(value + 1);
          setTickets((o) =>
            o.concat({
              ticketName,
              id: o.length,
              price: price,
              ticketType: ticketType,
            })
          );
        }}
      >
        +
      </button>
      <input type="number" id="numberInput" readOnly value={totalValue} />
      <button
        type="button"
        aria-label={`Remove 1 ${ticketName} ticket`}
        onClick={() => {
          setValue(value > 0 ? value - 1 : 0);
          setTickets((o) => {
            const indexToRemove = o.findIndex((ticket) => ticket.ticketName === ticketName);
            if (indexToRemove !== -1) {
              return o.filter((_, index) => index !== indexToRemove);
            } else {
              return o;
            }
          });
        }}
      >
        -
      </button>
    </>
  );
}

export default InputCounter;
