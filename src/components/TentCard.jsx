import Image from "next/image";

function TentCard({ children, tentType, imageSrc }) {
  return (
    <div className="space-y-4">
      <Image className="aspect-square object-cover" alt={tentType} src={imageSrc} width={1000} height={1000}></Image>
      <h3 className="font-heading text-xl">{tentType}</h3>
      {children}
    </div>
  );
}

export default TentCard;
