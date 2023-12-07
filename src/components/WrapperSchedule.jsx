"use client";
import Button from "@/components/Button";
import ScheduleDay from "@/components/ScheduleDay";
import { useState } from "react";

function WrapperSchedule({ ...props }) {
  const [day, setDay] = useState("");
  console.log(day);

  const bands = [];
  for (const scene in props.schedule) {
    for (const day in props.schedule[scene]) {
      props.schedule[scene][day].forEach((slot) => {
        if (slot.act !== "break") {
          slot = {
            day,
            scene,
            ...slot,
            ...props.bands.filter((band) => band.name === slot.act)[0],
          };
        }
        bands.push(slot);
      });
    }
    // console.log(bands);
  }

  return (
    <div className="schedule-layout">
      {bands.map((band) => {
        <p>{band.act}</p>;
      })}
      <div className="buttons">
        <Button btnTxt="Monday" scheduleDay="mon" setDay={setDay} />

        <Button btnTxt="Tuesday" scheduleDay="tue" setDay={setDay} />

        <Button btnTxt="Wednesday" scheduleDay="wed" setDay={setDay} />

        <Button btnTxt="Thursday" scheduleDay="thu" setDay={setDay} />

        <Button btnTxt="Friday" scheduleDay="fri" setDay={setDay} />

        <Button btnTxt="Saturday" scheduleDay="sat" setDay={setDay} />

        <Button btnTxt="Sunday" scheduleDay="sun" setDay={setDay} />
      </div>
      <div className="scheduleDay">
        <ScheduleDay day={day} bands={bands} />
      </div>
    </div>
  );
}

export default WrapperSchedule;
