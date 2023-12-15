import { useSpring, animated } from "react-spring";

function MobileMenuButton(props) {
  const menuAnimation1 = useSpring({
    transform: props.menuStatus
      ? "rotate(45deg) translate(10px, 10px)" // Add translation values as needed
      : "rotate(0deg) translate(0px, 0px)", // Provide default translation values
  });

  const menuAnimation2 = useSpring({
    transform: props.menuStatus
      ? "rotate(-45deg) translate(-3px, 3px)" // Add translation values as needed
      : "rotate(0deg) translate(0px, 0px)", // Provide default translation values
  });

  return (
    <button
      aria-expanded={props.menuStatus}
      onClick={props.toggleMenu}
      className="z-20 h-fit w-fit md:hidden"
    >
      <div className="space-y-2">
        <animated.div
          style={menuAnimation1}
          className="h-[3px] w-8 bg-accent"
        ></animated.div>
        <animated.div
          style={menuAnimation2}
          className="h-[3px] w-8 bg-accent"
        ></animated.div>
      </div>
    </button>
  );
}

export default MobileMenuButton;
