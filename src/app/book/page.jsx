"use client";
import SubmitForm from "@/components/SubmitForm";
import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import AttendeeInput from "@/components/AttendeeInput";
import AreaInput from "@/components/AreaInput";
import InputCounter from "@/components/InputCounter";
import { useState, useEffect } from "react";
import TicketCard from "@/components/TicketCard";

//TODO Cant use when "use client" is active. Fix
// export const metadata = {
//   title: "Yggdrasil | Booking",
//   description: "Dive into a dynamic celebration blending music, arts, and culture inspired by the legendary World Tree.",
// };

function Booking() {
  const [campingAreas, setCampingAreas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setCampingAreas(data);
      });
  }, []);

  const [vipValue, setVipValue] = useState(0);
  const [regularValue, setRegularValue] = useState(0);

  const totalValue = vipValue + regularValue;

  console.log("Total Value:", totalValue);

  const [showAvailableAreas, setShowAvailableAreas] = useState(false);

  const [selectedArea, setSelectedArea] = useState("");

  return (
    <div>
      <h1>This is the booking page</h1>
      <SubmitForm>
        <FormGroup headline="Select ticket amount and type" classStyle="tickets">
          <TicketCard ticketName="Asgard Elite Access" ticketType="VIP Access" price="1299 DKK">
            <InputCounter ticketName="Asgard Elite Access" value={vipValue} setValue={setVipValue} />
          </TicketCard>
          <TicketCard ticketName="Midgard Explorer Pass" ticketType="Regular Access" price="799 DKK">
            <InputCounter ticketName="Midgard Explorer Pass" value={regularValue} setValue={setRegularValue} />
          </TicketCard>
          <button
            type="button"
            onClick={() => {
              setShowAvailableAreas(true);
            }}
          >
            Continue
          </button>
        </FormGroup>
        {showAvailableAreas && (
          <FormGroup headline="Available areas" classStyle="areas">
            {campingAreas
              .filter((area) => area.available > totalValue)
              .map((area) => (
                <AreaInput key={area.area} type="radio" areaName={area.area} id={area.area} labelText={area.area} availableSpots={area.available} totalSpots={area.spots} setSelectedArea={setSelectedArea} />
              ))}
            {/* //TODO handle PUT request onClick */}
            <button>Continue</button>
          </FormGroup>
        )}

        <FormGroup headline="Extras" classStyle="extras">
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
        <FormGroup headline="Credit card holder information">
          <Input placeholder="First name" type="text" required id="payer-firstname" name="name" labelText="First name" />
          <Input placeholder="Last name" type="text" required id="payer-surname" name="name" labelText="Last name" />
          <Input placeholder="Email" type="email" required id="payer-email" name="email" labelText="Email" />
          <Input placeholder="Phone" type="phone" required inputMode="numeric" id="payer-phone" name="email" labelText="Phone" />
          <FormGroup headline="Payment information">
            {/* //TODO fix restrictions on input fields corresponding to requirements for cc, cvc and exp date */}
            <Input placeholder="Credit / Debit card number" type="text" required id="cc-number" name="cc-number" inputMode="numeric" autoComplete="cc-number" maxLength="19" labelText="Credit/Debit card number" />
            <Input placeholder="MM/YYYY" type="text" required id="expiration-date" name="expiration-date" inputMode="numeric" autoComplete="cc-exp" maxLength="7" labelText="Expiration Date" />
            <Input placeholder="123" type="text" required id="cvc-number" name="cvc-number" inputMode="numeric" autoComplete="cc-csc" maxLength="3" labelText="CVC number" />
          </FormGroup>
        </FormGroup>
        <button>SUBMIT FORM</button>
      </SubmitForm>
    </div>
  );
}

export default Booking;
