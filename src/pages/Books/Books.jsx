import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {



  return (
    <div>
        <h1 className="text-3xl text-center p-6">Book</h1>
      <Suspense fallback={<span>LODING.....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-5">
          {
          data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))
          }
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
