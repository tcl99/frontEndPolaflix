import React from "react";
import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Welcome></Welcome>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
