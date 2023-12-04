function TicketCard({ children, ticketName, ticketType, price }) {
  return (
    <div>
      <h2>{ticketName}</h2>
      <p>{ticketType}</p>
      <p>{price}</p>
      {children}
    </div>
  );
}

export default TicketCard;
