"use client";

import { motion } from 'framer-motion';
import { turret } from "@/app/(pages)/page";
import { projects } from "../../public/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={`${turret.className} text-4xl md:text-5xl font-extrabold text-white mb-4`}>
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our innovative projects that are shaping the future of technology and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
