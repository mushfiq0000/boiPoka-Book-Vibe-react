import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Bookdetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    tags,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You store the Book into the Booklist",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Store it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Store!",
          text: "Your book has been stored.",
          icon: "success",
        });
      }
    });

    addToStoredDB(id);
  };

  return (
    <div
      className="lg:flex flex-col md:flex-row  h-full
     p-6 gap-7"
    >
      <div className="lg:w-1/2 ">
        <img className="p-9 rounded-xl bg-gray-100" src={image} alt="" />
      </div>
      <div className="lg:w-1/2">
        <div className="space-y-2 mb-3 ">
          <h1 className="text-4xl font-semibold">{bookName}</h1>
          <p className="font-semibold text-gray-500"> By : {bookName}</p>
        </div>

        <div className="divider"></div>
        <p>{category}</p>
        <div className="divider"></div>
        <div>
          <p className="pb-5">
            <span className=" font-semibold">Review :</span> {review}
          </p>

          <div>
            {" "}
            <span className="font-semibold mr-3">Tag</span>
            {tags.map((tag) => (
              <button className="badge bg-gray-100 p-3 rounded-3xl border-0 text-green-500 mr-2">
                #{tag}
              </button>
            ))}
            <div className="divider"></div>
            <div className="mb-5">
              <p>
                <span className="md:mr-8 mr-3">Number of Pages :</span>{" "}
                <span className="font-semibold">{totalPages}</span>
              </p>

              <p>
                <span className="md:mr-22 mr-17">Publisher :</span>{" "}
                <span className="font-semibold">{publisher}</span>
              </p>
              <p>
                <span className="md:mr-7 mr-2">Year of Publishing : </span>{" "}
                <span className="font-semibold">{yearOfPublishing}</span>
              </p>
              <p>
                <span className="md:mr-28 mr-22">Rating :</span>{" "}
                <span className="font-semibold">{rating}</span>
              </p>
            </div>
            <div className="flex gap-5">
              <button onClick={() => handleMarkAsRead(id)} className="btn">
                Mark as Read
              </button>
              <button className="btn bg-[#50b1c9] text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
