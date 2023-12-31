function Button(props) {
  return (
    <button
      className="h-[3rem] w-full rounded-sm border-2 border-accent duration-200 px-4 py-2 text-text-light hover:bg-accent hover:text-text-dark  md:h-[3rem] md:w-[8rem]"
      onClick={() => {
        props.setDay((theDay) => props.scheduleDay);
        props.setActive((btnDay) => props.btnTxt);
      }}
    >
      {props.btnTxt}
    </button>
  );
}

export default Button;
