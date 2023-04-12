import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ setUserState }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Handle form submission for login or signup
    try {
      const response = await fetch(`http://localhost:3000/login?email=${email}&password=${password}`);
      const result = await response.json();

      if (result) {
        console.log("User logged in successfully");
        try {
          fetch(`http://localhost:3000/useremail/${email}`).then((response) => {
            response.json().then((result1) => {
              console.log(result1);
              // localStorage.setItem("userid", result1[0].userid);
              setUserState(result1[0]);
              navigate(`/profile/${result1[0].userid}`);
            });
          });
        } catch (error) {
          console.log(error);
        }
        // navigate(`/profile/${result1.userid}}`);

        // Handle successful login, e.g., redirect to another page
      } else {
        console.log("User not found or incorrect credentials");
        setError("User not found or incorrect credentials");
        // Handle unsuccessful login, e.g., show an error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle error, e.g., show an error message
    }
    // Handle signup
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-[#1d1d1f] shadow-md rounded-md p-8 w-full sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                User ID
              </label>
              <input
                type="text"
                id="name"
                required
                className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:border-amber-500 text-black"
              />
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:border-amber-500 text-black"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:border-amber-500 text-black"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:border-amber-500 text-black"
            />
            {/*error message indicator */}
            <p id="message" className="text-red-500 text-xs italic pt-2">
              {error}
            </p>
          </div>
          <button type="submit" className="bg-amber-500 text-white w-full py-2 rounded-md hover:bg-amber-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-4">
          <span>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={toggleAuthMode} className="text-amber-500 underline hover:text-amber-600">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
