import Image from "next/image";
import Button from "./common/Button";

type EventCardProps = {
  heading: string;
  desc: string;
  img: string;
};

const EventCard = ({ heading, desc, img }: EventCardProps) => {
  return (
    <div className="flex gap-8 lg:gap-20 justify-center items-center lg:items-start flex-col lg:flex-row">
      <h1
        className={`block lg:hidden font-extrabold border-4 text-xl md:text-3xl border-rich-blue-border border-opacity-70 px-6 md:px-16 py-2 text-center rounded-2xl `}
      >
        {heading}
      </h1>

      <div className="lg:w-[45%] md:min-h-[350px] sm:border-8 sm:rounded-3xl overflow-hidden mt-2">
        <Image src={img} alt="" className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-10 md:w-1/2 lg:justify-evenly items-start h-full lg:w-[45%] md:px-10">
        <h1
          className={`hidden lg:block font-extrabold border-4 text-3xl border-rich-blue-border border-opacity-70  px-16 py-2 text-center rounded-2xl `}
        >
          {heading}
        </h1>
        <p>{desc}</p>

        <Button text="RSVP NOW" rounded={false} linkTo="/" />
      </div>
    </div>
  );
};

export default EventCard;
