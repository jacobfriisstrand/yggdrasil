function MobileMenuButton(props) {
  return (
    <button
      aria-expanded={props.menuStatus}
      onClick={props.toggleMenu}
      className="z-10 h-fit w-fit md:hidden"
    >
      <div className="space-y-2">
        <div className=" h-[3px] w-8 bg-accent"></div>
        <div className=" h-[3px] w-8 bg-accent"></div>
      </div>
    </button>
  );
}

export default MobileMenuButton;
