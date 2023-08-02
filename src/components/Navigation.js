import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="absolute w-[90%] lg:w-[40%] md:w-[80%] mt-24 lg:mt-16  flex items-center justify-around border border-cyan rounded-lg
        font-nunito"
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          ` w-full text-center m-2 rounded-lg font-bold
            ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan"
            }
          capitalize `
        }
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          ` w-full text-center m-2 rounded-lg font-bold
            ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan"
            }
          capitalize `
        }
      >
        trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) =>
          ` w-full text-center m-2 rounded-lg font-bold
            ${
              isActive
                ? "bg-cyan text-gray-300"
                : "bg-gray-200 text-gray-100 hover:text-cyan"
            }
              capitalize `
        }
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
