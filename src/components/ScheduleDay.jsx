import ScheduleAct from "./ScheduleAct";
import styles from "./styles/ScheduleDay.module.css";

function ScheduleDay(props) {
  return (
    <div className={styles.acts}>
      <div>
        <h3>Midgard</h3>
        {props.bands
          .filter((band) => band.scene === "Midgard" && band.day === props.day)
          .map((bands) => (
            <div key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3>Jotunheim</h3>
        {props.bands
          .filter((band) => band.scene === "Jotunheim" && band.day === props.day)
          .map((bands) => (
            <div key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3>Vanaheim</h3>
        {props.bands
          .filter((band) => band.scene === "Vanaheim" && band.day === props.day)
          .map((bands) => (
            <div key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ScheduleDay;
