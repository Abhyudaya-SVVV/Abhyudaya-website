import photo from "@/../public/assets/domain/image.svg";
import collegeImg from "@/../public/assets/faculty/college-image.svg";
import EventCard from "@/components/EventCard";
import FacultySection from "@/components/FacultySection";
import SectionDividerLine from "@/components/SectionDividerLine";
import Button from "@/components/common/Button";
import Image from "next/image";
import { domainFirstLine, domainSecondLine } from "../../../public/data/domain";
import { events } from "../../../public/data/upcomingEvent";

import {
  boardMembers,
  collegeManagement,
  coordinators,
} from "@/../public/data/people";
import ContactSection from "@/components/ContactSection";
import DomainDisplay from "@/components/DomainDisplay";
import Faqs from "@/components/Faqs";
import ProjectSection from "@/components/ProjectSection";
import TeamSection from "@/components/TeamSection";
import { Turret_Road } from "next/font/google";
export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-rich-blue-bg w-full text-white">
      <section
        id="hero"
        className="w-11/12 mx-auto p-5 sm:pt-11 max-w-[110rem] pt-36"
      >
        <div className="flex flex-col-reverse md:items-center md:flex-row gap-10">
          <div className="md:w-3/5 flex flex-col gap-5">
            <h1
              className={`font-extrabold text-2xl sm:text-4xl ${turret.className} myShadow text-primary-heading`}
            >
              Abhyudaya - Coding club
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl">
              The SVITS Coding Club offers students a dynamic platform to learn,
              practice, and excel in coding. it welcomes individuals of all
              skill levels. Through engaging in coding competitions, hackathons,
              and a shared passion for technology, the club transforms ideas
              into reality. Every member, whether novice or experienced,
              contributes and is valued, creating a welcoming space for growth,
              knowledge-sharing, and inspiration in the exciting realm of coding
              and technology.
            </p>
          </div>
          <div className="lg:w-2/5">
            <Image
              loading="lazy"
              src={photo}
              alt="abhyudaya"
              className="h-auto w-full"
            />
          </div>
        </div>
        <SectionDividerLine className="" />
      </section>

      <section
        id="domain"
        className="relative w-11/12 mx-auto p-5 pt-11 flex flex-col items-center "
      >
        <h1 className="text-2xl sm:text-4xl font-bold">Our Domains</h1>
        <div className="flex lg:flex-col z-10 mt-10 w-full mx-auto justify-center items-center gap-5 mb-2">
          <DomainDisplay />
        </div>
        <Button text="View More" rounded={true} linkTo="/" />
        <SectionDividerLine />
        <div className="shapeAtDomain"></div>
      </section>
      <section
        id="events"
        className="w-10/12 mx-auto px-3 flex flex-col items-center gap-9"
      >
        <h1 className={`text-4xl font-extrabold ${turret.className}`}>
          Upcoming Events
        </h1>
        <div className="flex justify-center text-2xl">
          {events?.map((item) => {
            return (
              <EventCard
                heading={item.heading}
                key={item.id}
                img={item.img}
                desc={item.desc}
              />
            );
          })}
        </div>
        <SectionDividerLine />
      </section>
      <ProjectSection />
      <SectionDividerLine />

      <section
        id="aboutCollege"
        className=" w-10/12 mx-auto flex flex-col items-center gap-8"
      >
        <h1 className={`${turret?.className} font-extrabold text-4xl`}>
          About college
        </h1>
        <div className="flex gap-x-20 justify-center items-center flex-wrap">
          <div className="w-full sm:w-[45%] mb-4 border-8 overflow-hidden  rounded-3xl mt-2 ">
            <Image src={collegeImg} alt="" className="w-full" />
          </div>

          <div className="flex flex-col gap-10 lg:w-[45%] px-4 mt-4 md:mt-0 md:px-10">
            <h2 className={`text-2xl font-semibold `}>
              Shri Vaishnav Vidyapeeth Vishwavidyalaya
            </h2>
            <p>
              Shri Vaishnav Vidyapeeth Trust believes in taking the nation
              forward by improving the quality of life of its citizens by
              continuously working in the sphere of education, health and
              environment.To create an educational environment that engages deep
              intellectual moral and spiritual stimulation there by nurturing
              leadership. To impact learning through understanding knowledge
              enrichment skill development and positive attitude formation.To
              encourage innovation thinking with self discipline & social
              responsibility.
            </p>
          </div>
        </div>
        <SectionDividerLine />
      </section>

      <FacultySection faculties={collegeManagement} />
      <FacultySection faculties={coordinators} />

      <TeamSection team={boardMembers} />
      <div className="flex justify-center">
        <Button linkTo="/team" text="View more" rounded={true} />
      </div>
      <SectionDividerLine />
      <section id="faqs" className="flex flex-col items-center gap-4">
        <h1 className={`mx-auto text-3xl font-bold ${turret.className}`}>
          FAQs
        </h1>
        <Faqs />
        <SectionDividerLine />
      </section>
      {/* 
      <ContactSection /> */}
    </main>
  );
}
