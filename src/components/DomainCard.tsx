import Image from "next/image";

interface DomainCardProps {
  domain: {
    id: number;
    name: string;
    img: string;
  };
}

const DomainCard = ({ domain }: DomainCardProps) => {
  return (
    <div className="flex items-center flex-col">
      <Image
        loading="lazy"
        className=" w-[337px] lg:w-fit rounded-t-lg"
        src={domain.img}
        alt={domain.name}
      />
      <div className="bg-rich-blue-lightLine text-black rounded-b-lg w-full px-5 sm:py-2 lg:py-4 opacity-40">
        <p className="text-center">{domain.name}</p>
      </div>
    </div>
  );
};

export default DomainCard;
