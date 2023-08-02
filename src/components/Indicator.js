import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Indicator = ({ current_price, high, low }) => {
  const [green, setGreen] = useState("");

  useEffect(() => {
    let total = high - low;
    let greenZone = ((high - current_price) * 100) / total;
    setGreen(Math.ceil(greenZone));
  }, [current_price, high, low]);

  return (
    <div className="flex">
      <span
        className="h-1.5 rounded-l-lg bg-red w-[50%]"
        style={{ width: `${100 - green}%` }}
      >
        &nbsp;
      </span>
      <span
        className="h-1.5 rounded-r-lg bg-green w-[50%]"
        style={{ width: `${green}%` }}
      >
        &nbsp;
      </span>
    </div>
  );
};

export default Indicator;
