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
            props.setAreaChecked(true);
          }}
          disabled={props.disabled}
        />

        <div className="sr-only">{props.labelText}</div>
        <h4
          className={`duration-400 rounded-sm p-4 text-xl transition peer-checked:ring-1 ${
            props.disabled
              ? "cursor-default bg-danger bg-opacity-10 text-gray-500 ring-accent"
              : "ring-accent hover:ring-2"
          }`}
        >
          {props.areaName}
        </h4>
      </label>
    </>
  );
}

export default InputRadio;
