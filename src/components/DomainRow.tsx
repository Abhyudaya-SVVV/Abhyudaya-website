'use client';

import { useState } from "react";
import DomainCard from "./DomainCard";
import { motion } from "framer-motion";

interface Domain {
  id: number;
  name: string;
  img: string;
  description: string;
}

interface DomainArrProps {
  domainArr: Domain[];
}

const DomainRow = ({ domainArr }: DomainArrProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
    >
      {domainArr?.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <DomainCard
            domain={item}
            isHovered={hoveredId === item.id}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DomainRow;
