import Input from "@/components/Input";

function AttendeeInput() {
  return (
    <div>
      <Input type="text" required id="attendee-name" name="name" labelText="Full name" />
      <Input type="email" required id="attendee-email" name="email" labelText="Email" />
      <Input type="phone" required id="attendee-phone" name="email" labelText="Phone" />
    </div>
  );
}

export default AttendeeInput;
