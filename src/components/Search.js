import React, { useContext, useState } from "react";
import searchLogo from "../../src/assets/search-icon.svg";
import { Cryptocontext } from "../context/Cryptocontext";
import debounce from "lodash.debounce";

const SearchInput = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const { searchData, setCoinSearch, setSearchData } =
    useContext(Cryptocontext);

  const handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearch(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearch("");
    setSearchData();
  };

  return (
    <>
      <form
        className="flex w-full  lg:items-center bg-gray-200 lg:w-60 xl:w-96 px-2 rounded-md border border-transparent
    focus-within:border-cyan font-nunito relative"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={handleInput}
          value={search}
          className="bg-gray-200 border-0 outline-0 placeholder:text-gray-100 w-full"
          placeholder="search here..."
        />
        <button type="submit">
          <img src={searchLogo} alt="search" />
        </button>
      </form>
      {/* shows the search results */}
      {search.length > 0 ? (
        <ul
          className="z-10 absolute left-0 top-11 rounded overflow-x-hidden bg-gray-200 bg-opacity-60 p-4 w-full h-96
             overflow-y-scroll backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200"
        >
          {searchData ? (
            searchData.map((coin) => (
              <li
                key={coin?.id}
                className="p-1 flex items-center cursor-pointer "
                onClick={() => {
                  selectCoin(coin?.id);
                }}
              >
                <img className="w-[1rem]" src={coin?.thumb} alt={coin?.name} />
                <div className="ml-2"> {coin?.name} </div>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <div
                className="h-8 w-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}{" "}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  const { getSearchResult } = useContext(Cryptocontext);

  const debounceFun = debounce(function (value) {
    getSearchResult(value);
  }, 2000);

  return (
    <div className="relative w-full lg:w-60 xl:w-96 mb-4 lg:mb-0">
      <SearchInput handleSearch={debounceFun} />
    </div>
  );
};

export default Search;
