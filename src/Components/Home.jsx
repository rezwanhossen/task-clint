import React from "react";
import logo from "../assets/logo.jpg";
const Home = () => {
  return (
    <div>
      <div>
        <img className=" h-[100vh] w-full" src={logo} alt="" />
      </div>
      <div className="mt-10">
        <h2 className=" text-2xl font-bold text-center">Contact</h2>
      </div>
    </div>
  );
};

export default Home;
