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
import TotalAmount from "@/components/TotalAmount";

//TODO Cant use when "use client" is active. Fix
// export const metadata = {
//   title: "Yggdrasil | Booking",
//   description: "Dive into a dynamic celebration blending music, arts, and culture inspired by the legendary World Tree.",
// };

function Booking() {
  const [campingAreas, setCampingAreas] = useState([]);
  useEffect(() => {
    fetch("https://funky-melodious-jingle.glitch.me/available-spots")
      .then((res) => res.json())
      .then((data) => {
        setCampingAreas(data);
      });
  }, []);

  const [vipValue, setVipValue] = useState(0);
  const [regularValue, setRegularValue] = useState(0);

  const totalValue = vipValue + regularValue;

  const [twoPersonTentValue, setTwoPersonTentValue] = useState(0);
  const [threePersonTentValue, setThreePersonTentValue] = useState(0);

  const totalTentValue = twoPersonTentValue + threePersonTentValue;

  const [showAvailableAreas, setShowAvailableAreas] = useState(false);
  const [showAttendeeInput, setShowAttendeeInput] = useState(false);

  const [selectedArea, setSelectedArea] = useState("");

  const [tickets, setTickets] = useState([]);

  const [showTickets, setShowTickets] = useState(false);

  const [reservationID, setReservationID] = useState("");

  const [timeValue, setTimeValue] = useState(null);

  const [showError, setShowError] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const [greenCamping, setGreenCamping] = useState(false);
  const [tentSetup, setTentSetup] = useState(false);

  // const seconds = Math.floor(timeValue / 1000);
  // console.log("her er mine sekunder " + seconds);

  // const minutes = Math.floor(seconds / 60);
  // console.log("her er mine minutter " + minutes);

  // function count() {
  //   let count = timeValue;
  //   const timer = setInterval(function () {
  //     count--;
  //     console.log(count);
  //     if (count === 0) {
  //       clearInterval(timer);
  //       console.log("Time's up!");
  //     }
  //   }, 1000);
  // }

  async function reserveSpot() {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      area: selectedArea,
      amount: totalValue,
      purchase: [showTickets],
    });

    let response = await fetch(
      "https://funky-melodious-jingle.glitch.me/reserve-spot",
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      },
    );

    let booking = await response.json();
    // console.log(booking);
    console.log(booking.id);
    console.log(booking.timeout);
    setReservationID(booking.id);
    setTimeValue(booking.timeout);
  }

  async function submit(e) {
    e.preventDefault();
    let headersList = {
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({ id: reservationID });

    let response = await fetch(
      "https://funky-melodious-jingle.glitch.me/fullfill-reservation",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      },
    );

    let orderID = await response.json();
    console.log(orderID);
  }

  const priceVip = 1200;
  const priceRegular = 799;
  const priceGreenCamping = 249;
  const priceTwoPersonTent = 299;
  const priceThreePersonTent = 399;

  return (
    <>
      <div className={styles.bookingContainer}>
        <SubmitForm submit={submit}>
          <FormGroup
            headline="Select ticket amount and type"
            classStyle="tickets"
          >
            <TicketCard
              ticketName="Asgard Elite Access"
              ticketType="VIP Access"
              price={`${priceVip} DKK`}
            >
              <InputCounter
                price={priceVip}
                setTickets={setTickets}
                ticketType="Festival Ticket"
                ticketName="Asgard Elite Access"
                value={vipValue}
                setValue={setVipValue}
              />
            </TicketCard>
            <TicketCard
              ticketName="Midgard Explorer Pass"
              ticketType="Regular Access"
              price={`${priceRegular} DKK`}
            >
              <InputCounter
                price={priceRegular}
                setTickets={setTickets}
                ticketType="Festival Ticket"
                ticketName="Midgard Explorer Pass"
                value={regularValue}
                setValue={setRegularValue}
              />
            </TicketCard>
            <InputCheckBox
              onChange={() => setTentSetup((prev) => !prev)}
              type="checkbox"
              id="choose-tent-setup"
              labelText="Do you want to have the crew set up tents for you?"
            />
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
                  <InputRadio
                    setTickets={setTickets}
                    key={area.area}
                    type="radio"
                    areaName={area.area}
                    id={area.area}
                    labelText={area.area}
                    availableSpots={area.available}
                    totalSpots={area.spots}
                    setSelectedArea={setSelectedArea}
                  />
                ))}
              <button
                type="button"
                onClick={() => {
                  setShowTickets((prev) => true);
                  reserveSpot();
                  // count();
                  setShowExtras(true);
                }}
              >
                Continue
              </button>
            </FormGroup>
          )}
          {showExtras && (
            <FormGroup headline="Extras" classStyle="extras">
              {showError && (
                <p>You must pick the same number of tents as tickets</p>
              )}
              <InputCheckBox
                onChange={() => setGreenCamping((prev) => !prev)}
                type="checkbox"
                id="green-camping"
                labelText="Add green camping option"
                price={`+${priceGreenCamping} DKK`}
              />
              {/* //TODO: if two people or more, show following */}
              {/* <InputCheckBox onChange={() => setShowAttendeeInput((prev) => !prev)} type="checkbox" id="choose-tent-setup" labelText="Do you want to have the crew set up tents for you?" /> */}
              {tentSetup && (
                <FormGroup headline="Choose to have tents set up">
                  <InputCounter
                    price={priceTwoPersonTent}
                    ticketName="2-person tent"
                    ticketType="Tent ticket"
                    value={twoPersonTentValue}
                    setValue={setTwoPersonTentValue}
                    setTickets={setTickets}
                  />
                  <InputCounter
                    price={priceThreePersonTent}
                    ticketName="3-person tent"
                    ticketType="Tent ticket"
                    value={threePersonTentValue}
                    setValue={setThreePersonTentValue}
                    setTickets={setTickets}
                  />
                  <button
                    onClick={() => {
                      if (totalValue === totalTentValue) {
                        setShowAttendeeInput(true);
                        setShowError(false);
                      } else if (totalTentValue > totalValue) {
                        setShowError(true);
                      } else {
                        setShowError(true);
                      }
                    }}
                  >
                    Continue
                  </button>
                </FormGroup>
              )}
              {!tentSetup && (
                <button onClick={() => setShowAttendeeInput(true)}>
                  Fill out attendee information
                </button>
              )}
            </FormGroup>
          )}
          {showAttendeeInput && (
            <FormGroup headline="Attendee information">
              <AttendeeInput tickets={tickets} />
            </FormGroup>
          )}
          {showAttendeeInput && (
            <FormGroup headline="Credit card holder information">
              <InputField
                placeholder="First name"
                type="text"
                id="payer-firstname"
                name="first-name"
                labelText="First name"
                required
              />
              <InputField
                placeholder="Last name"
                type="text"
                id="payer-surname"
                name="last-name"
                labelText="Last name"
                required
              />
              <InputField
                placeholder="Email"
                type="email"
                id="payer-email"
                name="email"
                labelText="Email"
                required
              />
              <InputField
                placeholder="Phone"
                type="phone"
                inputMode="numeric"
                id="payer-phone"
                name="email"
                labelText="Phone"
                required
              />
              <FormGroup headline="Payment information">
                {/* //TODO fix restrictions on input fields corresponding to requirements for cc, cvc and exp date */}
                <InputField
                  placeholder="Credit / Debit card number"
                  type="text"
                  id="cc-number"
                  name="cc-number"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  maxLength="19"
                  labelText="Credit/Debit card number"
                />
                <InputField
                  placeholder="MM/YYYY"
                  type="text"
                  id="expiration-date"
                  name="expiration-date"
                  inputMode="numeric"
                  autoComplete="cc-exp"
                  maxLength="7"
                  labelText="Expiration Date"
                />
                <InputField
                  placeholder="123"
                  type="text"
                  id="cvc-number"
                  name="cvc-number"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  maxLength="3"
                  labelText="CVC number"
                />
              </FormGroup>
              <button>SUBMIT FORM</button>
            </FormGroup>
          )}
        </SubmitForm>
        <TicketBasket showTickets={showTickets}>
          {tickets.map((ticket) => (
            <BasketItem
              showTickets={showTickets}
              selectedArea={selectedArea}
              key={ticket.id}
              ticketName={ticket.ticketName}
              ticketType={ticket.ticketType}
              price={ticket.price}
            />
          ))}
          {greenCamping && (
            <BasketItem
              showTickets={showTickets}
              ticketName="Green Camping fee"
              price={priceGreenCamping}
            />
          )}
          <TotalAmount
            vipValue={vipValue}
            regularValue={regularValue}
            greenCamping={greenCamping}
            setGreenCamping={setGreenCamping}
            twoPersonTentValue={twoPersonTentValue}
            threePersonTentValue={threePersonTentValue}
            priceVIP={priceVip}
            priceRegular={priceRegular}
            priceGreenCamping={priceGreenCamping}
            priceThreePersonTent={priceThreePersonTent}
            priceTwoPersonTent={priceTwoPersonTent}
          />
        </TicketBasket>
      </div>
    </>
  );
}

export default Booking;
