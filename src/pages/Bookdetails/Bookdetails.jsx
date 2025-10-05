import React from "react";
import { useLoaderData, useParams } from "react-router";

const Bookdetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  return(
        <div>
           <img src={image} alt="" />
        </div>
  ) 
};

export default Bookdetails;
