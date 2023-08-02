import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  const navigate = useNavigate();

  const coinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-[80%] md:w-[60%] lg:w-[40%] p-4 bg-gray-200 mb-12 last:mb-0 rounded-lg flex flex-col cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-40 relative"
      onClick={() => coinDetails(data?.id)}
    >
      <h3 className="flex items-center gap-2 text-base">
        <span className="text-gray-100 capitalize">Name:</span>
        <div className="text-cyan">{data?.name}</div>
        <img
          className="w-[1.5rem] h-auto rounded-full"
          src={data?.small}
          alt={data?.symbol}
        />
      </h3>
      <h3 className="flex items-center gap-2 text-base">
        <span className="text-gray-100 capitalize">market cap rank:</span>
        <div className="text-cyan">{data?.market_cap_rank}</div>
      </h3>
      <h3 className="flex items-center gap-2 text-base">
        <span className="text-gray-100">Price (In BTC):</span>
        <div className="text-cyan">
          {Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "btc",
            maximumSignificantDigits: 5,
          }).format(data?.price_btc)}
        </div>
      </h3>

      <h3 className="flex items-center gap-2 text-base">
        <span className="text-gray-100 capitalize">score:</span>
        <div className="text-cyan">{data?.score}</div>
      </h3>

      <img
        className="absolute w-[5rem] lg:w-[35%] -right-6 lg:-right-12 top-4 lg:top-2/4 -translate-y-1/2 rounded-full"
        src={data?.large}
        alt={data?.symbol}
      />
    </div>
  );
};

export default TrendingCoin;
