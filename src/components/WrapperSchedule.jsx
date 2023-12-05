"use client";
import Button from "@/components/Button";
import ScheduleDay from "@/components/ScheduleDay";
import { useState } from "react";

function WrapperSchedule(props) {
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
        <ScheduleDay schedule={props.schedule} day={day} />
      </div>
    </div>
  );
}

export default WrapperSchedule;
