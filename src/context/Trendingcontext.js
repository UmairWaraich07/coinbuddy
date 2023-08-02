import { useLayoutEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState([]);

  const getTrendData = async () => {
    setTrendData();

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const data = await response.json();
      setTrendData(data?.coins);
    } catch (error) {
      alert(error.message);
    }
  };

  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendData, resetTrendingResult }}>
      {children}
    </TrendingContext.Provider>
  );
};
