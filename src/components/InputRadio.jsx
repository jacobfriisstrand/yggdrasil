function InputRadio(props) {
  return (
    <>
      <input className="sr-only"
        type={props.type}
        name="area"
        id={props.id}
        onChange={() => {
          props.setSelectedArea((area) => props.id);
        }}
      />
      <label htmlFor={props.id}>
        <div className="sr-only">{props.labelText}</div>
        <h3>{props.areaName}</h3>
        <p>Total spots: {props.totalSpots}</p>
        <p>Available spots: {props.availableSpots}</p>
      </label>
    </>
  );
}

export default InputRadio;
