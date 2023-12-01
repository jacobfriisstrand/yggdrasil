import SubmitForm from "@/components/SubmitForm";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import AttendeeInput from "@/components/AttendeeInput";

export const metadata = {
  title: "Yggdrasil | Booking",
  description: "Dive into a dynamic celebration blending music, arts, and culture inspired by the legendary World Tree.",
};

function Booking() {
  return (
    <div>
      <h1>This is the booking page</h1>
      <SubmitForm>
        <FormGroup headline="Select ticket amount and type">
          {/* //TODO change to +/- buttons */}
          <Input type="number" id="ticket-amount" labelText="Select amount of regular tickets" />
          <Input type="number" id="ticket-amount" labelText="Select amount of VIP tickets" />
        </FormGroup>
        <FormGroup headline="Available areas">
          <Input type="radio" name="svartheim" id="svartheim" labelText="Svartheim" />
          <Input type="radio" name="nilfheim" id="nilfheim" labelText="Nilfheim" />
          <Input type="radio" name="helheim" id="helheim" labelText="Helheim" />
          <Input type="radio" name="muspelheim" id="muspelheim" labelText="Muspelheim" />
          <Input type="radio" name="alfheim" id="alfheim" labelText="Alfheim" />
        </FormGroup>
        <FormGroup headline="Extras">
          <Input type="checkbox" id="green-camping" labelText="Choose green camping" />
          {/* if two people or more, show following */}
          <FormGroup headline="Choose to have tents set up">
            {/* //TODO change to +/- buttons */}
            <Input type="number" id="two-person-tent-amount" labelText="Select amount of 2-person tents" />
            <Input type="number" id="three-person-tent-amount" labelText="Select amount of 3-person tents" />
          </FormGroup>
        </FormGroup>
        <FormGroup headline="Attendee information">
          {/* Map following by how many tickets have been selected */}
          <AttendeeInput />
        </FormGroup>
        <FormGroup headline="Payer information">
          <Input type="text" id="payer-firstname" name="name" labelText="First name of payer" />
          <Input type="text" id="payer-surname" name="name" labelText="Last name of payer" />
          <Input type="email" id="payer-email" name="email" labelText="Email of payer" />
          <Input type="phone" inputmode="numeric" id="payer-phone" name="email" labelText="Phone of payer" />
          <FormGroup headline="Payment information">
            {/* //TODO fix restrictions on input fields corresponding to requirements for cc, cvc and exp date */}
            <Input type="text" id="cc-number" name="cc-number" inputmode="numeric" autocomplete="cc-number" maxlength="19" placeholder="1234 5678 1234 5678" labelText="Credit/Debit card number" />
            <Input type="text" id="expiration-date" name="expiration-date" inputmode="numeric" autocomplete="cc-exp" maxlength="7" placeholder="MM/YYYY" labelText="Expiration Date" />
            <Input type="text" id="cvc-number" name="cvc-number" inputmode="numeric" autocomplete="cc-csc" maxlength="3" placeholder="123" labelText="CVC number" />
          </FormGroup>
        </FormGroup>
        <button>SUBMIT FORM</button>
      </SubmitForm>
    </div>
  );
}

export default Booking;
