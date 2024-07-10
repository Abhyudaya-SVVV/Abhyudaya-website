"use client";

import React, { useState } from "react";
import svvvLogo from "@/../public/assets/header/SVVV.svg";
import AbhyudayaLogo from "@/../public/assets/abhyudaya-logo.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleModel = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="sm:bg-rich-blue-bg bg-[#111644ee] fixed sm:static w-full z-20 sm:opacity-90  ">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="py-2 flex ">
          <Image
            src={svvvLogo}
            className=" md:translate-y-1 h-10 sm:h-20 w-10 sm:w-20"
            alt="Logo"
            
          />
          <Image
            src={AbhyudayaLogo}
            className="-translate-y-1 h-10 sm:h-20 w-10 sm:w-20"
            alt="Logo"
          />
        </div>
        <div className="text-white hidden sm:flex sm:translate-x-16">
          {navData?.map((item, idx) => (
            <Link
              href={item?.path}
              key={idx}
              className="px-4 py-8 text-[#EEE] hover:text-[#fff] hover:bg-[#080D51] text-nowrap"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div className=" sm:invisible relative">
          <button onClick={toggleModel}>
            {!navOpen && <FiAlignJustify color="white" size={35} />}
            {navOpen && <FaTimes color="#ddd" size={35} />}
          </button>
          {navOpen && (
            <div className="absolute  right-4 flex flex-col">
              {navData?.map((item, idx) => (
                <Link
                  href={item?.path}
                  key={idx}
                  className="px-5 py-1 border-b bg-[#0f1437b0] text-[#eee]  hover:text-[#fff]  text-nowrap"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <button className="hidden lg:block relative px-4 py-2 text-2xl font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg">
          <span className="relative z-10">Contact us</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
