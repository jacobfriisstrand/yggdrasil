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

  // Hvis billedstien ikke findes, returner 404
  if (res.status != 200) return notFound();

  // Tjek om billedstiens kilde starter med "https"
  const checkLogoPath = band.logo.startsWith("https");

  // Hvis ikke, tilføj "localhost:8080/" før billedestien
  const imagePath = checkLogoPath
    ? band.logo
    : `http://localhost:8080/${band.logo}`;

  console.log(band);
  return (
    <div>
      <Image
        priority
        src={imagePath}
        alt={`Image of ${band.name}`}
        width={99999}
        height={500}
        style={{
          objectFit: "cover",
          maxWidth: "100%",
          maxHeight: "500px",
          objectPosition: "center",
        }}
      />
      <h1>{band.name}</h1>
      <p>{band.genre}</p>
      <p>{band.bio}</p>
    </div>
  );
}

export default BandPage;
