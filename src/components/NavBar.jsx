"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "public/assets/logo.svg";
import MobileMenuButton from "./MobileMenuButton";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { easings } from "react-spring";
import BasketButton from "./BasketButton";

// export const Context = React.createContext();

function NavBar() {
  const [menuStatus, setMenuStatus] = useState(false);

  function toggleMenu() {
    setMenuStatus(!menuStatus); // Toggle the state
  }
  // Få animation kun til at køre på små skærme
  const slide = useSpring({
    transform: `translateX(${menuStatus ? 0 : 100}%)`,
    // display: menuStatus ? "block" : "none",
    config: {
      easing: easings.easeInElastic,
    },
  });

  const fade = useSpring({
    opacity: menuStatus ? 1 : 0,
    config: {
      easing: easings.easeInElastic,
    },
  });

  return (
    <nav className="flex place-items-center justify-between">
      <Link
        onClick={() => setMenuStatus(false)}
        className="z-20"
        href="/"
        aria-label="Home"
      >
        <Image src={logo} width={75} height={75} alt="Yggdrasil logo"></Image>
      </Link>
      <MobileMenuButton toggleMenu={toggleMenu} menuStatus={menuStatus} />
      <BasketButton />
      <div className="contents md:block">
        <animated.div
          style={fade}
          className={`fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-50 backdrop-blur-md backdrop-filter md:hidden ${
            menuStatus ? "z-[10]" : "hidden"
          }`}
        ></animated.div>

        <animated.ul
          style={slide}
          className="fixed bottom-0 right-0 z-20 space-y-10 p-8 text-end text-4xl md:contents md:text-xl"
        >
          <div className="flex flex-col gap-10 md:flex-row">
            <li>
              <Link onClick={() => setMenuStatus(false)} href="/bands">
                Acts
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuStatus(false)} href="/schedule">
                Schedule
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuStatus(false)} href="/book">
                Tickets
              </Link>
            </li>
          </div>
        </animated.ul>
      </div>
    </nav>
  );
}

export default NavBar;
