import React, { useState } from "react";
import { Link as Links } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { navLinks, socialLinks } from "../data/navbar";

import SearchBar from "./searchBar";
const Navbar = ({ user }) => {
  const [nav, setNav] = useState(false);
  console.log("Navbar user:", user);
  const HandleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d1d1f] text-gray-50 z-10">
      <div className="z-1">
        {/* <Image src={Logo} alt="logo" style={{ width: "50px" }} /> */}
        <h1>IMDB CLONE</h1>
      </div>
      {/* search bar */}

      {/*menu */}
      <div className="hidden md:flex flex-row">
        <SearchBar />
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li className="p-4" key={index}>
              {link.path ? (
                <Link to={link.title === "Login/SginUp" ? (user ? `/profile/${user.userid}` : link.path) : link.path}>
                  {link.title === "Login/SginUp" ? (user ? "Profile" : "Login/SginUp") : link.title}
                </Link>
              ) : (
                <Links
                  activeClass="active"
                  to={link.scrollTo}
                  smooth={link.scroll}
                  duration={link.duration}
                  offset={link.offset}
                  isDynamic={link.isDynamic}>
                  {link.title === "Login/SginUp" ? (user ? "Profile" : "Login/SginUp") : link.title}
                </Links>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/*hamburgur menu */}
      <div onClick={HandleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/*mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"}>
        {navLinks.map((link, index) => (
          <li className="p-4" key={index}>
            {link.path ? (
              <Link to={link.path} onClick={HandleClick}>
                {link.title}
              </Link>
            ) : (
              <Links
                activeClass="active"
                to={link.scrollTo}
                smooth={link.scroll}
                duration={link.duration}
                offset={link.offset}
                isDynamic={link.isDynamic}>
                {link.title}
              </Links>
            )}
          </li>
        ))}
        {/*social icons */}
        <div>
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={index} onClick={HandleClick}>
                <a href={link.path}>
                  <link.icon size={20} />
                </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
