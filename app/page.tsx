"use client";
import React, { useRef } from "react";

import { prefix } from "../lib/prefix";

// UI Section
import Nav from "./components/ui/Nav";
import Landing from "./components/ui/main/Landing";
import AboutSection from "./components/ui/main/About";
import StackSection from "./components/ui/main/Stack";
import WorkExperienceSection from "./components/ui/main/WorkExperience";
import ProjectSection from "./components/ui/main/Project";
import Footer from "./components/ui/main/Footer";

// Data Import
import { ABOUT_DESC } from "./db/AboutDesc";
import { STACK_BADGE, STACK_DESC } from "./db/StackDesc";
import { EXP_DESC } from "./db/WorkExperienceDesc";
import { PROJECT_DESC } from "./db/ProjectDesc";

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contackRef = useRef<HTMLDivElement>(null);
  const quickMoveRef = [mainRef, aboutRef, stackRef, workExperienceRef, projectRef, contackRef];

  const handleQuickMove = (index: number) => {
    quickMoveRef[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav handleQuickMove={handleQuickMove} />
      <div className="flex flex-col w-full h-full">
        {/* Landing Section */}
        <Landing sectionRef={mainRef} prefix={prefix} />
        {/* About Section */}
        <AboutSection script={{ about_desc: ABOUT_DESC }} sectionRef={aboutRef} prefix={prefix} />
        {/* Stack Section */}
        <StackSection script={{ stack_desc: STACK_DESC, stack_badge: STACK_BADGE }} sectionRef={stackRef} prefix={prefix} />
        {/* Work Experience Section */}
        <WorkExperienceSection script={{ exp_desc: EXP_DESC }} sectionRef={workExperienceRef} prefix={prefix} />
        {/* Project Section */}
        <ProjectSection script={{ project_desc: PROJECT_DESC }} sectionRef={projectRef} prefix={prefix} />
        {/* Footer */}
        <Footer sectionRef={contackRef} prefix={prefix} />
      </div>
    </>
  );
};

export default Home;
