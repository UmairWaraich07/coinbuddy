import React, { useContext } from "react";
import { Cryptocontext } from "../context/Cryptocontext";

const Pagination = () => {
  const { activePage, setActivePage, totalCoins, perPage, cryptoData } =
    useContext(Cryptocontext);
  const TotalNumbers = Math.floor(totalCoins / perPage);

  const next = () => {
    if (activePage + 10 <= TotalNumbers) {
      setActivePage((prevState) => prevState + 10);
    }
  };

  const prev = () => {
    if (activePage - 10 >= 1) {
      setActivePage((prevState) => prevState - 10);
    }
  };

  const incrementPage = () => {
    if (activePage < TotalNumbers) {
      setActivePage((prevState) => prevState + 1);
    }
  };

  const descrementPage = () => {
    if (activePage > 1) {
      setActivePage((prevState) => prevState - 1);
    }
  };

  if (cryptoData && cryptoData.length > 1) {
    return (
      <div>
        <ul className="flex items-center justify-end gap-4 md:gap-2 xl:gap-4">
          <li>
            <button onClick={descrementPage} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
                className="rotate-180"
              >
                <path
                  fill="#14FFEC"
                  d="M16.016 1.003c-8.285 0-15 6.715-15 15 0 8.284 6.715 15 15 15 8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15Zm9.192 24.192A12.953 12.953 0 1 1 6.917 6.848a12.953 12.953 0 0 1 18.291 18.347Z"
                />
                <path
                  fill="#14FFEC"
                  d="m14.977 10.312 4.691 4.69H8.008v2h11.66l-4.69 4.691 1.414 1.415 7.105-7.105-7.105-7.106-1.415 1.415Z"
                />
              </svg>
            </button>
          </li>

          {activePage - 10 > 1 && (
            <li>
              <button
                onClick={prev}
                className="outline-0 w-8 h-8 rounded-full flex items-center justify-center font-bold tracking-[2px]"
              >
                ...
              </button>
            </li>
          )}
          {activePage > 1 && (
            <li>
              <button
                onClick={descrementPage}
                className="outline-0 w-8 h-8 rounded-full flex items-center justify-center hover:text-cyan bg-gray-200"
              >
                {activePage - 1}
              </button>
            </li>
          )}
          <li>
            <button
              disabled
              className="outline-0 w-8 h-8 rounded-full flex items-center justify-center bg-cyan text-gray-200"
            >
              {activePage}
            </button>
          </li>
          {activePage < TotalNumbers && (
            <li>
              <button
                onClick={incrementPage}
                className="outline-0 w-8 h-8 rounded-full flex items-center justify-center hover:text-cyan bg-gray-200"
              >
                {activePage + 1}
              </button>
            </li>
          )}
          {activePage + 10 < TotalNumbers && (
            <li>
              <button
                onClick={next}
                className="outline-0 w-8 h-8 rounded-full flex items-center justify-center font-bold tracking-[2px]"
              >
                ...
              </button>
            </li>
          )}
          {activePage + 10 < TotalNumbers && (
            <li>
              <button
                onClick={() => setActivePage(TotalNumbers)}
                className="outline-0 w-8 h-8 rounded-full flex items-center justify-center hover:text-cyan bg-gray-200"
              >
                {TotalNumbers}
              </button>
            </li>
          )}

          <li>
            <button onClick={incrementPage} className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="none"
              >
                <path
                  fill="#14FFEC"
                  d="M16.016 1.003c-8.285 0-15 6.715-15 15 0 8.284 6.715 15 15 15 8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15Zm9.192 24.192A12.953 12.953 0 1 1 6.917 6.848a12.953 12.953 0 0 1 18.291 18.347Z"
                />
                <path
                  fill="#14FFEC"
                  d="m14.977 10.312 4.691 4.69H8.008v2h11.66l-4.69 4.691 1.414 1.415 7.105-7.105-7.105-7.106-1.415 1.415Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
