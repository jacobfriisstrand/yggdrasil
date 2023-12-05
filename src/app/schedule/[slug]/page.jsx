import WrapperSchedule from "@/components/WrapperSchedule";

async function Schedule() {
  const res = await fetch("http://localhost:8080/schedule/");
  const schedule = await res.json();

  console.log(schedule);

  return (
    <div>
      <h1>This is the Schedule page</h1>
      <WrapperSchedule schedule={schedule} />
    </div>
  );
}

export default Schedule;
