import React, { useContext } from "react";
import { Context } from "@/components/TicketBasket"; // Adjust the path based on your project structure

function BasketButton() {
  const [basketStatus, toggleBasket] = useContext(Context);

  return (
    <button
      onClick={toggleBasket}
      aria-expanded={basketStatus}
      className="rounded-full border-2 border-accent bg-background-light bg-opacity-50 px-4 py-4 backdrop-blur-sm lg:hidden"
    >
      {basketStatus ? "Close Basket" : "View Basket"}
    </button>
  );
}

export default BasketButton;
