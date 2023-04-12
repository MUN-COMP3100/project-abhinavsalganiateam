import React, { useState } from "react";

const AddReviewModal = ({ isOpen, handleClose, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [review, setReview] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ username, review });
    setUsername("");
    setReview("");
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          onClick={handleClose}
        >
          <div className="relative w-full max-w-lg p-5 mx-auto my-6 bg-white rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold leading-6 text-gray-900">Add a Review</h3>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mt-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="username">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="review">
                  Review
                </label>
                <textarea
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  name="review"
                  value={review}
                  onChange={handleReviewChange}
                  required
                ></textarea>
              </div>
              <div className="mt-8 text-right">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-bold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-4 px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Add Review
                </button>
              </div>
            </form>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </div>
      )}
    </>
  );
};

export default AddReviewModal;
