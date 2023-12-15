import ScheduleAct from "./ScheduleAct";

function ScheduleDay(props) {
  return (
    <div className=" grid grid-cols-1 justify-center gap-4 sm:grid sm:grid-cols-3">
      <div>
        <h3 className="font-heading text-xl font-bold text-text-light sm:text-lg">
          Midgard
        </h3>
        {props.bands
          .filter((band) => band.scene === "Midgard" && band.day === props.day)
          .map((bands) => (
            <div className="my-4" key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3 className="font-heading text-xl font-bold text-text-light sm:text-lg">
          Jotunheim
        </h3>
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
        <h3 className="font-heading text-xl font-bold text-text-light sm:text-lg">
          Vanaheim
        </h3>
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
