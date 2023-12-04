import ScheduleAct from "./ScheduleAct";

function ScheduleDay(props) {
  console.log(props);
  // const data = props.data.Midgard.mon;

  const drilled = () => {
    const day = props.data.Midgard.mon;
    return (
      <div>
        {day.map((band) => (
          <ScheduleAct start={band.start} act={band.act} />
        ))}
      </div>
    );
  };
  return drilled();
}

export default ScheduleDay;
