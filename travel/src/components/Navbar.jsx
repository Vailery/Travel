import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4, HiSun, HiMoon } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { useDarkMode } from "../services/hooks/useDarkMode";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center dark:bg-gray-700/90 h-20 px-4 absolute z-10 text-white transition duration-500">
      <div>
        <h1
          onClick={handleNav}
          className={logo ? "hidden" : "block cursor-pointer"}
        >
          BEACHES.
        </h1>
      </div>

      <ul className="hidden md:flex">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Destinations</li>
        <li className="cursor-pointer">Travel</li>
        <li className="cursor-pointer">View</li>
        <li className="cursor-pointer">Book</li>
      </ul>

      <div className="hidden md:flex">
        <BiSearch className="mr-2 cursor-pointer" size={20} />
        <BsPerson className="mr-2 cursor-pointer" size={20} />
        <span onClick={() => setTheme(colorTheme)}>
          {colorTheme === "light" ? (
            <HiSun className="cursor-pointer" size={20} />
          ) : (
            <HiMoon className="cursor-pointer" size={20} />
          )}
        </span>
      </div>

      <div className="flex md:hidden z-10">
        <span onClick={() => setTheme(colorTheme)} className="mr-2">
          {colorTheme === "light" ? (
            <HiSun className="cursor-pointer" size={20} />
          ) : nav ? (
            <HiMoon className="cursor-pointer text-black" size={20} />
          ) : (
            <HiMoon className="cursor-pointer" size={20} />
          )}
        </span>

        <div onClick={handleNav}>
          {nav ? (
            <AiOutlineClose
              className="text-black dark:text-white cursor-pointer"
              size={20}
            />
          ) : (
            <HiOutlineMenuAlt4 size={20} className="cursor-pointer" />
          )}
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black dark:text-white left-0 top-0 w-full bg-gray-100/90 dark:bg-gray-700/90 px-4 py-7 flex flex-col transition duration-500"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>BEACHES.</h1>
          <li className="border-b">Destinations</li>
          <li className="border-b">Home</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6 border-0">Search</button>
            <button className="border-0">Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
