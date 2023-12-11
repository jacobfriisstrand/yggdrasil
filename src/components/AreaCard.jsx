import styles from "./styles/AreaCard.module.css";

function AreaCard({ children, areaName }) {
  return (
    <div>
      <h3>{areaName}</h3>
      {children}
    </div>
  );
}

export default AreaCard;
