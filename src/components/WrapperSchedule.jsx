"use client";
import Button from "@/components/Button";
import ScheduleDay from "@/components/ScheduleDay";
import { useState } from "react";

function WrapperSchedule(props) {
  const scenes = [];
  for (const scene in props.schedule) {
    scenes.push(scene);
    for (const day in props.schedule[scene]) {
      props.schedule[scene][day].forEach((slot) => {
        if (slot.act !== "break") {
          // slot.info = props.bands.filter((band) => band.name === slot.act)[0];
          // slot.day = day;
          // slot.scene = scene;

          slot = {
            ...slot,
            ...props.bands.filter((band) => band.name === slot.act)[0],
            // day,
            // scene,
          };
          console.log(slot);
        }
      });
    }
  }

  const [day, setDay] = useState("");

  return (
    <div className="schedule-layout">
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
        <ScheduleDay data={props.schedule[scenes]} schedule={props.schedule.slot} day={day} />
      </div>
    </div>
  );
}

export default WrapperSchedule;
