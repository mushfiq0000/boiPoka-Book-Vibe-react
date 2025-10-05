import React from "react";
import Navbar from "../../COMPONENTS/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../COMPONENTS/Footer/FOOTER.JSX";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
