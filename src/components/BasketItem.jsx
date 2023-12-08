import styles from "./styles/BasketItem.module.css";

function BasketItem({ ticketName, price, showTickets, selectedArea, ticketType }) {
  return (
    <div className={!showTickets ? styles.hidden + " " + styles.basketItem : styles.basketItem}>
      <h4>{ticketName}</h4>
      <p>{price} DKK</p>
      {ticketType === "Festival Ticket" && <p>{selectedArea}</p>}
    </div>
  );
}

export default BasketItem;
