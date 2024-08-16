import React from "react";
import Navber from "./Components/Navbar/Navber";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
