"use client";
import React, { useRef } from "react";

import { prefix } from "./components/ContextAPI";

// UI Section
import Nav from "./components/ui/nav";
import Landing from "./components/ui/main/Landing";
import AboutSection from "./components/ui/main/About";
import StackSection from "./components/ui/main/Stack";
import WorkExperienceSection from "./components/ui/main/WorkExperience";
import WorkBannerSection from "./components/ui/main/WorkBanner";
import Footer from "./components/ui/footer";

// Data Import
import { ABOUT_DESC } from "./components/AboutDesc";
import { STACK_BADGE, STACK_DESC } from "./components/StackDesc";
import { EXP_DESC } from "./components/WorkExperienceDesc";
import { BANNER_DESC } from "./components/WorkBannerDesc";

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const workBannerRef = useRef<HTMLDivElement>(null);
  const contackRef = useRef<HTMLDivElement>(null);
  const quickMoveRef = [mainRef, aboutRef, stackRef, workExperienceRef, workBannerRef, contackRef];

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
        <AboutSection script={{ about_dsec: ABOUT_DESC }} sectionRef={aboutRef} prefix={prefix} />
        {/* Stack Section */}
        <StackSection script={{ stack_desc: STACK_DESC, stack_badge: STACK_BADGE }} sectionRef={stackRef} prefix={prefix} />
        {/* Work Experience Section */}
        <WorkExperienceSection script={{ exp_desc: EXP_DESC }} sectionRef={workExperienceRef} prefix={prefix} />
        {/* Work Banner */}
        <WorkBannerSection script={{ banner_desc: BANNER_DESC }} sectionRef={workBannerRef} prefix={prefix} />
        {/* Footer */}
        <Footer sectionRef={contackRef} prefix={prefix} />
      </div>
    </>
  );
};

export default Home;
