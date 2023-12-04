"use client";
import React, { useState } from "react";

function InputCounter() {
  const [plusValue, setPlusValue] = useState(0);
  const [minusValue, setMinusValue] = useState(0);

  const totalValue = minusValue + plusValue;

  return (
    <>
      <label htmlFor="numberInput" name="numberInput"></label>
      <input type="number" id="numberInput" min="0" readOnly value={totalValue} />
      <button onClick={() => setPlusValue((plus) => plus + 1)}>Plus</button>
      <button
        onClick={() => {
          if (totalValue === 0) {
            setMinusValue((minus) => minus - 0);
          } else {
            setMinusValue((minus) => minus - 1);
            return;
          }
        }}
      >
        Minus
      </button>
    </>
  );
}

export default InputCounter;
