function InputCounter({
  ticketName,
  value,
  setValue,
  setTickets,
  price,
  ticketType,
  counterText,
}) {
  const totalValue = value;

  return (
    <div className="space-y-2">
      <p className="text-xs">{counterText}</p>
      <div className="flex place-items-center gap-2">
        <button
          className="rounded-sm bg-accent p-2 px-4 text-background-light"
          type="button"
          aria-label={`Add 1 ${ticketName} ticket`}
          onClick={() => {
            setValue(value + 1);
            setTickets((o) =>
              o.concat({
                ticketName,
                id: o.length,
                price: price,
                ticketType: ticketType,
              }),
            );
          }}
        >
          +
        </button>
        <button
          className="rounded-sm bg-accent p-2 px-4 text-background-light"
          type="button"
          aria-label={`Remove 1 ${ticketName} ticket`}
          onClick={() => {
            setValue(value > 0 ? value - 1 : 0);
            setTickets((o) => {
              const indexToRemove = o.findIndex(
                (ticket) => ticket.ticketName === ticketName,
              );
              if (indexToRemove !== -1) {
                return o.filter((_, index) => index !== indexToRemove);
              } else {
                return o;
              }
            });
          }}
        >
          -
        </button>
        <label className="sr-only" htmlFor="numberInput" name="numberInput">
          {ticketName}
        </label>
        <input
          className="h-[37px] min-h-full w-[50px] grow cursor-none rounded-sm bg-transparent text-center ring-2 ring-accent ring-opacity-50 focus:outline-none"
          type="number"
          id="numberInput"
          readOnly
          value={totalValue}
        />
      </div>
    </div>
  );
}

export default InputCounter;
