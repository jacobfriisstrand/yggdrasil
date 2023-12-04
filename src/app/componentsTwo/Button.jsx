function Button(props) {
  return (
    <button
      onClick={() => {
        props.setDay((theDay) => props.scheduleDay);
      }}
    >
      {props.btnTxt}
    </button>
  );
}

export default Button;
