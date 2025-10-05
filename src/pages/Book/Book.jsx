import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const { bookName, image, rating, category, tags, yearOfPublishing, publisher, bookId } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    
    <div className="card bg-base-100  shadow-md  p-3 h-105">
      <figure className="p-4 bg-gray-100  rounded-2xl">
        <img className="h-44" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-10">
          {
          tags.map((tag) => (
            <button className="badge bg-gray-100 p-3 rounded-3xl border-0 text-green-500">{tag}</button>
          ))
          }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>
          Book by : {publisher}
        </p>

        <div className="border-1 border-dashed border-gray-400"></div>
        <div className="card-actions justify-between">
          <div className="">{category}</div>
          <div className="flex items-center gap-2">
            {rating}
            <IoIosStarHalf />
          </div>
        </div>
      </div>
    </div>
    
    </Link>
  );
};

export default Book;
