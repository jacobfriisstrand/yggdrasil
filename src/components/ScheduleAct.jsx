import React from "react";

function ScheduleAct(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>
        {props.start} - {props.end}
      </p>
      <p>{props.genre}</p>
    </div>
  );
}

export default ScheduleAct;
