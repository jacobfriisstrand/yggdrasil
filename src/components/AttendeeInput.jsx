import Input from "@/components/InputField";
import styles from "@/components/styles/AttendeeInput.module.css";

function AttendeeInput({ tickets }) {
  return (
    <>
      {tickets.map((ticket) => (
        <div className={styles.attendeeInput} key={ticket.id}>
          <p>#{ticket.id + 1}</p>
          <p>{ticket.ticketName}</p>
          <Input type="text" id="attendee-name" name="name" labelText="Full name" />
          <Input type="email" id="attendee-email" name="email" labelText="Email" />
          <Input type="phone" id="attendee-phone" name="phone" labelText="Phone" />
        </div>
      ))}
    </>
  );
}

export default AttendeeInput;
