import ScheduleAct from "./ScheduleAct";
import styles from "./styles/ScheduleDay.module.css";

function ScheduleDay(props) {
  console.log(props.bands.name);
  return (
    <div className={styles.acts}>
      <div>
        <h3>Midgard</h3>
        {props.bands
          .filter((band) => band.scene === "Midgard")
          .map((bands) => (
            <div key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3>Jotunheim</h3>
        {props.bands
          .filter((band) => band.scene === "Jotunheim")
          .map((bands) => (
            <div key={bands.slug}>
              <ScheduleAct {...bands} />
            </div>
          ))}
      </div>
      <div>
        <h3>Vanaheim</h3>
        {props.bands
          .filter((band) => band.scene === "Vanaheim")
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
