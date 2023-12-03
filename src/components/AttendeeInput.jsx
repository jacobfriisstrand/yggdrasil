import Input from "@/components/Input";

function AttendeeInput() {
  return (
    <div>
      <Input placeholder="Name" type="text" required id="attendee-name" name="name" labelText="Name" />
      <Input placeholder="Email" type="email" required id="attendee-email" name="email" labelText="Email" />
      <Input placeholder="Phone" type="phone" required id="attendee-phone" name="email" labelText="Phone" />
    </div>
  );
}

export default AttendeeInput;
