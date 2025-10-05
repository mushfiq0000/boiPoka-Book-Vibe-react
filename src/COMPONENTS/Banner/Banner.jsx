import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 h-100 rounded-3xl shadow">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookimage}
          className="max-w-sm rounded-lg shadow-2xl mb-4"
        />
        <div className="p-4">
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
         
          <button className="btn btn-primary mt-5">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
