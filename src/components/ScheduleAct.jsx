function ScheduleAct(props) {
  return (
    <a href={`/bands/${props.act}`}>
      <p>{props.start}</p>
      <p>{props.act}</p>
      <p>{props.genre}</p>
    </a>
  );
}

export default ScheduleAct;
