"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";
import MobileMenuButton from "./MobileMenuButton";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { easings } from "react-spring";

function NavBar() {
  const [menuStatus, setMenuStatus] = useState(false);

  function toggleMenu() {
    setMenuStatus(!menuStatus); // Toggle the state
  }

  function viewPortWidth() {
    if (window.innerWidth > 768) {
      setMenuStatus(true);
    }
  }

  // Få animation kun til at køre på små skærme
  const slide = useSpring({
    transform: `translateX(${menuStatus ? 0 : 100}%)`,
    config: {
      easing: easings.easeInElastic,
    },
  });

  return (
    <nav className="flex place-items-center justify-between">
      <Link className="z-10" href="/" aria-label="Home">
        <Image src={logo} width={75} height={75} alt="Yggdrasil logo"></Image>
      </Link>
      <MobileMenuButton toggleMenu={toggleMenu} menuStatus={menuStatus} />
      <div className="contents md:block">
        <animated.div
          style={slide}
          className="absolute left-0 top-0 h-full w-full  bg-background-light bg-opacity-50 backdrop-blur-lg backdrop-filter"
        ></animated.div>
        <animated.ul
          style={slide}
          className="absolute bottom-0 right-0 space-y-10  p-8 text-end text-4xl md:block"
        >
          <li>
            <Link href="/bands">Acts</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/book">Tickets</Link>
          </li>
        </animated.ul>
      </div>
    </nav>
  );
}

export default NavBar;
