import { turret } from "@/app/(pages)/page";
import TeamCard from "./TeamCard";

type Person = {
  id: number;
  img: string;
  name: string;
  post: string;
};

type TeamSectionProps = {
  team: Array<Person>;
};

const TeamSection = ({ team }: TeamSectionProps) => {
  const isBoardMember = team[0].post === "President";
  return (
    <section className="w-10/12 mx-auto flex flex-col items-center gap-10">
      <h1
        className={`mt-12 text-3xl lg:text-4xl font-semibold text-center md:text-start ${turret.className}`}
      >
        {isBoardMember ? "Board Member - Team" : "Our Team"}
      </h1>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 gap-16 flex-wrap mb-12">
        {team?.map((person) => (
          <TeamCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
