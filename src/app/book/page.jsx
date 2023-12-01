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
          <Input type="number" required id="ticket-amount" labelText="Select amount of regular tickets" />
          <Input type="number" required id="ticket-amount" labelText="Select amount of VIP tickets" />
        </FormGroup>
        <FormGroup headline="Available areas">
          {/* //TODO Map out by areas */}
          <Input type="radio" name="svartheim" id="svartheim" labelText="Svartheim" placeholder="Svartheim" />
          <Input type="radio" name="nilfheim" id="nilfheim" labelText="Nilfheim" placeholder="Nilfheim" />
          <Input type="radio" name="helheim" id="helheim" labelText="Helheim" placeholder="Helheim" />
          <Input type="radio" name="muspelheim" id="muspelheim" labelText="Muspelheim" placeholder="Muspelheim" />
          <Input type="radio" name="alfheim" id="alfheim" labelText="Alfheim" placeholder="Alfheim" />
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
          <Input placeholder="First name" type="text" required id="payer-firstname" name="name" labelText="First name of payer" />
          <Input placeholder="Last name" type="text" required id="payer-surname" name="name" labelText="Last name of payer" />
          <Input placeholder="Email" type="email" required id="payer-email" name="email" labelText="Email of payer" />
          <Input placeholder="Phone" type="phone" required inputmode="numeric" id="payer-phone" name="email" labelText="Phone of payer" />
          <FormGroup headline="Payment information">
            {/* //TODO fix restrictions on input fields corresponding to requirements for cc, cvc and exp date */}
            <Input placeholder="Credit / Debit card number" type="text" required id="cc-number" name="cc-number" inputmode="numeric" autocomplete="cc-number" maxlength="19" labelText="Credit/Debit card number" />
            <Input placeholder="MM/YYYY" type="text" required id="expiration-date" name="expiration-date" inputmode="numeric" autocomplete="cc-exp" maxlength="7" labelText="Expiration Date" />
            <Input placeholder="123" type="text" required id="cvc-number" name="cvc-number" inputmode="numeric" autocomplete="cc-csc" maxlength="3" labelText="CVC number" />
          </FormGroup>
        </FormGroup>
        <button>SUBMIT FORM</button>
      </SubmitForm>
    </div>
  );
}

export default Booking;
