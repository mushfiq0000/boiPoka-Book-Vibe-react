import React from "react";
import Navbar from "../../COMPONENTS/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../COMPONENTS/Footer/FOOTER.JSX";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
