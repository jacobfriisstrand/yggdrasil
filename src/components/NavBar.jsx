import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";

function NavBar() {
  return (
    <nav className="flex justify-between place-items-center">
      <Link href="/" aria-label="Home">
        <Image src={logo} width={100} height={100} alt="Yggdrasil logo"></Image>
      </Link>
      <ul className="flex gap-20">
        <li>
          <Link href="/bands">Acts</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/book">Tickets</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
