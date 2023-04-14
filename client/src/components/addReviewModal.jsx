import React, { useState } from "react";

const AddReviewModal = ({ isOpen, handleClose }) => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, review })
    })
      .then((res) => res.json())
      .then(() => {
        setUsername("");
        setReview("");
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  const handleClearForm = () => {
    setUsername("");
    setReview("");
  };

  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 z-50 overflow-y-auto" : "hidden"
      } flex justify-center items-center bg-opacity-50 bg-gray-900`}
    >
      <div className="bg-gray-700 rounded-md p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Review</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 font-bold mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="border-gray-500 rounded-md py-2 px-3 w-full bg-gray-800"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-gray-300 font-bold mb-2"
            >
              Review
            </label>
            <textarea
              id="review"
              className="border-gray-500 rounded-md py-2 px-3 w-full h-24 bg-gray-800 resize-none"
              placeholder="Write your review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="py-2 px-4 bg-gray-600 rounded-md text-white mr-2"
              onClick={() => {
                handleClose();
                handleClearForm();
              }}
            >
              Close
            </button>
            <button
              type="submit"
              className="py-2 px-4 bg-green-500 rounded-md text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;
