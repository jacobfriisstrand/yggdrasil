import Link from "next/link";
import React from "react";

function ScheduleAct(props) {
  return (
    <Link bands={props.bands} href={`/bands/${props.slug}`}>
      <div className=" group relative rounded-sm border border-accent bg-foreground-light p-2 ">
        <p className="font-subheading text-xl [margin-bottom:1rem;] sm:text-base">
          {props.name}
        </p>
        <p className="text-base sm:text-xs">
          {props.start} - {props.end}
        </p>
        <p className="text-base sm:text-xs">{props.genre}</p>
        <span className="absolute bottom-1.5 right-2.5 text-2xl text-accent opacity-0 duration-300 group-hover:right-1.5 group-hover:block group-hover:opacity-100">
          &#8594;
        </span>
      </div>
    </Link>
  );
}

export default ScheduleAct;
