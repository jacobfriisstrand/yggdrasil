function BasketItem({
  ticketName,
  price,
  showTickets,
  selectedArea,
  ticketType,
}) {
  return (
    <div
      className={
        !showTickets ? `hidden` + " " + `text-blue-500` : `text-green-500`
      }
    >
      <div className="grid grid-cols-3 mb-4">
        <h4 className="col-span-2 col-start-1 ">{ticketName}</h4>
        {/* {ticketType === "Festival Ticket" && <p>{selectedArea}</p>} */}
        <p className="col-start-3">{price}</p>
        <span className="col-start-4">DKK</span>
      </div>
    </div>
  );
}

export default BasketItem;
