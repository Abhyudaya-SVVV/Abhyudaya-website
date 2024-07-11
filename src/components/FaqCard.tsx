import cx from "classnames";
import { Dispatch, SetStateAction } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type Props = {
  question: {
    id: number;
    ques: string;
    desc: string;
  };
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
};

console.log("changes");

const FaqCard = ({ question, currentQuestion, setCurrentQuestion }: Props) => {
  const onClickHandler = () => {
    if (question.id === currentQuestion) {
      setCurrentQuestion(0);
      return;
    }
    setCurrentQuestion(question.id);
  };

  const isOpen = question.id === currentQuestion;

  const descriptionClass = cx({
    hidden: !isOpen,
    "md:p-2": true,
    "leading-7": true,
    "mt-2": true,
  });

  return (
    <div
      onClick={onClickHandler}
      className="border-2 border-rich-blue-lightLine rounded-3xl w-4/5 px-4 py-2 m-2 md:px-12 md:py-4 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="text-md font-bold">{question.ques}</div>
        {isOpen ? (
          <FaChevronUp className="text-rich-blue-lightLine" />
        ) : (
          <FaChevronDown className="text-rich-blue-lightLine" />
        )}
      </div>
      <p className={descriptionClass}>{question.desc}</p>
    </div>
  );
};

export default FaqCard;