"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../public/data/faqs";
import FaqCard from "./FaqCard";
import { turret } from "@/app/(pages)/page";

const Faqs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section className="w-full py-20" id="faqs">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* <h2 className={`${turret.className} text-4xl md:text-5xl font-extrabold text-white mb-4`}>
            Frequently Asked Questions
          </h2> */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Abhyudaya and our programs.
          </p>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {faqs?.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <FaqCard
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  question={item}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
