import Image from "next/image";

function TicketCard({ children, ticketName, ticketType, price }) {
  return (
    <div className="rounded-sm border-2 border-accent p-4 text-center space-y-4">
      <h4 className="text-xl">{ticketName}</h4>
      <Image
        src="https://source.unsplash.com/random/?festival"
        alt="ticket image"
        width={1000}
        height={200}
        style={{
          width: "100%",
          height: "auto",
        }}
      ></Image>
      <p>{price}</p>
      {children}
    </div>
  );
}

export default TicketCard;
