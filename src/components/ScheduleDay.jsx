import ScheduleAct from "./ScheduleAct";

function ScheduleDay(props) {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-4 sm:grid sm:grid-cols-3">
      <div>
        <h3 className="text-lg font-bold text-text-light">Midgard</h3>
        {props.bands
          .filter((band) => band.scene === "Midgard" && band.day === props.day)
          .map((bands) => (
            <div className="my-4" key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3 className="text-lg font-bold text-text-light">Jotunheim</h3>
        {props.bands
          .filter(
            (band) => band.scene === "Jotunheim" && band.day === props.day,
          )
          .map((bands) => (
            <div className="my-4" key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3 className="text-lg font-bold text-text-light">Vanaheim</h3>
        {props.bands
          .filter((band) => band.scene === "Vanaheim" && band.day === props.day)
          .map((bands) => (
            <div className="my-4" key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ScheduleDay;
