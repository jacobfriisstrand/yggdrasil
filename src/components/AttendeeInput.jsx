import InputField from "@/components/InputField";
import styles from "@/components/styles/AttendeeInput.module.css";

function AttendeeInput({ tickets }) {
  return (
    <>
      {tickets.map((ticket) => (
        <div className={styles.attendeeInput} key={ticket.id}>
          <div className={styles.ticketInfo}>
            <p>#{ticket.id + 1}</p>
            <p>{ticket.ticketName}</p>
          </div>
          <InputField type="text" id={"attendee-name" + ticket.id} name="name" labelText="Full name" />
          <InputField type="email" id={"attendee-email" + ticket.id} name="email" labelText="Email" />
          <InputField type="phone" id={"attendee-phone" + ticket.id} name="phone" labelText="Phone" />
        </div>
      ))}
    </>
  );
}

export default AttendeeInput;
