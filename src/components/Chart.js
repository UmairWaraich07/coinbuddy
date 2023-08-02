import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Cryptocontext } from "../context/Cryptocontext";

function CustomTooltip({ payload, label, active, currency = "usd" }) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="custom-tooltip">
        <p className="label text-sm text-cyan">{`${label} : ${Intl.NumberFormat(
          "en-US",
          {
            style: "currency",
            currency: currency,
            minimumFractionDigits: 5,
          }
        ).format(payload[0].value)}`}</p>
      </div>
    );
  }

  return null;
}

const ChartComponent = ({ data, currency, type }) => {
  return (
    <ResponsiveContainer height="90%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke="#14ffec"
          strokeWidth={"1px"}
        />
        <CartesianGrid stroke="#323232" />
        <XAxis dataKey="date" hide />
        <YAxis dataKey={type} hide domain={["auto", "auto"]} />
        <Tooltip
          content={<CustomTooltip currency={currency} />}
          cursor={false}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

const Chart = ({ id }) => {
  const [chartData, setChartData] = useState(null);
  const { currency } = useContext(Cryptocontext);
  const [type, setType] = useState("prices");
  const [days, setDays] = useState(7);

  useLayoutEffect(() => {
    const getChartData = async (id) => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        );
        const data = await response.json();
        console.log("💹", data);

        let convertedData = data?.[type]?.map((item) => {
          return {
            date: new Date(item[0]).toLocaleDateString(),
            [type]: item[1],
          };
        });
        // console.log(convertedData);

        setChartData(convertedData);
      } catch (error) {
        alert(error.message);
      }
    };

    getChartData(id);
  }, [id, type, days]);

  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div className="mt-4">
        <button
          onClick={() => setType("prices")}
          className={`px-1.5 py-0.5 mr-2 text-sm rounded capitalize ${
            type === "prices"
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          Price
        </button>
        <button
          onClick={() => setType("market_caps")}
          className={`px-1.5 py-0.5 mb-4 mr-2 text-sm rounded capitalize ${
            type === "market_caps"
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          Market Caps
        </button>
        <button
          onClick={() => setType("total_volumes")}
          className={`px-1.5 py-0.5 mr-2 mb-4 text-sm rounded capitalize ${
            type === "total_volumes"
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          Total Volumes
        </button>

        <button
          onClick={() => setDays(7)}
          className={`px-1.5 py-0.5 mr-2 mb-4 text-sm rounded capitalize ${
            days === 7
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          7d
        </button>
        <button
          onClick={() => setDays(14)}
          className={`px-1.5 py-0.5 mr-2 mb-4 text-sm rounded capitalize ${
            days === 14
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          14d
        </button>
        <button
          onClick={() => setDays(30)}
          className={`px-1.5 py-0.5 mr-2 mb-4 text-sm rounded capitalize ${
            days === 30
              ? "text-cyan bg-cyan bg-opacity-25"
              : "text-gray-100 bg-gray-200"
          }`}
        >
          30d
        </button>
      </div>
    </div>
  );
};

export default Chart;
