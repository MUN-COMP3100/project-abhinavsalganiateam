import React, { useState } from "react";
import { Link as Links } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { navLinks, socialLinks } from "../data/navbar";
import SearchBar from "./searchBar";
import { MdLogout } from "react-icons/md";
const Navbar = ({ user, onLogout }) => {
  const [nav, setNav] = useState(false);
  const Navigate = useNavigate();
  const handleClick = () => setNav(!nav);

  // useEffect(() => {
  //   if (!user) {
  //     Navigate("/auth");
  //     window.location.reload();
  //   }
  // }, [user, Navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      onLogout(null);
      Navigate("/auth");
    }
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d1d1f] text-gray-50 z-10">
      <div className="z-1">
        <h1>IMDB CLONE</h1>
      </div>
      <div className="hidden md:flex flex-row">
        <SearchBar />
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li className="p-4" key={index}>
              {link.path ? (
                // <Link to={link.title === "Login/SginUp" ? (user ? `/profile/${user.userid}` : link.path) : link.path}>
                //   {link.title === "Login/SginUp" ? (user ? "Profile" : "Login/SginUp") : link.title}
                // </Link>
                <Link to={link.path}>{link.title}</Link>
              ) : (
                <Links
                  activeClass="active"
                  to={link.scrollTo}
                  smooth={link.scroll}
                  duration={link.duration}
                  offset={link.offset}
                  isDynamic={link.isDynamic}>
                  {/* {link.title === "Login/SginUp" ? (user ? "Profile" : "Login/SginUp") : link.title} */}
                  {link.title}
                </Links>
              )}
            </li>
          ))}
          {user && (
            <div className="flex">
              <li className="p-4">
                <Link to={`/profile/${user.userid}`}>Profile</Link>
              </li>
              <li className="p-4 ">
                <button onClick={handleLogout} className="flex justify-center items-center gap-2 text-red-500">
                  Logout
                  <MdLogout />
                </button>
              </li>
            </div>
          )}
        </ul>
      </div>
      <div onClick={handleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"}>
        {navLinks.map((link, index) => (
          <li className="p-4" key={index}>
            {link.path ? (
              <Link to={link.path} onClick={handleClick}>
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
        {user && (
          <li className="p-4">
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
        <div>
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={index} onClick={handleClick}>
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
