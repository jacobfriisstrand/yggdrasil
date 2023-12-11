import Input from "@/components/InputField";

function AttendeeInput({ tickets }) {
  return (
    <>
      {tickets
        .filter((ticket) => ticket.ticketType === "Festival Ticket")
        .map((ticket) => (
          <div key={ticket.id}>
            <p>#{ticket.id + 1}</p>
            <p>{ticket.ticketName}</p>
            <Input type="text" id={"attendee-name" + ticket.id} name="name" labelText="Full name" required/>
            <Input type="email" id={"attendee-email" + ticket.id} name="email" labelText="Email" required/>
            <Input type="phone" id={"attendee-phone" + ticket.id} name="phone" labelText="Phone" required/>
          </div>
        ))}
    </>
  );
}

export default AttendeeInput;
