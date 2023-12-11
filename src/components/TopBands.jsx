import Link from "next/link";
import styles from "./../app/bands/Bands.module.css";
function TopBands(props) {
  return (
    <div className={styles.topBands}>
      {props.bands.slice(0, 10).map((band) => (
        <Link key={band.slug} bands={band.bands} href={`/bands/${band.slug}`}>
          <h2>{band.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default TopBands;
