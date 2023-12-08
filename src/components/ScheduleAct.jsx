import Link from "next/link";
import React from "react";

function ScheduleAct(props) {
  return (
    <Link bands={props.bands} href={`/bands/${props.slug}`}>
      <h3>{props.name}</h3>
      <p>
        {props.start} - {props.end}
      </p>
      <p>{props.genre}</p>
    </Link>
  );
}

export default ScheduleAct;
