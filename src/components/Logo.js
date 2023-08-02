import React from "react";
import { Link } from "react-router-dom";
import CryptoLogo from "../../src/assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[1.5rem] left-[0.5rem] md:left-[1.5rem] flex items-center text-lg text-cyan"
    >
      <img src={CryptoLogo} alt="CryptoBucks" />
      <span>CoinBuddy</span>
    </Link>
  );
};

export default Logo;
