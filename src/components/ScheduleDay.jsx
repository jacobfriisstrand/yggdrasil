import ScheduleAct from "./ScheduleAct";

function ScheduleDay(props) {
  const drilled = () => {
    // const day = props?.schedule?.Midgard?.mon || [];
    const midgard = props?.schedule?.Midgard[props.day] || [];
    const jotunheim = props?.schedule?.Jotunheim[props.day] || [];
    const vanaheim = props?.schedule?.Vanaheim[props.day] || [];

    //TODO: condition der siger at det starter på mon
    return (
      <div className="acts">
        <div>
          <h3>Midgard</h3>
          {midgard.map((band) => (
            <ScheduleAct start={band.start} act={band.act} key={band.end} genre={band.genre} />
          ))}
        </div>
        <div>
          <h3>Jotunheim</h3>
          {jotunheim.map((band) => (
            <ScheduleAct start={band.start} act={band.act} key={band.end} />
          ))}
        </div>
        <div>
          <h3>Vanaheim</h3>
          {vanaheim.map((band) => (
            <ScheduleAct start={band.start} act={band.act} key={band.end} />
          ))}
        </div>
      </div>
    );
  };
  return drilled();
}

export default ScheduleDay;
