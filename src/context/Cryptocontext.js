import { createContext, useLayoutEffect, useState } from "react";

// create a crypto context
export const Cryptocontext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchData, setSearchData] = useState();
  const [searchCoin, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [coinData, setCoinData] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [totalCoins, setTotalCoins] = useState(null);
  const [perPage, setPerPage] = useState(10);

  const getCryptoData = async () => {
    setCryptoData();
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${searchCoin}&order=${sortBy}&per_page=${perPage}&page=${activePage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      const data = await response.json();
      console.log(data);
      setCryptoData(data);
    } catch (error) {
      alert(error.message);
    }

    setTotalCoins(10002);
    // try {

    //   const response = await fetch(
    //     `https://api.coingecko.com/api/v3/coins/list`
    //   );
    //   const data = await response.json();
    //   console.log("total length", data.length);
    //   setTotalCoins(data.length);
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const getCoinData = async (coinId) => {
    setCoinData();

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      );
      const data = await response.json();
      // console.log("🪙", data);
      setCoinData(data);
    } catch (error) {
      alert("Unable to Fetch Coin Data : ", error.message);
    }
  };

  const getSearchResult = async (query) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const data = await response.json();
      setSearchData(data?.coins);
      console.log(searchData);
    } catch (error) {
      alert(error.message);
    }
  };

  const resetFunction = () => {
    setActivePage(1);
    setPerPage(10);
    setCoinSearch("");
  };

  useLayoutEffect(() => {
    getCryptoData();
  }, [searchCoin, currency, sortBy, activePage, perPage]);

  return (
    <Cryptocontext.Provider
      value={{
        cryptoData,
        searchData,
        getSearchResult,
        setCoinSearch,
        setSearchData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        activePage,
        setActivePage,
        totalCoins,
        perPage,
        setPerPage,
        resetFunction,
        getCoinData,
        coinData,
      }}
    >
      {children}
    </Cryptocontext.Provider>
  );
};
