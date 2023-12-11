function BasketItem({ ticketName, price, showTickets, selectedArea, ticketType }) {
  return (
    <div className={!showTickets ? `text-red-500` + " " + `text-blue-500` : `text-green-500`}>
      <h4>{ticketName}</h4>
      <p>{price} DKK</p>
      {ticketType === "Festival Ticket" && <p>{selectedArea}</p>}
    </div>
  );
}

export default BasketItem;
