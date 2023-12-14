function InputRadio(props) {
  return (
    <>
      <label htmlFor={props.id} className="cursor-pointer text-center">
        <input
          className="peer sr-only"
          type={props.type}
          name="area"
          id={props.id}
          onChange={() => {
            props.setSelectedArea((area) => props.id);
          }}
          disabled={props.disabled}
        />

        <div className="sr-only">{props.labelText}</div>
        <h4
          className={`duration-400 disabled: rounded-sm p-4 text-xl transition hover:ring-2 ${
            props.disabled
              ? " cursor-default bg-danger bg-opacity-25 hover:ring-0"
              : "ring-accent"
          } peer-checked:ring-2`}
        >
          {props.areaName}
        </h4>
      </label>
    </>
  );
}

export default InputRadio;
