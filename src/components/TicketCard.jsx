import Image from "next/image";

function TicketCard({ children, ticketName, price, imageCategory }) {
  const imageUrl = `https://source.unsplash.com/random/?${imageCategory}`;

  return (
    <div className="space-y-4 rounded-sm border-2 border-accent p-4">
      <h4 className="text-center text-xl ">{ticketName}</h4>
      <Image
        // className="aspect-[9/16] max-h-72 object-cover"
        src={imageUrl}
        alt="ticket image"
        width={1000}
        height={1000}
        // style={{
        //   width: "100%",
        //   height: "auto",
        // }}
      ></Image>
      <p>{price}</p>
      {children}
    </div>
  );
}

export default TicketCard;
