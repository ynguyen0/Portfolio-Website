"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <p>
        I’m currently a student at San Jose State University, majoring in Computer Science and Linguistics.
        I chose to study these two fields because I recognize a growing demand for professionals who can merge technical
        skills with an understanding of human language and communication. My research interests include
        human-computer interaction and natural language processing. I aim to apply these interests in a career focused on 
        machine learning and big data analytics.
      </p>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <p>
        Alongside my studies, I have a strong interest in web development and UI/UX design, where I work on small projects
        as a growing, self-taught developer. I have experience with several programming languages, including Java, Python, JavaScript,
        HTML, and CSS. I’ve also utilized industry-standard platforms like Git and AWS. For a detailed overview of my experience, please
        refer to my resume and GitHub profile.
      </p>
    ),
  },
  {
    title: "Qualities",
    id: "qualities",
    content: (
      <p>
        My MBTI personality type is ISTJ, which reflects my dependable nature and commitment to completing tasks accurately
        and on time. With a strong attention to detail, I consistently maintain high standards in my work. I approach problems with a
        logical and methodical mindset, always focusing on practical and realistic solutions.
      </p>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id = "about" className="text-black">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#3b3b3b] mb-4">About Me</h2>
          <div className="flex flex-col mt-2">
            <div className="flex justify-start text-center">
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "}
                Education{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("qualities")} active={tab === "qualities"}>
                {" "}
                Qualities{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
