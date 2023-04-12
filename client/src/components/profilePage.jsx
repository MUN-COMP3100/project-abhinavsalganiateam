import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  // console.log(`id${id}`);
  const [user, setUser] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);

  const EditModal = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newName, setNewName] = useState(user.name);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    // setPasswordsMatch(false);
    const nameRef = useRef();
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();
    const isButtonDisabled = !passwordsMatch || oldPassword === "" || newPassword === "" || confirmPassword === "";

    useEffect(() => {
      setPasswordsMatch(false);
      if (newPassword !== "" && confirmPassword !== "") {
        if (newPassword === confirmPassword) {
          setPasswordsMatch(true);
        } else {
          setPasswordsMatch(false);
        }
      } else {
        setPasswordsMatch(false);
      }
    }, [newPassword, confirmPassword]);

    useEffect(() => {
      setPasswordsMatch(false);
    }, []);

    const handleEditSubmit = (e) => {
      e.preventDefault();
      console.log("Edit form submitted");
      // Implement your logic for checking the passwords and updating the user data
    };

    return (
      <div className={`fixed inset-0 z-10 flex items-center justify-center text-black`}>
        <div className="bg-black drop-shadow-lg rounded-md p-10 w-full sm:w-3/4 lg:w-1/2 text-white">
          <h2 className="text-3xl font-semibold mb-8 text-center">Edit Profile</h2>
          <form onSubmit={handleEditSubmit}>
            <div className="mb-5">
              <label className="block text-lg font-medium mb-2">Name</label>
              <input
                ref={nameRef} // Add reference to input field
                type="text"
                className="w-full p-2 rounded-md border-2 focus:border-white bg-gray-950"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block text-lg font-medium mb-2">Old Password</label>
              <input
                ref={oldPasswordRef} // Add reference to input field
                type="password"
                className="w-full p-2 rounded-md border-2 border-white bg-gray-950"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block text-lg font-medium mb-2">New Password</label>
              <input
                ref={newPasswordRef} // Add reference to input field
                type="password"
                className="w-full p-2 rounded-md border-2 border-white bg-gray-950"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="block text-lg font-medium mb-2">Confirm Password</label>
              <input
                ref={confirmPasswordRef} // Add reference to input field
                type="password"
                className="w-full p-2 rounded-md border-2 border-white bg-gray-950"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <p className={`text-sm ${passwordsMatch ? "text-green-500" : "text-red-500"}`}>
              {passwordsMatch ? "Passwords match" : newPassword === "" && confirmPassword === "" ? "" : "Passwords do not match"}
            </p>
            <div className="flex justify-between">
              <button
                type="submit"
                className={`bg-blue-500 text-white px-5 py-2 text-lg rounded-md hover:bg-blue-600${
                  !passwordsMatch ? " opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!passwordsMatch}>
                Save
              </button>

              <button
                type="button"
                className="bg-red-500 text-white px-5 py-2 text-lg rounded-md hover:bg-red-600"
                onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  useEffect(() => {
    try {
      fetch(`http://localhost:3000/user/${id}`).then((response) => {
        response.json().then((result1) => {
          // console.log(result1[0]);
          if (result1[0] === undefined) {
            console.log("User not found");
          } else {
            setUser(result1[0]);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-[#1d1d1f] flex items-center justify-center">
      <div className="bg-black drop-shadow-lg rounded-md p-10 w-full sm:w-3/4 lg:w-1/2 text-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">User Profile</h2>

        <div>
          <img
            className="rounded-full w-32 h-32 mx-auto"
            src={`https://api.dicebear.com/6.x/bottts/svg?seed=${user.userid}`}
            alt="avatar"
          />
        </div>
        <div className="mb-5">
          <label className="block text-lg font-medium mb-2">Name</label>
          <p className="text-gray-100 text-lg">{user.name != null ? user.name : ""}</p>
        </div>
        <div className="mb-5">
          <label className="block text-lg font-medium mb-2">Email</label>
          <p className="text-gray-100 text-lg">{user.email != null ? user.email : ""}</p>
        </div>
        <div className="mb-5">
          <label className="block text-lg font-medium mb-2">User ID</label>
          <p className="text-gray-100 text-lg">{user.userid != null ? user.userid : ""}</p>
        </div>
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">Movie Reviews</label>
          <ul className="text-gray-100 text-lg">
            {user.reviews && user.reviews.length > 0 ? (
              user.reviews.map((review, index) => (
                <li key={index}>
                  {review.movie}: {review.rating} - {review.comment}
                </li>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-5 py-2 text-lg rounded-md hover:bg-blue-600" onClick={() => setShowEditModal(true)}>
            Edit Profile
          </button>
        </div>
      </div>
      {showEditModal && <EditModal />}
    </div>
  );
};

export default ProfilePage;
