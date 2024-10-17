import React from "react";
import Image from "next/image";
import { Turret_Road } from "next/font/google";
import collegeImg from "@/../public/assets/faculty/college-image.svg";
import EventCard from "@/components/EventCard";
import FacultySection from "@/components/FacultySection";
import SectionDividerLine from "@/components/SectionDividerLine";
import Button from "@/components/common/Button";
import { domainFirstLine, domainSecondLine } from "../../../public/data/domain";
import { events } from "../../../public/data/upcomingEvent";
import DomainRow from "@/components/DomainRow";
import {
  boardMembers,
  collegeManagement,
  coordinators,
} from "@/../public/data/people";
import Faqs from "@/components/Faqs";
import ProjectSection from "@/components/ProjectSection";
import TeamSection from "@/components/TeamSection";
import { Domain } from "domain";

export const turret = Turret_Road({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-rich-blue-bg to-indigo-900 text-white min-h-screen">
      <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video src="./intro.mp4" className="object-cover w-full h-full" autoPlay loop muted></video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className={`${turret.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold text-primary-heading mb-6 animate-fade-in-up`}>
            Abhyudaya - Coding Club
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
            Transforming ideas into reality through code, innovation, and collaboration.
          </p>
          <Button linkTo="#domain" text="Explore Our Domains" rounded={true} className="animate-fade-in-up animation-delay-600" />
        </div>
      </section>

      <section id="domain" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${turret.className} text-4xl sm:text-5xl font-extrabold text-center mb-12`}>
            Our Domains
          </h2>
          <div className="space-y-12">
            <DomainRow domainArr={domainFirstLine as Domain[]} />
            <DomainRow domainArr={domainSecondLine as Domain[]} />
          </div>
        </div>
      </section>

      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rich-blue-bg to-indigo-900">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${turret.className} text-4xl sm:text-5xl font-extrabold text-center mb-12 text-white`}>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events?.map((item) => (
              <EventCard
                key={item.id}
                heading={item.heading}
                img={item.img}
                desc={item.desc}
                date={item.date}
                time={item.time}
                location={item.location}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectSection />

      <section id="aboutCollege" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <h2 className={`${turret.className} text-5xl sm:text-6xl font-extrabold text-center mb-16 text-blue-900 animate-fade-in-up`}>
            Discover Our College
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
              <Image 
                src={collegeImg} 
                alt="Shri Vaishnav Vidyapeeth Vishwavidyalaya" 
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300" 
              />
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-blue-800">Shri Vaishnav Vidyapeeth Vishwavidyalaya</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Shri Vaishnav Vidyapeeth Trust, we're committed to advancing our nation by enhancing the quality of life for all citizens. Our focus on education, health, and the environment creates a nurturing space for:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                <li>Deep intellectual growth</li>
                <li>Moral and spiritual development</li>
                <li>Leadership cultivation</li>
                <li>Innovation with self-discipline</li>
                <li>Social responsibility</li>
              </ul>
              <div className="mt-8">
                <Button 
                  linkTo="#" 
                  text="Explore Our Legacy" 
                  rounded={true} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FacultySection faculties={collegeManagement} />
      <FacultySection faculties={coordinators} />

      <TeamSection team={boardMembers} />
      <div className="flex justify-center py-8">
        <Button linkTo="/team" text="View Full Team" rounded={true} />
      </div>

      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${turret.className} text-4xl sm:text-5xl font-extrabold text-center mb-12`}>
            Frequently Asked Questions
          </h2>
          <Faqs />
        </div>
      </section>

      <footer className="bg-rich-blue-bg py-8 text-center">
        <p>&copy; 2023 Abhyudaya Coding Club. All rights reserved.</p>
      </footer>
    </main>
  );
}
