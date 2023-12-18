function BasketItem({
  ticketName,
  price,
  showTickets,
}) {
  return (
    <div className={!showTickets ? `hidden` : "mt-4"}>
      <div className="mb-4 grid grid-cols-3">
        <h4 className="col-span-2 col-start-1">{ticketName}</h4>
        <p className="col-start-3">{price}</p>
        <span className="col-start-4">DKK</span>
      </div>
    </div>
  );
}

export default BasketItem;
