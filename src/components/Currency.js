import React, { useContext, useRef } from "react";
import submitIcon from "../../src/assets/submit-icon.svg";
import { Cryptocontext } from "../context/Cryptocontext";

const Currency = () => {
  let currencyRef = useRef(null);
  const { setCurrency } = useContext(Cryptocontext);

  const handleCurrencyClick = (e) => {
    e.preventDefault();
    setCurrency(currencyRef.current.value);
    currencyRef.current.value = "";
  };

  return (
    <form
      className="flex items-center gap-1 xl:mr-12 lg:mr-5"
      onSubmit={handleCurrencyClick}
    >
      <h4 className="font-bold">currency:</h4>&nbsp;
      <input
        type="text"
        placeholder="usd"
        ref={currencyRef}
        className="placeholder:text-gray-100 w-24 sm:w-16 bg-gray-200 rounded-md px-2 outline-0
      focus-within:border focus-within:border-cyan"
      />
      <button type="submit">
        <img src={submitIcon} alt="select" />
      </button>
    </form>
  );
};

export default Currency;
