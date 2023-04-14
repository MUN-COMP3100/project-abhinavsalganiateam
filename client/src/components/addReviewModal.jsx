import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddReviewModal = ({ isOpen, handleClose, user, movieid, movie_title }) => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // const popup = ({ message, handleClose }) => {
  //   return (
  //     <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center bg-opacity-50 bg-gray-900">
  //       <div className="bg-gray-800 rounded-lg p-6">
  //         <h2 className="text-2xl font-bold mb-4 text-center text-white">{message}</h2>
  //         <button
  //           className="mt-5 px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
  //           onClick={() => {
  //             handleClose();
  //           }}>
  //           Go Home
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      userid: user.userid,
      movie_id: movieid,
      movie_title: movie_title,
      review: review,
      rating: rating,
    };
    try {
      fetch("http://localhost:3000/userReview/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setMessage("Review Added");
            // handleClose();
            // popup({ message, handleClose });
            //show a popup message that the review was added
            window.alert("Review Added");
            handleClearForm();
            handleClose();
          } else {
            setMessage("Error adding review");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleClearForm = () => {
    setUsername("");
    setReview("");
    setRating("");
    setMessage("");
  };

  return (
    <div
      className={`${isOpen ? "fixed inset-0 z-50 overflow-y-auto" : "hidden"} flex justify-center items-center bg-opacity-50 bg-gray-900`}>
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Add Review</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            {user ? (
              <div className="flex flex-col gap-1">
                <p className="text-white font-semibold">User ID</p>
                <p className="text-slate-300 bg-gray-700 rounded-md px-1">{user.name}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                {/* <label htmlFor="username" className="text-gray-300 font-bold">
                  Name
                </label>
                <input
                  id="username"
                  className="border-gray-500 rounded-md py-2 px-3 w-full bg-gray-700 text-white"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                /> */}
                <p className=" text-center text-sm text-red-600">Please Login to add a Review</p>
                <button className="py-2 px-4 bg-amber-600 rounded-md text-white" onClick={() => navigate("/auth")}>
                  Login
                </button>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="review" className="block text-gray-300 font-bold mb-2">
              Review
            </label>
            <textarea
              id="review"
              className="border-gray-500 rounded-md py-2 px-3 w-full h-24 bg-gray-700 resize-none text-white"
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-gray-300 font-bold mb-2">
              Rating
            </label>
            {/* create a star rating component here  */}
            <div className="flex w-1/3 justify-center items-center p-1">
              <input
                type="input"
                id="rating"
                className="border-gray-500 rounded-md py-2 px-3 w-full bg-gray-700 text-white"
                placeholder="Enter your rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
              <label htmlFor="rating" className="text-gray-300 font-bold ml-2 flex justify-center items-center gap-1">
                /10 <FaStar className="text-amber-400" />
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="py-2 px-4 bg-gray-600 rounded-md text-white mr-2"
              onClick={() => {
                handleClose();
                handleClearForm();
              }}>
              Close
            </button>
            <button
              type="submit"
              className={`bg-amber-500 text-white px-5 py-2 text-lg rounded-md hover:bg-amber-600${
                !user ? " opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!user}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
