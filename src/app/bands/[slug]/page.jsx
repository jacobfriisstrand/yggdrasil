import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:8080/bands");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

async function BandPage({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:8080/bands/${slug}`);

  const band = await res.json();

  if (res.status != 200) return notFound();

  // Tjek om billedstiens kilde starter med "https"
  const checkLogoPath = band.logo.startsWith("https");

  // Hvis ikke, tilføj "localhost:8080/" før billedestien
  const imagePath = checkLogoPath ? band.logo : `http://localhost:8080/${band.logo}`;

  return (
    <div>
      <Image src={imagePath} alt={`Image of ${band.name}`} width={1920} height={500} objectFit="cover" />
      <h1>{band.name}</h1>
      <p>{band.genre}</p>
      <p>{band.bio}</p>
      {/* Brug den opdaterede billedsti i <Image> komponenten */}
    </div>
  );
}

export default BandPage;
