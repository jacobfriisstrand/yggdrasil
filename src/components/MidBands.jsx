import Link from "next/link";
import styles from "./../app/bands/Bands.module.css";

function MidBands(props) {
  return (
    <div className={styles.midBands}>
      {props.bands.slice(11, 30).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h3>{band.name}</h3>
        </Link>
      ))}
    </div>
  );
}

export default MidBands;
