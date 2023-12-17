import { useSpring, animated } from "react-spring";
import { easings } from "react-spring";

function TicketBasket({ children, basketStatus }) {
  const fade = useSpring({
    opacity: basketStatus ? 1 : 0,
    display: basketStatus ? "block" : "none",
    config: {
      easing: easings.easeInElastic,
    },
  });
  const slide = useSpring({
    transform: `translateX(${basketStatus ? 0 : 100}%)`,
    config: {
      easing: easings.easeInElastic,
    },
  });

  return (
    <div className="p-4  lg:sticky lg:top-20">
      <animated.aside
        style={slide}
        className="absolute top-20 z-[1] flex w-screen flex-col justify-between overflow-y-scroll lg:static lg:contents lg:translate-x-0"
      >
        <div className="sticky top-4 h-fit w-fit overflow-y-scroll">
          <h4 className="font-heading text-3xl">Basket</h4>
          {children}
        </div>
      </animated.aside>
      <animated.div
        style={fade}
        className=" fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-90 backdrop-blur-md backdrop-filter md:hidden md:bg-opacity-0 "
      ></animated.div>
    </div>
  );
}

export default TicketBasket;
