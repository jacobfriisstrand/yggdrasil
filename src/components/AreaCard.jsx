import styles from "./styles/AreaCard.module.css";

function AreaCard({ children, areaName }) {
  return (
    <div className={styles.areaCard}>
      <h3 className={styles.areaHeader}>{areaName}</h3>
      {children}
    </div>
  );
}

export default AreaCard;
