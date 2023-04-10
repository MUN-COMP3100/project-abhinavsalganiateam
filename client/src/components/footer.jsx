import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">Movies</h3>
            <ul className="list-none">
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Popular
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Upcoming
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">TV Shows</h3>
            <ul className="list-none">
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Popular
                </a>
              </li>
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Top Rated
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  On TV
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">People</h3>
            <ul className="list-none">
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Popular People
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Born Today
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <ul className="list-none">
              <li className="mb-1">
                <a href="/" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-center">&copy; {new Date().getFullYear()} IMDb Clone. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
