"use client";
import SubmitForm from "@/components/SubmitForm";
import FormGroup from "@/components/FormGroup";
import InputField from "@/components/InputField";
import AttendeeInput from "@/components/AttendeeInput";
import InputRadio from "@/components/InputRadio";
import InputCounter from "@/components/InputCounter";
import { useState, useEffect } from "react";
import TicketCard from "@/components/TicketCard";
import TicketBasket from "@/components/TicketBasket";
import styles from ".//Booking.module.css";
import BasketItem from "@/components/BasketItem";
import InputCheckBox from "@/components/InputCheckBox";

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

  console.log("Total number of tickets", totalValue);

  const [showAvailableAreas, setShowAvailableAreas] = useState(false);

  const [selectedArea, setSelectedArea] = useState("");

  const [tickets, setTickets] = useState([]);

  const [showTickets, setShowTickets] = useState([]);

  async function reserveSpot() {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      area: selectedArea,
      amount: totalValue,
      purchase: [showTickets],
    });

    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
  }

  const priceVip = 1200;
  const priceRegular = 799;
  const priceGreenCamping = 249;

  return (
    <>
      <div className={styles.bookingContainer}>
        <SubmitForm>
          <FormGroup headline="Select ticket amount and type" classStyle="tickets">
            <TicketCard ticketName="Asgard Elite Access" ticketType="VIP Access" price={`${priceVip} DKK`}>
              <InputCounter price={priceVip} setTickets={setTickets} ticketName="Asgard Elite Access" value={vipValue} setValue={setVipValue} />
            </TicketCard>
            <TicketCard ticketName="Midgard Explorer Pass" ticketType="Regular Access" price={`${priceRegular} DKK`}>
              <InputCounter price={priceRegular} setTickets={setTickets} ticketName="Midgard Explorer Pass" value={regularValue} setValue={setRegularValue} />
            </TicketCard>
            {/* //TODO: Have option to select pre booked camping spot */}
            <button
              type="button"
              onClick={() => {
                setShowAvailableAreas(true);
              }}
            >
              Select tickets
            </button>
          </FormGroup>
          {showAvailableAreas && (
            <FormGroup headline="Available areas" classStyle="areas">
              {campingAreas
                .filter((area) => area.available > totalValue)
                .map((area) => (
                  <InputRadio setTickets={setTickets} key={area.area} type="radio" areaName={area.area} id={area.area} labelText={area.area} availableSpots={area.available} totalSpots={area.spots} setSelectedArea={setSelectedArea} />
                ))}
              {/* //TODO handle PUT request onClick */}
              <button
                type="button"
                onClick={() => {
                  setShowTickets((ticket) => ticket.concat(tickets));
                  reserveSpot();
                }}
              >
                Continue
              </button>
            </FormGroup>
          )}
          <FormGroup headline="Extras" classStyle="extras">
            <InputCheckBox type="checkbox" id="green-camping" labelText="Add green camping option" price={`+${priceGreenCamping} DKK`} />
            {/* //TODO: if two people or more, show following */}
            <FormGroup headline="Choose to have tents set up">
              <InputCounter ticketName="Amount of 2-person tents" />
              <InputCounter ticketName="Amount of 3-person tents" />
            </FormGroup>
          </FormGroup>
          <FormGroup headline="Attendee information">
            <AttendeeInput tickets={tickets} />
          </FormGroup>
          <FormGroup headline="Credit card holder information">
            <InputField placeholder="First name" type="text" id="payer-firstname" name="name" labelText="First name" />
            <InputField placeholder="Last name" type="text" id="payer-surname" name="name" labelText="Last name" />
            <InputField placeholder="Email" type="email" id="payer-email" name="email" labelText="Email" />
            <InputField placeholder="Phone" type="phone" inputMode="numeric" id="payer-phone" name="email" labelText="Phone" />
            <FormGroup headline="Payment information">
              {/* //TODO fix restrictions on input fields corresponding to requirements for cc, cvc and exp date */}
              <InputField placeholder="Credit / Debit card number" type="text" id="cc-number" name="cc-number" inputMode="numeric" autoComplete="cc-number" maxLength="19" labelText="Credit/Debit card number" />
              <InputField placeholder="MM/YYYY" type="text" id="expiration-date" name="expiration-date" inputMode="numeric" autoComplete="cc-exp" maxLength="7" labelText="Expiration Date" />
              <InputField placeholder="123" type="text" id="cvc-number" name="cvc-number" inputMode="numeric" autoComplete="cc-csc" maxLength="3" labelText="CVC number" />
            </FormGroup>
          </FormGroup>
          <button>SUBMIT FORM</button>
        </SubmitForm>
        <TicketBasket showTickets={showTickets}>
          {showTickets.map((ticket) => (
            <BasketItem key={ticket.ticketName} ticketName={ticket.ticketName} ticketType={ticket.ticketType} price={ticket.price} />
          ))}
          <hr></hr>
          <p>{selectedArea}</p>
        </TicketBasket>
      </div>
    </>
  );
}

export default Booking;
