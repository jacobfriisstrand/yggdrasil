import { useSpring, animated } from "react-spring";
import { easings } from "react-spring";

function TicketBasket({ children, basketStatus }) {
  // Få animation kun til at køre på små skærme
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
    <>
      <animated.div
        style={fade}
        className=" fixed left-0 top-0 h-full w-full bg-background-light bg-opacity-50 backdrop-blur-md backdrop-filter md:hidden"
      ></animated.div>
      <animated.aside
        style={slide}
        className="fixed top-4 flex min-h-[80%] flex-col w-screen justify-between overflow-y-scroll"
      >
        <h4 className="text-2xl">Basket</h4>
        {children}
      </animated.aside>
    </>
  );
}

export default TicketBasket;
