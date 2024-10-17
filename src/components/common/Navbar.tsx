"use client";

import React, { useState, useEffect } from "react";
import svvvLogo from "@/../public/assets/header/SVVV.svg";
import AbhyudayaLogo from "@/../public/assets/header/abhyudaya-logo.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleModel = () => {
    setNavOpen(!navOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-11/12 mx-auto flex items-center justify-between py-4">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={svvvLogo}
            className="h-12 sm:h-16 w-auto"
            alt="SVVV Logo"
          />
          <Image
            src={AbhyudayaLogo}
            className="h-12 sm:h-16 w-auto"
            alt="Abhyudaya Logo"
          />
        </motion.div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navData?.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item?.path}
                className="text-white text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 relative group"
              >
                {item?.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="lg:hidden relative">
          <motion.button 
            onClick={toggleModel} 
            className="focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: navOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {!navOpen ? (
                <FiAlignJustify color="white" size={35} />
              ) : (
                <FiX color="#ddd" size={35} />
              )}
            </motion.div>
          </motion.button>
          <AnimatePresence>
            {navOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-xl overflow-hidden"
              >
                {navData?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Link
                      href={item?.path}
                      className="block px-4 py-2 text-sm text-white hover:text-yellow-300 transition-colors duration-200"
                    >
                      {item?.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <Link href='/contact' className="hidden lg:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out shadow-lg overflow-hidden group"
          >
            <span className="relative z-10">Contact us</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
