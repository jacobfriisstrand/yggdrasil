import styles from "./styles/BasketItem.module.css";

function BasketItem({ ticketName, price }) {
  return (
    <div className={styles.basketItem}>
      <h4>1x {ticketName}</h4>
      <p>{price} DKK</p>

    </div>
  );
}

export default BasketItem;
