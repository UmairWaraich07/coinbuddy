import React from "react";
import { useContext } from "react";
import { TrendingContext } from "../context/Trendingcontext";
import TrendingCoin from "../components/TrendingCoin";
import { Outlet } from "react-router-dom";

const Trending = () => {
  const { trendData, resetTrendingResult } = useContext(TrendingContext);
  console.log(trendData);

  return (
    <section className="w-[90%] lg:w-[80%] h-full mt-52 lg:mt-44  mb-32 relative">
      <div className="w-full min-h-[60vh] py-8 flex flex-col justify-center items-center lg:flex-row flex-wrap lg:justify-evenly border border-gray-100 rounded">
        {/* shows the trend data */}
        {trendData ? (
          trendData.map((coin) => (
            <TrendingCoin key={coin?.item?.id} data={coin?.item} />
          ))
        ) : (
          <div className="flex min-h-[60vh] items-center justify-center w-full h-full">
            <div
              className="h-8 w-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
              role="status"
            />
            <span className="ml-2">Please wait...</span>
          </div>
        )}
      </div>
      {/* Attribution to coinGecko */}
      <div className="flex items-center justify-center sm:justify-start mt-4">
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
      </div>

      {/* Reset button */}
      <button
        onClick={resetTrendingResult}
        className="absolute -top-10 right-0 w-[2rem] hover:scale-110 transition-all transition-ease"
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
      <Outlet />
    </section>
  );
};

export default Trending;
