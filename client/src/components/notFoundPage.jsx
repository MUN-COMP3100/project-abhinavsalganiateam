import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#1d1d1f] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="bg-white text-black py-2 px-4 rounded-md hover:bg-opacity-80 transition ease-in-out duration-150">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
