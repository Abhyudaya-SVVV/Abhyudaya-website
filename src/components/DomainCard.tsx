import Image from "next/image";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
interface DomainCardProps {
  domain: {
    id: number;
    name: string;
    img: string;
  };
}

const DomainCard = ({ domain }: DomainCardProps) => {
  return (
    <div className="flex items-center flex-col ">
      
      <DirectionAwareHover imageUrl={domain.img} className="w-[35vw] sm:w-[280px] lg:w-fit rounded-t-lg">
        <h1></h1>
      </DirectionAwareHover>
      <div className="bg-rich-blue-lightLine text-black rounded-b-lg w-full px-5 sm:py-2 lg:py-4 opacity-40">
        <p className="text-center">{domain.name}</p>
      </div>
    </div>
  );
};

export default DomainCard;
