import React from "react";
import Link from "next/link";
import { CodeBracketIcon, BanknotesIcon, BeakerIcon, BugAntIcon, ClockIcon, CursorArrowRaysIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


const ProjectCard = ({ title, description, gitUrl, tags, IconComponent }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group">
      <div className="absolute top-2 right-2 z-10">
        <IconComponent className="w-8 h-8 text-[#efeee8] rounded-full p-1" />
      </div>
      
      <div className="p-6 bg-[#8ba888]">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-stone-700">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-stone-700 text-white text-xs font-semibold px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-stone-500">No tags available</span>
          )}
        </div>
      </div>
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-stone-400 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 hidden group-hover:flex">
        <Link
          href={gitUrl}
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-white hover:border-white group/link"
        >
          <CodeBracketIcon className="h-10 w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
