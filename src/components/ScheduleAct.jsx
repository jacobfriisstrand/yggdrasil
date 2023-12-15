import Link from "next/link";
import React from "react";

function ScheduleAct(props) {
  return (
    <Link bands={props.bands} href={`/bands/${props.slug}`}>
      <div className="group relative rounded-sm border-2 border-accent bg-foreground-light p-2 ">
        <p className="font-subheading text-xl [margin-bottom:1rem;] sm:text-base">
          {props.name}
        </p>
        <p className="text-base sm:text-xs">
          {props.start} - {props.end}
        </p>
        <p className="text-base sm:text-xs">{props.genre}</p>
        <span className="absolute bottom-1.5 right-1.5 hidden text-2xl text-accent group-hover:block">
          &#8594;
        </span>
      </div>
    </Link>
  );
}

export default ScheduleAct;
