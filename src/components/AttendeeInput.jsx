import Input from "@/components/Input";

function AttendeeInput() {
  return (
    <div>
      <Input type="text" id="attendee-name" name="name" labelText="Name of attendee" />
      <Input type="email" id="attendee-email" name="email" labelText="Email of attendee" />
      <Input type="phone" id="attendee-phone" name="email" labelText="Phone of attendee" />
    </div>
  );
}

export default AttendeeInput;
