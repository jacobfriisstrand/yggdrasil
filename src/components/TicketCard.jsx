function TicketCard({ children, ticketName, ticketType, price }) {
  return (
    <div>
      <h4>{ticketName}</h4>
      <p>{price} DKK</p>
      {children}
    </div>
  );
}

export default TicketCard;
