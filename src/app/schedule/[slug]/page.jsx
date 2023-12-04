import Button from "@/app/componentsTwo/Button";
import InputCounter from "@/app/componentsTwo/InputCounter";
import ScheduleDay from "@/app/componentsTwo/ScheduleDay";

async function Schedule() {
  const res = await fetch("http://localhost:8080/schedule");
  const data = await res.json();

  return (
    <div>
      <h1>This is the Schedule page</h1>
      <div>
        <Button day="Monday" />
        <Button day="Tuesday" />

        <InputCounter />
      </div>
      <ScheduleDay data={data} />
    </div>
  );
}

export default Schedule;
