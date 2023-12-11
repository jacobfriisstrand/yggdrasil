import Link from "next/link";
import styles from "./../app/bands/Bands.module.css";

function SmallBands(props) {
  return (
    <div className={styles.smallBands}>
      {props.bands.slice(31, 70).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h4>{band.name}</h4>
        </Link>
      ))}
    </div>
  );
}

export default SmallBands;
