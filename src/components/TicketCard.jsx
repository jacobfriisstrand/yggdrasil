import Image from "next/image";

function TicketCard({
  children,
  ticketName,
  price,
  ticketType,
  imageCategory,
}) {
  const imageUrl = `https://source.unsplash.com/random/?${imageCategory}`;

  return (
    <div className="space-y-4 rounded-sm border border-accent bg-foreground-light p-4 shadow-xl ">
      <h4 className="font-subheading text-2xl ">{ticketName}</h4>
      <p>{ticketType}</p>
      <Image
        className="max-h-72 aspect-square object-cover rounded"
        src={imageUrl}
        alt="ticket image"
        width={1000}
        height={1000}
      ></Image>
      <p>{price}</p>
      {children}
    </div>
  );
}

export default TicketCard;
