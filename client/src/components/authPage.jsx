import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for login or signup
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="bg-[#1d1d1f] shadow-md rounded-md p-8 w-full sm:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-6 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:border-amber-500"
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
