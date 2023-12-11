import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";
import MobileMenuButton from "./MobileMenuButton";

function NavBar() {
  return (
    <nav className="flex place-items-center justify-between">
      <Link href="/" aria-label="Home">
        <Image src={logo} width={100} height={100} alt="Yggdrasil logo"></Image>
      </Link>
      <MobileMenuButton />
      <div className="absolute left-[0] top-[0] h-full w-full gap-20 bg-green-500 opacity-50"></div>
      <ul className="">
        <div className="grid h-full w-full items-end">
          <div className="space-y-10 p-4 text-end text-4xl [grid-area:1/1]">
            <li className="">
              <Link href="/bands">Acts</Link>
            </li>
            <li className="">
              <Link href="/schedule">Schedule</Link>
            </li>
            <li className="">
              <Link href="/book">Tickets</Link>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
