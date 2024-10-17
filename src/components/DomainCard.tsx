import Image from "next/image";
import { motion } from "framer-motion";

interface DomainCardProps {
  domain: {
    id: number;
    name: string;
    img: string;
  };
  isHovered: boolean;
}

const DomainCard = ({ domain, isHovered }: DomainCardProps) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={domain.img}
          alt={domain.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      </motion.div>
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-t from-purple-900 via-blue-800 to-transparent`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div 
        className={`absolute bottom-0 left-0 right-0 p-4 text-white`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-2">{domain.name}</h3>
        <p className="text-sm">Click to explore more</p>
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 bg-yellow-400 text-blue-900 rounded-full p-2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : -180 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default DomainCard;
