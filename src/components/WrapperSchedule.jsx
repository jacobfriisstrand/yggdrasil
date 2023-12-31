"use client";
import Button from "@/components/Button";
import ScheduleDay from "@/components/ScheduleDay";
import { useState } from "react";

function WrapperSchedule({ ...props }) {
  const [day, setDay] = useState("mon");
  const [active, setActive] = useState("Monday");

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
  }

  return (
    <>
      <div className=" relative flex h-full flex-col gap-8 lg:grid lg:grid-cols-3">
        <div className=" lg:sticky lg:[top:20%;] ">
          <p className="[margin-bottom:1rem;]">
            Welcome to our Schedule offering a detailed overview of the acts
            performing on each of the three available stages: Vanaheim,
            Jotunheim, and Midgard. This interactive platform boasts seven
            buttons, each representing a day of the week, enabling seamless
            filtering of bands based on their performance schedule. With a
            simple click, you can explore the lineup for any specific day.
          </p>

          <div className=" grid grid-cols-3 gap-4 sm:flex sm:flex-row  sm:flex-wrap ">
            <Button
              btnTxt="Monday"
              scheduleDay="mon"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Tuesday"
              scheduleDay="tue"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Wednesday"
              scheduleDay="wed"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Thursday"
              scheduleDay="thu"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Friday"
              scheduleDay="fri"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Saturday"
              scheduleDay="sat"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />

            <Button
              btnTxt="Sunday"
              scheduleDay="sun"
              setDay={setDay}
              setActive={setActive}
              active={active}
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2">
          <p className="text-center font-heading text-2xl [margin-bottom:1.5rem;]">
            {active}
          </p>
          <ScheduleDay day={day} bands={bands} />
        </div>
      </div>
    </>
  );
}

export default WrapperSchedule;
