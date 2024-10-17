import { Dispatch, SetStateAction } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  question: {
    id: number;
    ques: string;
    desc: string;
  };
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
};

const FaqCard = ({ question, currentQuestion, setCurrentQuestion }: Props) => {
  const onClickHandler = () => {
    if (question.id === currentQuestion) {
      setCurrentQuestion(0);
      return;
    }
    setCurrentQuestion(question.id);
  };

  const isOpen = question.id === currentQuestion;

  return (
    <motion.div
      onClick={onClickHandler}
      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white">{question.ques}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <FaChevronUp className="text-blue-400" />
          ) : (
            <FaChevronDown className="text-blue-400" />
          )}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-4 pb-4 md:px-6 md:pb-6 text-gray-300 leading-relaxed">
              {question.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqCard;
