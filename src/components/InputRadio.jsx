import Image from "next/image";

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
        />

        <div className="sr-only">{props.labelText}</div>
        <h4 className="p-4 text-xl transition duration-400 hover:ring-2 rounded-sm ring-accent peer-checked:ring-2">
          {props.areaName}
        </h4>
      </label>
    </>
  );
}

export default InputRadio;
