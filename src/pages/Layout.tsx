import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [location, setLocation] = useState(useLocation());
  let path = location.pathname.split("/");

  useEffect(() => {
    path = location.pathname.split("/");
    globalThis.usuario = path[2];
  }, [location]);

  return (
    <>
      <Welcome></Welcome>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
