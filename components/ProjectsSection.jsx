"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { BanknotesIcon, BeakerIcon, BugAntIcon, ClockIcon, CursorArrowRaysIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const projectsData = [
  {
    id: 1,
    title: "AWS Serverless Email Marketing Application",
    description: "A marketing application that automates email campaigns with custom email content and scheduling, delivering a different advertisement to subscribers each week.",
    tags: ["SES", "EventBridge", "S3", "Lambda", "IAM"],
    IconComponent: EnvelopeIcon,
    gitUrl: "/",
},
{
    id: 2,
    title: "Machine Learning Model for Molecular Solubility Prediction",
    description: "A model that employs linear regression techniques and data splitting strategies to analyze and predict solubility based on molecular properties.",
    image: "/images/projects/3.png",
    tags: ["Python", "scikit-learn"], 
    IconComponent: BeakerIcon,
    gitUrl: "https://github.com/ynguyen0/ml-solubility-prediction",
  },
  {
    id: 3,
    title: "Artificial Societies on Simstation",
    description: "A multi-agent simulation framework in Java, enabling complex agent-based interactions and behaviors such as social dynamics, stochastic behavior, and diffusion processes.",
    image: "/images/projects/5.png",
    tags: ["Java"], 
    IconComponent: BugAntIcon,
    gitUrl: "https://github.com/ynguyen0/CS151-SimStation",
  },
  {
    id: 4,
    title: "Amazon Web Scraper",
    description: "A web scraper that monitors product prices and automatically sends an email alert when the price drops below a specified threshold.",
    tags: ["Python", "BeautifulSoup", "Requests"],
    IconComponent: BanknotesIcon,
    gitUrl: "https://github.com/ynguyen0/amazon-web-scraper",
  },
  {
    id: 5,
    title: "Google Chrome Extension",
    description: "A Pomodoro timer with integrated to-do list functionality.",
    tags: ["Javascript", "HTML", "CSS", "React.js", "TypeScript"],
    IconComponent: ClockIcon,
    gitUrl: "https://github.com/ynguyen0/chrome-extension",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A custom portfolio website built with Next.js and Tailwind CSS.",
    tags: ["Javascript", "Next.js", "Tailwind CSS"],
    IconComponent: CursorArrowRaysIcon,
    gitUrl: "/",
  },
];

const tags = ["Java", "Python", "scikit-learn", "SES", "EventBridge", "S3", "Lambda", "IAM", "BeautifulSoup", "Requests", "Javascript", "HTML", "CSS", "React.js", "TypeScript", "Next.js", "Tailwind CSS"];

const ProjectsSection = () => {
  console.log("Projects Data:", projectsData);
  const [selectedTags, setSelectedTags] = useState([]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredProjects = projectsData.filter((project) =>
    selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag))
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#3b3b3b] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags} 
              IconComponent={project.IconComponent}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;