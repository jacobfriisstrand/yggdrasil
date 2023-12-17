import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-[-12rem] grid items-center text-center text-text-dark">
        <Image
          className="[grid-area:1/1] blur"
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
        <div className="z-10 space-y-10 [grid-area:1/1]">
          <div>
            <h1 className="font-heading text-4xl lg:text-7xl">
              Yggdrasil Music Festival 2024
            </h1>
            <p>Immerse yourself in the Mystic Melodies</p>
          </div>
          <div className="space-x-4">
            <Link className="ring-1 text-xl ring-accent px-4 py-2 rounded hover:bg-accent duration-300" href="/bands">
              LINEUP
            </Link>
            <Link className="ring-1 text-xl ring-accent px-4 py-2 rounded hover:bg-accent duration-300" href="/book">
              TICKETS
            </Link>
            <Link className="ring-1 text-xl ring-accent px-4 py-2 rounded hover:bg-accent duration-300" href="/schedule">
              SCHEDULE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
