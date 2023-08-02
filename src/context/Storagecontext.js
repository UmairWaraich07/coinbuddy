import { createContext, useContext, useEffect, useState } from "react";
import { Cryptocontext } from "./Cryptocontext";

export const Storagecontext = createContext({});

export const StorageProvider = ({ children }) => {
  const [allCoins, setAllCoins] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const { sortBy, currency } = useContext(Cryptocontext);

  const saveCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins")) || false;
    console.log("old coins from local storage", oldCoins);
    if (oldCoins.includes(coinId)) {
      return null;
    } else {
      let newCoins = [...oldCoins, coinId];
      setAllCoins(newCoins);
      localStorage.setItem("coins", JSON.stringify(newCoins));
    }
  };
  const removeCoin = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins")) || false;
    if (oldCoins.includes(coinId)) {
      let filterCoins = oldCoins.filter((coin) => coin !== coinId);
      localStorage.setItem("coins", JSON.stringify(filterCoins));
      setAllCoins(filterCoins);
    }
  };

  const getSavedData = async (totalCoins = allCoins) => {
    console.log("total coins in saved", totalCoins);

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(
          ","
        )}&order=${sortBy}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      const data = await response.json();
      //   console.log("saved DAta", data);
      setSavedData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const resetSavedData = () => {
    // getSavedData(allCoins);
    console.log("Saved Data refreshed 🔃");
  };

  useEffect(() => {
    if (allCoins.length > 0) {
      getSavedData(allCoins);
    } else {
      setSavedData();
    }
  }, [allCoins]);

  useEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;

    if (!isThere) {
      // set the localstorage with empty array
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      // set the state with current values from the local storage
      let totalCoins = JSON.parse(localStorage.getItem("coins"));
      setAllCoins(totalCoins);

      if (totalCoins.length > 0) {
        getSavedData(totalCoins);
      }
    }
  }, []);

  return (
    <Storagecontext.Provider
      value={{ allCoins, saveCoin, removeCoin, savedData, resetSavedData }}
    >
      {children}
    </Storagecontext.Provider>
  );
};
