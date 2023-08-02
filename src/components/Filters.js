import React, { useContext } from "react";
import Search from "./Search";
import Currency from "./Currency";
import selectIcon from "../assets/select-icon.svg";
import { Cryptocontext } from "../context/Cryptocontext";

const Filters = () => {
  const { setSortBy, resetFunction } = useContext(Cryptocontext);

  const handleCategory = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };

  return (
    <div
      className="px-0 lg:px-8  py-2 w-full flex flex-col lg:flex-row items-center justify-between lg:border-[2px] border-gray-100 rounded-lg
    "
    >
      {/* Search component */}
      <Search />

      <div className="relative w-full flex flex-col sm:flex-row sm:justify-between lg:justify-end sm:items-center ">
        <Currency />

        {/* Select category */}
        <div className="flex items-center gap-4 relative mt-4 sm:mt-0">
          <h4 className="font-bold whitespace-nowrap">sort by:</h4>
          <div className="relative w-full">
            <select
              className="bg-gray-200 text-white pl-2 pr-10 leading-4 rounded-md border-0 outline-0 
              p-1 capitalize w-full"
              onClick={handleCategory}
            >
              <option className="" value="market_cap_desc">
                market cap desc
              </option>
              <option value="market_cap_asc">market cap asc</option>
              <option value="volume_asc">volume asc</option>
              <option value="volume_desc">volume desc</option>
              <option value="id_asc">id asc</option>
              <option value="id_desc">id desc</option>
            </select>
            <button
              type="submit"
              className="absolute right-[2px] top-2 pointer-events-none"
            >
              <img src={selectIcon} alt="" />
            </button>
          </div>
        </div>
        {/* Reset button function */}
        <button
          onClick={resetFunction}
          className="absolute sm:relative right-0 -top-1 sm:top-0 w-[2rem] ml-4 hover:scale-110 transition-all transition-ease"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            style={{
              msTransform: "rotate(360deg)",
              WebkitTransform: "rotate(360deg)",
              transform: "rotate(360deg)",
            }}
            className="w-full h-full fill-cyan"
            viewBox="0 0 24 24"
          >
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filters;
