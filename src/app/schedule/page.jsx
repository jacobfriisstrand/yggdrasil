import WrapperSchedule from "@/components/WrapperSchedule";

async function Schedule() {
  const bands = await fetch(
    "https://funky-melodious-jingle.glitch.me/bands/",
  ).then((res) => res.json());
  const schedule = await fetch(
    "https://funky-melodious-jingle.glitch.me/schedule/",
  ).then((res) => res.json());

  return (
    <div className="my-8">
      <WrapperSchedule schedule={schedule} bands={bands} />
    </div>
  );
}

export default Schedule;
