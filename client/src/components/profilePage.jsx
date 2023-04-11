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
      <div className="bg-black shadow-md rounded-md p-8 w-full sm:w-1/2 lg:w-1/3 text-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">User Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <p className="text-gray-100">{user.name != null ? user.name : ""}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <p className="text-gray-100">{user.email != null ? user.email : ""}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">User ID</label>
          <p className="text-gray-100">{user.userid != null ? user.userid : ""}</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
