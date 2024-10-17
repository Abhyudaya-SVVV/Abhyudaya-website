"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

type ProjectCardProps = {
  project: {
    id: number;
    heading: string;
    features: Array<string>;
    img: string;
    desc?: string;
  };
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { heading, img, desc, features } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <Image 
          src={img} 
          alt={heading} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3">{heading}</h3>
        {desc && <p className="text-gray-300 text-sm mb-4 flex-grow">{desc}</p>}
        <div className="mb-4">
          <h4 className="font-semibold text-blue-400 mb-2 text-sm uppercase tracking-wide">Key Features:</h4>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <FiChevronRight className="text-yellow-400 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div 
          className="self-end bg-blue-500 rounded-full p-2 mt-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronRight className="text-white w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
