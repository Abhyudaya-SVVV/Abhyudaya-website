import React from "react";
import { team } from "../../../../public/data/people";
import TeamCard from "@/components/TeamCard";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="bg-rich-blue-bg w-full text-white min-h-screen">
      <TeamSection team={team} />
    </div>
  );
};

export default Team;
