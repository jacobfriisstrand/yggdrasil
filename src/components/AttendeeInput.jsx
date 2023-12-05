import Input from "@/components/Input";
import styles from "@/components/styles/AttendeeInput.module.css";

function AttendeeInput({ tickets }) {
  return (
    <>
      {tickets.map((ticket) => (
        <div className={styles.attendeeInput} key={ticket.id}>
          <p>#{ticket.id + 1}</p>
          <p>{ticket.ticketName}</p>
          <Input type="text" required id="attendee-name" name="name" labelText="Full name" />
          <Input type="email" required id="attendee-email" name="email" labelText="Email" />
          <Input type="phone" required id="attendee-phone" name="phone" labelText="Phone" />
        </div>
      ))}
    </>
  );
}

export default AttendeeInput;
