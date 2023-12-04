import ScheduleAct from "./ScheduleAct";

function ScheduleDay(props) {
  console.log(props);
  const drilled = () => {
    const day = props?.schedule?.Midgard?.mon || [];
    return (
      <div>
        {day.map((band) => (
          <ScheduleAct start={band.start} act={band.act} key={band.act} />
        ))}
      </div>
    );
  };
  return drilled();
}

export default ScheduleDay;
