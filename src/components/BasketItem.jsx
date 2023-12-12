function BasketItem({ ticketName, price, showTickets, selectedArea, ticketType }) {
  return (
    <div className={!showTickets ? `hidden` + " " + `text-blue-500` : `text-green-500`}>
      <div className="flex gap-20">
        <h4>{ticketName}</h4>
        <p>{price} DKK</p>
      </div>
      {ticketType === "Festival Ticket" && <p>{selectedArea}</p>}
    </div>
  );
}

export default BasketItem;
