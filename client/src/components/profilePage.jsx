import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, useNavigate, Link } from "react-router-dom";

const ProfilePage = ({ userState, setUserState }) => {
  const { id } = useParams();
  // console.log(`id${id}`);
  const [user, setUser] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  // const [movie, setMovie] = useState({});

  // const getMovieTitle = (movieId) => {
  //   fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.title);
  //       return data.title + "";
  //       // setMovie(data);
  //     });
  // };

  const getReviews = (id) => {
    try {
      fetch(`http://localhost:3000/userReview/user/${id}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setUserReviews(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews(id);
  }, [id]);

  const userNavigate = useNavigate();
  const handleDelete = () => {
    console.log("Delete button clicked");
    // Implement your logic for deleting the user
    //confirm delete
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        fetch(`http://localhost:3000/user/delete/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount) {
              setUserState(null);
              userNavigate("/auth");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Delete cancelled");
    }
  };
  const EditModal = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [newName, setNewName] = useState(user.name);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [oldpasswordMatch, setOldpasswordMatch] = useState(false);
    // setPasswordsMatch(false);
    const nameRef = useRef();
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    useEffect(() => {
      setPasswordsMatch(false);
      if ((newPassword !== "" && confirmPassword !== "") || oldPassword !== "") {
        if (newPassword === confirmPassword) {
          setPasswordsMatch(true);
        } else {
          setPasswordsMatch(false);
        }

        if (oldPassword.match(user.password)) {
          setOldpasswordMatch(true);
        } else {
          setOldpasswordMatch(false);
        }
      }
    }, [newPassword, confirmPassword, oldPassword]);

    useEffect(() => {
      setPasswordsMatch(false);
    }, []);

    const isButtonDisabled = !passwordsMatch || oldPassword === "" || newPassword === "" || confirmPassword === "" || !oldpasswordMatch;
    const handleEditSubmit = (e) => {
      e.preventDefault();
      console.log("Edit form submitted");
      // Implement your logic for checking the passwords and updating the user data
      try {
        fetch(`http://localhost:3000/user/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userid: user.userid,
            name: newName,
            email: user.email,
            password: newPassword,
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged) {
              setShowEditModal(false);
              window.location.reload();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <p className={`text-sm ${passwordsMatch && oldpasswordMatch ? "text-green-500" : "text-red-500"}`}>
              {oldPassword === "" || newPassword === "" || confirmPassword === ""
                ? "Please fill all the fields"
                : oldpasswordMatch
                ? passwordsMatch
                  ? "Passwords match"
                  : "Passwords do not match"
                : "Old password is incorrect"}
            </p>
            <div className="flex justify-between">
              <button
                type="submit"
                className={`bg-blue-500 text-white px-5 py-2 text-lg rounded-md hover:bg-blue-600${
                  isButtonDisabled ? " opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isButtonDisabled}>
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
          <div className="text-gray-100 text-lg flex flex-col gap-3">
            {userReviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-800 shadow-xl rounded-lg px-4 py-6 my-4 transition-all duration-200 ease-in-out hover:scale-105">
                  <Link to={`/movieDetails/${review.movie_id}`} className="font-bold text-xl text-white mb-2">
                    {review.movie_title}
                  </Link>
                  <p className="text-sm text-gray-400 mb-4">{review.review}</p>
                  <div className="flex justify-between">
                    {/* <p className="text-gray-400 italic">{review.userid}</p> */}
                    <div className="flex items-center">
                      <p className="text-yellow-500 font-semibold mr-2">{review.rating}</p>
                      <FaStar className="text-amber-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={userState ? "flex justify-between" : "hidden"}>
          <button className="bg-blue-500 text-white px-5 py-2 text-lg rounded-md hover:bg-blue-600" onClick={() => setShowEditModal(true)}>
            Edit Profile
          </button>
          <button className="bg-inherit text-red-500 px-5 py-2 text-lg rounded-md hover:underline ml-5" onClick={handleDelete}>
            Delete Profile
          </button>
        </div>
      </div>
      {showEditModal && <EditModal />}
    </div>
  );
};

export default ProfilePage;
