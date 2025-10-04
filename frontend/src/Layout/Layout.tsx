import Navbar from "../components/Navbar/Navbar";
// import React from "react";
import { Outlet } from "react-router-dom";
import SearchBox from "../components/SearchBox/SearchBox";
// import SearchBox from "./../components/SearchBox/SearchBox";
// import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="flex items-center  w-full h-fit flex-col">
      <Navbar />
      <SearchBox />
      <Outlet />
    </div>
  );
};
export default Layout;
