"use client";

import Button from "@/components/Button";
import InputCounter from "@/components/InputCounter";
import ScheduleDay from "@/components/ScheduleDay";
import { useEffect, useState } from "react";

function Schedule() {
  const [schedule, setSchedule] = useState({});
  const [day, setDay] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/schedule/")
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
      });
  }, []);

  console.log(schedule);

  return (
    <div>
      <h1>This is the Schedule page</h1>
      <div>
        <Button btnTxt="Monday" scheduleDay="mon" setDay={setDay} />

        <Button btnTxt="Tuesday" scheduleDay="tue" setDay={setDay} />

        <Button btnTxt="Wednesday" scheduleDay="wed" setDay={setDay} />

        <Button btnTxt="Thursday" scheduleDay="thu" setDay={setDay} />

        <Button btnTxt="Friday" scheduleDay="fri" setDay={setDay} />

        <Button btnTxt="Saturday" scheduleDay="sat" setDay={setDay} />

        <Button btnTxt="Sunday" scheduleDay="son" setDay={setDay} />

        <InputCounter />
      </div>
      <ScheduleDay schedule={schedule} day={day} />
    </div>
  );
}

export default Schedule;
