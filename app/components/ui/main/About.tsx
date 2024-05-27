"use client";
import React, { useState, useEffect, useRef, RefObject } from "react";

// Interface
import { AboutDescInterface } from "../../../db/AboutDesc";

// UI Components
import CenterText from "../CenterText";

interface AboutSectionProps {
  prefix: string;
  script: { about_desc: AboutDescInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

interface AboutSectionTextWrapperProps {
  item_key: number;
  wrapperRef: RefObject<HTMLDivElement>;
  child: React.ReactNode;
}

interface AboutSectionTextProps {
  header: string;
  content: string[];
  isRight: boolean;
}

const AboutSection = (props: AboutSectionProps) => {
  const { script, sectionRef } = props;
  const about_desc = script.about_desc;

  const [progressBar, setProgressBar] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);
  const labRef = useRef<HTMLDivElement>(null);
  const strengthRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const componentRef = React.useMemo(() => [introRef, mottoRef, labRef, strengthRef, certificateRef], []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const progressBarPerHeight = 100 / componentRef.length;
    observer = new IntersectionObserver(
      ([e]) => {
        const target = e.target as HTMLElement;
        if (e.isIntersecting) {
          target.style.opacity = "1";
          setProgressBar(progressBar + progressBarPerHeight);
        }
      },
      { threshold: 0.5 }
    );
    componentRef.map((ref, index) => {
      if (ref.current && progressBar === index * progressBarPerHeight) {
        observer.observe(ref.current as Element);
      }
    });
  }, [componentRef, progressBar]);

  return (
    <div ref={sectionRef} className="relative w-full max-w-screen h-full p-20 max-sm:p-1">
      <div className="flex flex-row flex-wrap justify-start items-center w-full max-w-screen h-full">
        {/* Progress Bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-transparent py-10 max-sm:py-5">
          <div className="relative top-0 left-0 border border-black transition-all duration-1000" style={{ height: `${progressBar}%` }} />
        </div>
        {/* Center Text */}
        <CenterText context="About Me" />
        {/* Components */}
        <div className="w-1/2 max-sm:w-1/2" />
        {Object.keys(about_desc).map((about_key, index) => {
          return (
            <AboutSectionTextWrapper
              wrapperRef={componentRef[index]}
              key={index}
              item_key={index}
              child={
                <AboutSectionText
                  header={about_desc[about_key]?.header || ""}
                  content={about_desc[about_key].content}
                  isRight={about_desc[about_key].isRight}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

const AboutSectionTextWrapper = (props: AboutSectionTextWrapperProps) => {
  const { item_key, wrapperRef, child } = props;
  return (
    <>
      <div ref={wrapperRef} className="w-1/2 opacity-0 transition-all duration-1000">
        {child}
      </div>
      {item_key !== 0 && item_key % 2 === 1 ? (
        <>
          <div className="w-1/2" />
          <div className="w-1/2" />
        </>
      ) : null}
    </>
  );
};

const AboutSectionText = (props: AboutSectionTextProps) => {
  const { header, content, isRight } = props;
  return (
    <div className={`flex flex-col p-3 ${isRight ? "text-left" : "text-right"}`}>
      <p className="font-medium text-lg max-sm:text-sm">{header ? `${isRight ? "<" + header + " />" : header + ""}` : null}</p>
      {content.map((paragraph, index) => (
        <p key={index} className="max-sm:text-xs break-keep">
          {paragraph === "" ? <br /> : paragraph}
        </p>
      ))}
    </div>
  );
};

export default AboutSection;
