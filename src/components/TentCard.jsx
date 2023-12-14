import Image from "next/image";

function TentCard({ children, tentType, imageSrc, tentPrice }) {
  return (
    <div className="space-y-4">
      <Image className="aspect-square object-cover" alt={tentType} src={imageSrc} width={1000} height={1000}></Image>
      <h3 className="font-subheading text-xl">{tentType}</h3>
      <p>{tentPrice} DKK (tent included)</p>
      {children}
    </div>
  );
}

export default TentCard;
