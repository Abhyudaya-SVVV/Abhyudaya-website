import { turret } from "@/app/(pages)/page";
import cx from "classnames";
import Image from "next/image";

interface FacultyCardProp {
  person: { id: number; img: string; name: string; post: string };
  isTopMgmt: boolean;
}

const FacultyCard = ({ person, isTopMgmt }: FacultyCardProp) => {
  const { img, name, post } = person;
  const minWclass = isTopMgmt ? "sm:min-w-[300px] sm:min-h-[400px]" : "sm:min-w-[150px] sm:min-h-[350px]";

  return (
    <div className={`flex flex-col items-center  xl:w-64 gap-1  h-[26vw] min-h-[250px]  w-[35vw] text-sm ${minWclass}`} >
      <div className="border-[#194EEF] border-4 overflow-hidden rounded-3xl">
        <Image
          src={img}
          alt="coordinator-img"
        />
      </div>
      <h2 className={`${turret.className} font-semibold text-center`}>{name}</h2>
      <p className="text-center">{post}</p>
      </div>
  );
};

export default FacultyCard;
