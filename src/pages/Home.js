import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <main
      className="w-full h-full text-white relative flex flex-col 
      content-center  items-center font-nunito scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200"
    >
      <div className="h-screen w-screen bg-gray-300 -z-10 fixed scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200" />
      <Logo />
      <Navigation />
      <Outlet />
    </main>
  );
};

export default Home;
