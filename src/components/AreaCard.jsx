function AreaCard({ children, areaName, imageCategory }) {
  return (
    <div>
      <h3>{areaName}</h3>
      {children}
    </div>
  );
}

export default AreaCard;
