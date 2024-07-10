import { turret } from "@/app/(pages)/page";
import cx from "classnames";
import Image from "next/image";

interface FacultyCardProp {
  person: { id: number; img: string; name: string; post: string };
  isTopMgmt: boolean;
}

const FacultyCard = ({ person, isTopMgmt }: FacultyCardProp) => {
  const { img, name, post } = person;
  const imgClass = cx({
    "mb-0": true,
    "min-w-64": isTopMgmt,
  });

  return (
    <div className="flex flex-col items-center w-4/5 md:w-auto xl:w-64 gap-1">
      <div className="border-[#194EEF] border-4 overflow-hidden rounded-3xl">
        <Image
          src={img}
          className={`${imgClass} h-full`}
          alt="coordinator-img"
        />
      </div>
      <h2 className={`${turret.className} text-2xl font-semibold`}>{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default FacultyCard;
