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
    <div className="p-4 md:sticky md:top-20">
      <animated.div
        style={fade}
        className=" fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-80 backdrop-blur-md backdrop-filter md:bg-opacity-0 lg:hidden "
      ></animated.div>
      <animated.aside
        style={slide}
        className="fixed top-20 flex min-h-[80%] w-screen flex-col justify-between overflow-y-scroll lg:static lg:contents lg:translate-x-0"
      >
        <h4 className="text-2xl">Basket</h4>
        {children}
      </animated.aside>
    </div>
  );
}

export default TicketBasket;
