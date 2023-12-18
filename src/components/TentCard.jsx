import Image from "next/image";

function TentCard({ children, tentType, imageSrc, tentPrice }) {
  return (
    <div className="space-y-4">
      <Image
        className="aspect-square rounded-sm object-cover shadow-md"
        alt={tentType}
        src={imageSrc}
        quality={10}
        width={1000}
        height={1000}
      ></Image>
      <h3 className="font-subheading text-xl">{tentType}</h3>
      <p>{tentPrice} DKK (tent included)</p>
      {children}
    </div>
  );
}

export default TentCard;
