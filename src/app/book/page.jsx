"use client";
import SubmitForm from "@/components/SubmitForm";
import FormGroup from "@/components/FormGroup";
import InputField from "@/components/InputField";
import AttendeeInput from "@/components/AttendeeInput";
import InputRadio from "@/components/InputRadio";
import InputCounter from "@/components/InputCounter";
import { useState, useEffect, use } from "react";
import TicketCard from "@/components/TicketCard";
import TicketBasket from "@/components/TicketBasket";
import BasketItem from "@/components/BasketItem";
import InputCheckBox from "@/components/InputCheckBox";
import TotalAmount from "@/components/TotalAmount";
import BookingButton from "@/components/BookingButton";
import { intervalToDuration } from "date-fns";
import TentCard from "@/components/TentCard";

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

  const [timeValue, setTimeValue] = useState(null);

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeValue) {
      setTimeLeft(timeValue);
      count();
    }
  }, [timeValue]);

  const [vipValue, setVipValue] = useState(0);
  const [regularValue, setRegularValue] = useState(0);

  const totalValue = vipValue + regularValue;

  const [twoPersonTentValue, setTwoPersonTentValue] = useState(0);
  const [threePersonTentValue, setThreePersonTentValue] = useState(0);

  const totalTentValue = twoPersonTentValue + threePersonTentValue;

  const [showAvailableAreas, setShowAvailableAreas] = useState(false);
  const [showAttendeeInput, setShowAttendeeInput] = useState(false);

  const [selectedArea, setSelectedArea] = useState("");

  const [showTotalAmount, setShowTotalAmount] = useState(false);

  const [tickets, setTickets] = useState([]);

  const [showTickets, setShowTickets] = useState(false);

  const [reservationID, setReservationID] = useState("");

  const [showError, setShowError] = useState(false);
  const [showExtras, setShowExtras] = useState(false);

  const [greenCamping, setGreenCamping] = useState(false);
  const [tentSetup, setTentSetup] = useState(false);

  const [totalSpendAmout, setTotalSpendAmount] = useState(0);

  const getRandomImageCategory = () => {
    const imageCategories = [
      "festival",
      "camping",
      "outdoor",
      "tent",
      "woodstock",
    ];
    const randomIndex = Math.floor(Math.random() * imageCategories.length);
    return imageCategories[randomIndex];
  };

  const randomImageCategory = getRandomImageCategory();

  const [basketStatus, setBasketStatus] = useState(false);

  function toggleBasket() {
    setBasketStatus(!basketStatus); // Toggle the state
  }

  function count() {
    let count = timeValue;
    const timer = setInterval(function () {
      count -= 1000;
      setTimeLeft(count);
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

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

    let booking = await response.json();
    setReservationID(booking.id);
    setTimeValue(booking.timeout);
  }

  async function submit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let supabaseBodyContent = JSON.stringify({
      first_name: formData.get("first-name"),
      last_name: formData.get("last-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      order_amount: tickets.length,
      order_value: totalSpendAmout,
    });

    let supabaseHeadersList = {
      Prefer: "return=representation",
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4YWtwb2RzbHltYWF2aWJzb2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NjM5MzgsImV4cCI6MjAxNzMzOTkzOH0.PLsNs7E4UVDAvk-sC9gzY-8glk81cR8ZCt24bBLxt7U",
      "Content-Type": "application/json",
    };

    let responseSupabase = await fetch(
      "https://sxakpodslymaavibsoch.supabase.co/rest/v1/payment_info",
      {
        method: "POST",
        body: supabaseBodyContent,
        headers: supabaseHeadersList,
      },
    );

    let reserveHeader = {
      "Content-Type": "application/json",
    };

    let reserveBodyContent = JSON.stringify({
      id: reservationID,
    });

    let responseReserve = await fetch(
      "http://localhost:8080/fullfill-reservation",
      {
        method: "POST",
        body: reserveBodyContent,
        headers: reserveHeader,
      },
    );

    // let orderID = await response.json();

    console.log(formData.get("first-name"));

    let supabaseData = await responseSupabase.json();
    let reserveData = await responseReserve.json();
  }

  const priceVip = 1200;
  const priceRegular = 799;
  const priceGreenCamping = 249;
  const priceTwoPersonTent = 299;
  const priceThreePersonTent = 399;

  const duration = intervalToDuration({ start: 0, end: timeLeft });
  const zeroPad = (num) => String(num).padStart(2, "0");
  const formattedTimeLeft = `${zeroPad(duration.minutes)}:${zeroPad(
    duration.seconds,
  )}`;

  return (
    <div className="min-h-full divide-x divide-accent lg:grid lg:grid-cols-[1fr_0.4fr]">
      <SubmitForm submit={submit}>
        <FormGroup
          headline="Choose your Yggdrasil experience"
          classStyle="grid md:grid-cols-2 sm:grid-cols-1 gap-8"
        >
          <TicketCard
            ticketName="Asgard Elite Access"
            ticketType="VIP Access"
            price={`${priceVip} DKK`}
            imageCategory="festival"
          >
            <InputCounter
              price={priceVip}
              setTickets={setTickets}
              ticketType="Festival Ticket"
              ticketName="Asgard Elite Access"
              value={vipValue}
              setValue={setVipValue}
              counterText="Select ticket amount"
            />
          </TicketCard>
          <TicketCard
            ticketName="Midgard Explorer Pass"
            ticketType="Regular Access"
            price={`${priceRegular} DKK`}
            imageCategory="tent festival"
          >
            <InputCounter
              price={priceRegular}
              setTickets={setTickets}
              ticketType="Festival Ticket"
              ticketName="Midgard Explorer Pass"
              value={regularValue}
              setValue={setRegularValue}
              counterText="Select ticket amount"
            />
          </TicketCard>
          <div className="md:col-span-2">
            <div className="mb-8">
              <InputCheckBox
                onChange={() => setTentSetup((prev) => !prev)}
                type="checkbox"
                id="choose-tent-setup"
                labelText="Choose prebooked tents"
              />
            </div>
            {totalValue > 0 && (
              <BookingButton
                type="button"
                onClick={() => {
                  setShowAvailableAreas(true);
                }}
              >
                Select Tickets
              </BookingButton>
            )}
          </div>
        </FormGroup>
        {showAvailableAreas && (
          <>
            <div>
              <FormGroup
                headline="Select camping area"
                classStyle="flex flex-wrap gap-10"
              >
                {campingAreas
                  .filter((area) => area.available > totalValue)
                  .map((area) => (
                    <div key={area.area}>
                      <InputRadio
                        setTickets={setTickets}
                        type="radio"
                        areaName={area.area}
                        id={area.area}
                        labelText={area.area}
                        availableSpots={area.available}
                        totalSpots={area.spots}
                        setSelectedArea={setSelectedArea}
                      />
                    </div>
                  ))}
              </FormGroup>
            </div>
            <BookingButton
              type="button"
              onClick={async () => {
                setShowTickets((prev) => true);
                await reserveSpot();
                // count();
                setShowExtras(true);
                setShowTotalAmount(true);
              }}
            >
              Reserve Tickets
            </BookingButton>
          </>
        )}

        {showExtras && (
          <FormGroup headline="Extras">
            <InputCheckBox
              onChange={() => setGreenCamping((prev) => !prev)}
              type="checkbox"
              id="green-camping"
              labelText="Add green camping option"
              price={`+${priceGreenCamping} DKK`}
            />
            {tentSetup && (
              <FormGroup
                headline="Choose to have tents set up"
                classStyle="grid md:grid-cols-2 sm:grid-cols-1 gap-8"
              >
                <TentCard
                  tentType="Two person glamping tent"
                  imageSrc="/assets/twopersontent.jpg"
                >
                  <InputCounter
                    price={priceTwoPersonTent}
                    ticketName="2-person tent"
                    ticketType="Tent ticket"
                    value={twoPersonTentValue}
                    setValue={setTwoPersonTentValue}
                    setTickets={setTickets}
                    headline="2-person tent"
                  />
                </TentCard>
                <TentCard
                  tentType="Three person glamping tent"
                  imageSrc="/assets/threepersontent.jpg"
                >
                  <InputCounter
                    price={priceThreePersonTent}
                    ticketName="3-person tent"
                    ticketType="Tent ticket"
                    value={threePersonTentValue}
                    setValue={setThreePersonTentValue}
                    setTickets={setTickets}
                    headline="3-person tent"
                  />
                </TentCard>
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
                  {showError && (
                    <p className="w-fit p-2 text-danger ring-2 ring-danger">
                      You must pick the same number of tents as tickets
                    </p>
                  )}
                  Continue
                </button>
              </FormGroup>
            )}
            {!tentSetup && (
              <BookingButton onClick={() => setShowAttendeeInput(true)}>
                Fill out attendee information
              </BookingButton>
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
              name="phone"
              labelText="Phone"
              required
            />
            <FormGroup headline="Payment information">
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
      <button
        onClick={toggleBasket}
        aria-expanded={basketStatus}
        className="fixed inset-x-8 bottom-8 z-[2] mx-auto rounded-full border-2 border-accent bg-background-light bg-opacity-50 px-4 py-4 backdrop-blur-sm lg:hidden"
      >
        {basketStatus ? (
          tickets.length > 0 ? (
            <>
              Close Basket{" "}
              <span className="ml-4 rounded-full p-2 ring-2 ring-accent">
                {tickets.length}
              </span>
              {timeLeft > 0 && <p>{formattedTimeLeft}</p>}
            </>
          ) : (
            "Close Basket"
          )
        ) : tickets.length > 0 ? (
          <>
            View Basket{" "}
            <span className="absolute top-2 ml-4 rounded-full p-2 px-4 ring-2 ring-accent">
              {tickets.length}
            </span>
            <span className="absolute ml-4">
              {timeLeft > 0 && <p>{formattedTimeLeft}</p>}
            </span>
          </>
        ) : (
          "View Basket"
        )}
      </button>
      <TicketBasket basketStatus={basketStatus} showTickets={showTickets}>
        {timeLeft > 0 && <p>{formattedTimeLeft}</p>}

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
        {showTotalAmount && (
          <TotalAmount
            vipValue={vipValue}
            setTotalSpendAmount={setTotalSpendAmount}
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
        )}
      </TicketBasket>
    </div>
  );
}

export default Booking;
