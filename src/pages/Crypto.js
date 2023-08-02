import React, { useContext, useRef } from "react";
import TableContent from "../components/TableContent";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import submitIcon from "../../src/assets/submit-icon.svg";
import { Cryptocontext } from "../context/Cryptocontext";
import { Outlet } from "react-router-dom";

// ! component to render coins per page
const PerPage = () => {
  const pageRef = useRef(null);
  const { setPerPage, cryptoData } = useContext(Cryptocontext);

  const handlePerPage = (e) => {
    e.preventDefault();
    let value = pageRef.current.value;
    setPerPage(value);
    pageRef.current.value = null;
  };

  if (cryptoData && cryptoData.length > 1) {
    return (
      <form className="flex items-center gap-1 mr-6" onSubmit={handlePerPage}>
        <h4 className="font-bold">Per Page:</h4>&nbsp;
        <input
          min={1}
          max={250}
          type="number"
          placeholder="10"
          ref={pageRef}
          required
          className="placeholder:text-gray-100 w-16 bg-gray-200 rounded-md px-2 outline-0
      focus-within:border focus-within:border-cyan"
        />
        <button type="submit">
          <img src={submitIcon} alt="select" />
        </button>
      </form>
    );
  } else {
    return null;
  }
};

const Crypto = () => {
  return (
    <section className="w-[90%] mt-44 mb-32 ">
      <Filters />
      <TableContent />

      {/** Attribution to coinGecko **/}
      <div className="flex items-center flex-col gap-4 md:gap-0 md:flex-row justify-between mt-4">
        <span>
          Data Provided By{" "}
          <a
            className="text-cyan"
            href="http://www.coingecko.com"
            target="_blank"
            rel="noreferrer"
          >
            CoinGecko
          </a>
        </span>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center">
          <PerPage />
          <Pagination />
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Crypto;
