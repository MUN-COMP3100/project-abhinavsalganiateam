import React from "react";
import { Link as Links } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

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
              <Links
                activeClass="active"
                to={link.scrollTo}
                smooth={true}
                duration={link.duration}
                offset={link.offset}
                isDynamic={link.isDynamic}>
                {link.title}
              </Links>
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
          <li className="py-6 text-4fxl" key={index}>
            <li href={link.path} legacyBehavior scroll={link.scroll}>
              <Links activeClass="active" to={link.scrollTo} smooth={true} duration={500} offset={link.offset} onClick={HandleClick}>
                {link.title}
              </Links>
            </li>
          </li>
        ))}
        {/*social icons */}
        <div>
          <ul className="flex">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <li href={link.path}>
                  <link.icon size={20} />
                </li>{" "}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
