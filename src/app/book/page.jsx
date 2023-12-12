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
    <div className="h-screen gap-10 overflow-x-hidden md:grid lg:grid-cols-[1fr_0.4fr]">
      <SubmitForm submit={submit}>
        <FormGroup
          headline="Select ticket amount and type"
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
            <BookingButton
              type="button"
              onClick={() => {
                setShowAvailableAreas(true);
              }}
            >
              Select Tickets
            </BookingButton>
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
              Continue
            </BookingButton>
          </>
        )}
        {showExtras && (
          <FormGroup headline="Extras" classStyle="extras">
            {showError && (
              <p className="w-fit p-2 text-danger ring-2 ring-danger">
                You must pick the same number of tents as tickets
              </p>
            )}
            {tentSetup && (
              <FormGroup headline="Choose to have tents set up">
                <h3>2-person tent</h3>
                <InputCounter
                  price={priceTwoPersonTent}
                  ticketName="2-person tent"
                  ticketType="Tent ticket"
                  value={twoPersonTentValue}
                  setValue={setTwoPersonTentValue}
                  setTickets={setTickets}
                  headline="2-person tent"
                />
                <h3>3-person tent</h3>
                <InputCounter
                  price={priceThreePersonTent}
                  ticketName="3-person tent"
                  ticketType="Tent ticket"
                  value={threePersonTentValue}
                  setValue={setThreePersonTentValue}
                  setTickets={setTickets}
                  headline="3-person tent"
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
                  <InputCheckBox
                    onChange={() => setGreenCamping((prev) => !prev)}
                    type="checkbox"
                    id="green-camping"
                    labelText="Add green camping option"
                    price={`+${priceGreenCamping} DKK`}
                  />
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
              name="phone"
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
        <button
          onClick={toggleBasket}
          aria-expanded={basketStatus}
          className="fixed inset-x-8 bottom-8 z-[1] mx-auto rounded-full border-2 border-accent bg-background-light bg-opacity-50 px-4 py-4 backdrop-blur-sm md:hidden"
        >
          {basketStatus ? "Close Basket" : "View Basket"}
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ea modi
          molestias, similique tenetur laboriosam repudiandae minus doloribus
          sunt sint cum, quaerat, quod magnam quibusdam officiis. Dignissimos
          dolor incidunt error cupiditate alias sapiente quia, reiciendis modi
          exercitationem voluptas. Voluptatem dolores iusto at? Ab, numquam
          quibusdam illum cumque ipsam dolorem eius omnis. Necessitatibus
          voluptatibus excepturi similique doloremque, commodi sapiente
          repudiandae ducimus maiores, cumque alias dignissimos omnis amet
          adipisci praesentium ullam. Repellendus minima commodi molestiae velit
          et mollitia eaque, labore quia, temporibus, enim dolore molestias
          delectus suscipit porro blanditiis. Magni quo ipsam nisi optio tempora
          veritatis facilis dolore, maiores, similique repellendus porro, nihil
          suscipit molestias eligendi. Est recusandae accusamus voluptate
          nesciunt totam consequatur facilis, tempore ad culpa error aspernatur
          ut rerum magni incidunt quidem praesentium libero iure eos tempora
          nostrum. Molestiae, ab voluptatibus? Dignissimos sequi nobis
          recusandae quisquam? Unde ex provident vel non veniam cum facere,
          repellat officia harum porro saepe dolores quidem nobis odit animi
          nulla possimus mollitia fugit consectetur ut ad. Fugiat, eos dolores
          perferendis labore neque libero doloribus, nam facilis dolorum,
          officia esse sit! Molestias ut recusandae illo veritatis reiciendis
          assumenda, possimus commodi qui omnis quibusdam quidem iure. Molestias
          quibusdam quod aut aperiam hic earum dolorum esse reiciendis dolorem
          ducimus at repudiandae veniam, tenetur cum nihil nesciunt
          exercitationem quae architecto perferendis molestiae fugit suscipit
          voluptatum maxime illum! Libero iste tempore officia qui neque itaque
          facere aliquam nemo ut sunt. Facilis totam doloremque ipsa ratione non
          unde alias at culpa deserunt autem cupiditate nam error voluptatem,
          libero labore saepe a voluptatibus aliquid natus laudantium impedit
          commodi quaerat maiores sapiente. Nobis unde officiis ipsa
          reprehenderit id minus dolorem accusantium cum. Deserunt vero
          laboriosam sint dicta odio quaerat, illum inventore sunt, quis fuga
          delectus rerum nemo asperiores nihil. Culpa doloribus, ratione
          adipisci ducimus autem eos, animi harum sunt rerum iusto delectus
          magnam. Recusandae, quos ullam. Quos cum error corrupti qui, rem
          aperiam ab omnis quas labore quia. Amet asperiores necessitatibus
          harum impedit a voluptatibus est delectus repudiandae commodi?
          Eligendi quaerat nemo omnis laborum, suscipit sint aspernatur iure ut
          quas modi aliquid. Architecto eveniet a porro mollitia facere, alias
          dolores, beatae, odit et numquam molestias quia? Sit recusandae quidem
          harum doloribus placeat! Eveniet eligendi assumenda officiis, hic
          error corrupti magnam quaerat mollitia! Repudiandae sapiente nulla
          facilis fuga aperiam est nesciunt veniam ratione officia voluptas
          molestiae placeat modi officiis expedita, voluptatem hic architecto
          quibusdam. Tempora dolorum doloribus ipsum quod quaerat assumenda
          dolorem nobis ut cumque esse vel rem saepe iure possimus, aperiam
          quasi quia. Voluptate illo similique neque, exercitationem corrupti
          blanditiis quisquam repudiandae beatae. Aliquid sint consequatur
          porro, quis dolorum earum aliquam maxime enim voluptatum! Porro
          incidunt odio in dolor voluptatum natus nisi, consequatur temporibus
          facilis aspernatur, tempora dolorum cum id enim expedita, iste
          voluptas laudantium a exercitationem dolorem architecto amet? Aut
          nostrum reiciendis culpa deserunt velit asperiores iusto non odio quas
          quidem assumenda eius voluptas error explicabo, vero sunt. Est,
          aperiam numquam placeat repudiandae architecto maxime ipsa doloribus
          excepturi dolor quos itaque maiores sunt reiciendis consequatur
          suscipit dolore expedita eius quia provident repellendus.
        </p>
      </SubmitForm>
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
