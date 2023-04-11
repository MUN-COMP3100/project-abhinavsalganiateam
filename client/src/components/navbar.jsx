import React from "react";
import { Link as Links } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks, socialLinks } from "../data/navbar";

function Navbar() {
  const [nav, setNav] = useState(false);
  const HandleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1d1d1f] text-gray-50 z-10">
      <div className="z-1">
        {/* <Image src={Logo} alt="logo" style={{ width: "50px" }} /> */}
        <h1>IMDB CLONE</h1>
      </div>
      {/*menu */}
      <div className="hidden md:flex">
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li className="p-4" key={index}>
              {link.path ? (
                <Link href={link.path}>{link.title}</Link>
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
              <Link href={link.path}>{link.title}</Link>
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
              <li key={index}>
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
}

export default Navbar;
