"use client";

import React, { useState } from "react";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft
} from "react-icons/fa";

interface CarouselProps {
  children: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-10/12 mx-auto flex justify-center ">
      {/* Large screens */}
      <div className="lg:flex gap-4 item hidden">
        <button onClick={prevSlide} className="mb-40 ">
          <FaArrowCircleLeft />
        </button>
        <div className="flex gap-8">
          {[
            ...children.slice(currentIndex),
            ...children.slice(0, currentIndex),
          ].slice(0, 3)}
        </div>
        <button onClick={nextSlide} className="mb-40">
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="lg:hidden flex flex-col gap-10">{...children}</div>

      {/* Medium screens */}
    </div>
  );
};

export default Carousel;
