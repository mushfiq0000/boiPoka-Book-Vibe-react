import React from "react";
import Banner from "../../COMPONENTS/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {

    const data = useLoaderData()
    
    

  return (
    <div className="p-5">
      <Banner />
      <Books data={data}/>
    </div>
  );
};

export default Home;
