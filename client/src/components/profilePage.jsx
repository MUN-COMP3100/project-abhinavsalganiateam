import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();
  // console.log(`id${id}`);
  
  const [user, setUser] = useState({});
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
          <img className="rounded-full w-32 h-32 mx-auto" src="https://api.dicebear.com/6.x/adventurer/svg?seed=felix" alt="user" />
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
          <button className="bg-blue-500 text-white px-5 py-2 text-lg rounded-md hover:bg-blue-600">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
