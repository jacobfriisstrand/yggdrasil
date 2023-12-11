import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Image
          priority
          quality={30}
          alt="people gathering on concert field"
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
          height={180}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        ></Image>
        <h1 className="font-heading text-4xl">Yggdrasil Music Festival 2024</h1>
        <p>Immerse Yourself in the Mystic Melodies</p>
        <Link href="/bands">LINEUP</Link>
        <Link href="/book">TICKETS</Link>
        <Link href="/schedule">SCHEDULE</Link>
      </section>
      <section>
        <h2>A Never-Ending Symphony</h2>
        <p>
          Immerse yourself in the perpetual celebration of sound. Yggdrasil
          transcends time, offering a continuous 24/7, 365-day musical journey.
        </p>
        <p>
          Whether it&apos;s dawn or dusk, weekday or weekend, the festival
          grounds pulsate with an unceasing rhythm, ensuring there&apos;s always
          a place for you in the eternal dance beneath the branches.
        </p>
      </section>
    </>
  );
}
