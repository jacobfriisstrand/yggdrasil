import Link from "next/link";

function Footer() {
  return (
    <div className="relative justify-self-auto border-t-2 border-accent">
      <div className="  my-10 flex justify-between ">
        <div className="w-80">
          <h2 className="font-subheading">A Never-Ending Symphony</h2>
          <p className="font-body text-xs">
            Immerse yourself in the perpetual celebration of sound. Yggdrasil
            transcends time, offering a continuous 24/7, 365-day musical
            journey.
          </p>
        </div>
        <p className="absolute bottom-0 left-0 font-body text-xs">
          {" "}
          &#169; 2023 Yggdrasil
        </p>
        <ul className="flex flex-col  gap-2 text-end font-subheading text-sm">
          <li>
            <Link href="/">Frontpage</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/bands">Acts</Link>
          </li>
          <li>
            <Link href="book">Tickets</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
