import Image from "next/image";

interface TeamCardProp {
  person: { id: number; img: string; name: string; post: string };
}

const TeamCard = ({ person }: TeamCardProp) => {
  const { img, name, post } = person;
  return (
    <div className="flex flex-col items-center gap-3 bg-rich-blue-bgDark border-dashed border-4 rounded-xl border-rich-blue-border py-5 px-6">
      <Image src={img} alt="" />
      <p className="text-xl text-center font-bold "> {post}</p>
      <p>{name}</p>
    </div>
  );
};

export default TeamCard;
