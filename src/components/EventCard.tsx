'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";

type EventCardProps = {
  heading: string;
  desc: string;
  img: string;
  // date: string;
  // time: string;
  // location: string;
};

const EventCard = ({ heading, desc, img }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64">
        <Image
          src={img}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center"
        >
          <FaCalendar className="mr-2" />
          {/* {date} */}
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-2xl font-bold text-white mb-3"
        >
          {heading}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="text-gray-300 mb-4"
        >
          {desc}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-col space-y-2 text-sm text-gray-300"
        >
          <div className="flex items-center">
            {/* <FaClock className="mr-2" /> */}
            {/* {time} */}
          </div>
          <div className="flex items-center">
            {/* <FaMapMarkerAlt className="mr-2" /> */}
            {/* {location} */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
          >
            RSVP NOW
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default EventCard;
