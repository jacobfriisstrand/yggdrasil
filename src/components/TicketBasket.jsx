import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { easings } from "react-spring";

function TicketBasket({ children, basketStatus }) {
  const slide = useSpring({
    transform: `translateX(${basketStatus ? 0 : 100}%)`,

    config: {
      easing: easings.easeInElastic,
    },
  });

  const fade = useSpring({
    opacity: basketStatus ? 1 : 0,
    display: basketStatus ? "block" : "none",
    config: {
      easing: easings.easeInElastic,
    },
  });

  return (
    <div className="md:sticky md:top-0 p-4">
      <animated.div
        style={fade}
        className=" fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-80 backdrop-blur-md backdrop-filter md:hidden md:bg-opacity-0 md:backdrop-blur-none"
      ></animated.div>
      <animated.aside
        style={slide}
        className="fixed top-20 flex min-h-[80%] w-screen flex-col justify-between overflow-y-scroll md:static md:contents md:translate-x-0"
      >
        <h4 className="text-2xl">Basket</h4>
        {children}
      </animated.aside>
    </div>
  );
}

export default TicketBasket;
