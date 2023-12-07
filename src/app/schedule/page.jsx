import WrapperSchedule from "@/components/WrapperSchedule";

async function Schedule() {
  const schedule = await fetch("http://localhost:8080/schedule").then((r) => r.json());
  const bands = await fetch("http://localhost:8080/bands").then((r) => r.json());

  return (
    <div>
      <h1>This is the Schedule page</h1>
      <WrapperSchedule schedule={schedule} bands={bands} />
    </div>
  );
}

export default Schedule;
