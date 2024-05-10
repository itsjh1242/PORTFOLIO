"use client";
import React, { useState, useEffect, useRef, RefObject } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import profile_image from "@/public/profile-image.png";

// UI Components
import Nav from "../components/ui/nav";
import Footer from "../components/ui/footer";
import Badge from "../components/ui/badge";
import CustomButton from "../components/ui/button";

// Icons
import { VscChevronLeft, VscChevronRight, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

// Data Import
import ABOUT_DESC from "../components/AboutDesc";
import { STACK_LIST, STACK_BADGE, STACK_DESC } from "../components/stackDesc";
import EXP_DESC from "../components/experienceDesc";
import BANNER_DESC from "../components/WorkBannerDesc";

type mainProps = {};
const Main = (props: mainProps) => {
  const router = useRouter();
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
        {/* Main Section */}
        <MainSection sectionRef={mainRef} />
        {/* About Section */}
        <AboutSection sectionRef={aboutRef} />
        {/* Stack Section */}
        <StackSection sectionRef={stackRef} />
        {/* Work Experience Section */}
        <WorkExperienceSection sectionRef={workExperienceRef} />
        {/* Work Banner */}
        <WorkBanner sectionRef={workBannerRef} router={router} />
        {/* Footer */}
        <Footer sectionRef={contackRef} />
      </div>
    </>
  );
};

interface MainSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const MainSection = (props: MainSectionProps) => {
  const { sectionRef } = props;
  return (
    <div ref={sectionRef} className="flex w-full h-svh">
      {/* Background Profile Image */}
      <div className="absolute top-0 left-0 w-full h-svh overflow-hidden">
        <Image
          src={profile_image}
          alt="main-profile-image"
          className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 sm:scale-90 w-full h-full object-contain"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-96 max-sm:-translate-y-80 text-9xl max-sm:text-3xl font-medium -z-10">
          PORTFOLIO
        </p>
      </div>
      {/* Left Component */}
      <MainDescComponent title="Designer;" desc="보고 듣는 모든 경험에서 영감을 얻어 저만의 디자인을 다양한 프로젝트에 적용시켰습니다." isRight={false} />
      {/* Right Component */}
      <MainDescComponent title={"<Coder />"} desc="깔끔하고 효율적인 코드 작성과 생각하는 것을 좋아하는 주니어 개발자입니다." isRight={true} />
    </div>
  );
};

interface mainDescComponentProps {
  title: string;
  desc: string;
  isRight: boolean;
}
const MainDescComponent = (props: mainDescComponentProps) => {
  const { title, desc, isRight } = props;
  return (
    <>
      <div className="w-1/2 h-full sm:blur-sm hover:blur-none sm:backdrop-blur-sm hover:backdrop-blur-none transition-all z-10">
        <div className={`flex flex-col justify-center max-sm:-translate-y-48 w-full h-full p-6 ${isRight ? "items-end text-right" : "items-start"} "`}>
          <p className="text-7xl max-sm:text-3xl font-medium">{title}</p>
          <p className="text-xl max-sm:text-sm mt-6 max-w-420 break-keep">{desc}</p>
        </div>
      </div>
    </>
  );
};

interface centerTextProps {
  context: string;
}
const CenterText = (props: centerTextProps) => {
  const { context } = props;
  return (
    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-9xl max-sm:text-6xl text-center text-gray-300 font-medium opacity-50">
      {context}.
    </p>
  );
};

interface aboutSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const AboutSection = (props: aboutSectionProps) => {
  const { sectionRef } = props;
  const [progressBar, setProgressBar] = useState(0);
  const introRef = useRef<HTMLDivElement>(null);
  const mottoRef = useRef<HTMLDivElement>(null);
  const labRef = useRef<HTMLDivElement>(null);
  const strengthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    observer = new IntersectionObserver(
      ([e]) => {
        const target = e.target as HTMLElement;
        if (e.isIntersecting) {
          target.style.opacity = "1";
          setProgressBar(progressBar + 25);
        }
      },
      { threshold: 0.5 }
    );
    [introRef, mottoRef, labRef, strengthRef].map((ref, index) => {
      if (ref.current && progressBar === index * 25) {
        observer.observe(ref.current as Element);
      }
    });
  }, [progressBar]);

  return (
    <div ref={sectionRef} className="relative w-full max-w-screen h-full p-20">
      <div className="flex flex-col justify-start items-center w-full h-full">
        {/* Progress Bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 border border-transparent">
          <div className="relative top-0 left-0 border border-black transition-all duration-1000" style={{ height: `${progressBar}%` }} />
        </div>
        {/* Center Text */}
        <CenterText context="About Me" />
        {/* Components */}
        {Object.keys(ABOUT_DESC).map((about_key, index) => {
          const componentRef = [introRef, mottoRef, labRef, strengthRef];
          return (
            <AboutSectionTextWrapper
              key={index}
              wrapperRef={componentRef[index]}
              child={
                <AboutSectionText
                  header={ABOUT_DESC[about_key]?.header || ""}
                  content={ABOUT_DESC[about_key].content}
                  isRight={ABOUT_DESC[about_key].isRight}
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

interface aboutSectionTextWrapperProps {
  wrapperRef: RefObject<HTMLDivElement>;
  child: React.ReactNode;
}
const AboutSectionTextWrapper = (props: aboutSectionTextWrapperProps) => {
  const { wrapperRef, child } = props;
  return (
    <div ref={wrapperRef} className="opacity-0 transition-all duration-1000">
      {child}
    </div>
  );
};

interface aboutSectionTextProps {
  header: string;
  content: string[];
  isRight: boolean;
}
const AboutSectionText = (props: aboutSectionTextProps) => {
  const { header, content, isRight } = props;
  return (
    <div className={`flex flex-col p-3 max-sm:p-3 max-sm:w-44 ${isRight ? "translate-x-1/2 text-left" : "-translate-x-1/2 text-right"}`}>
      <p className="font-medium text-lg max-sm:text-sm">{header ? `${isRight ? "<" + header + " />" : header + ";"}` : null}</p>
      {content.map((paragraph, index) => (
        <p key={index} className="max-sm:text-xs break-keep">
          {paragraph === "" ? <br /> : paragraph}
        </p>
      ))}
    </div>
  );
};

interface stackSectionProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const StackSection = (props: stackSectionProps) => {
  const { sectionRef } = props;
  const [stackSelectorIndex, setStackSelectorIndex] = useState(0);
  const handleStackSelector = (direction: string) => {
    var index;
    if (direction === "left") {
      index = stackSelectorIndex - 1;
      setStackSelectorIndex(index < 0 ? STACK_LIST.length - 1 : index);
    } else {
      index = (stackSelectorIndex + 1) % STACK_LIST.length;
      setStackSelectorIndex(index);
    }
  };
  return (
    <div ref={sectionRef} className="relative  w-full max-w-screen h-full pt-20 pb-20 overflow-hidden">
      {/* Center Text */}
      <CenterText context="Stack" />
      {/* Stack Carousel */}
      <div className="flex justify-center items-center max-sm:flex-col w-full h-full">
        {/* Stack Selector */}
        <div className="flex justify-center items-center w-1/2 sm:w-1/3 max-sm:w-full h-96">
          <div className="flex justify-center items-center gap-3">
            <div className="cursor-pointer">
              <VscChevronLeft
                size={40}
                onClick={() => {
                  handleStackSelector("left");
                }}
              />
            </div>
            <div className="pointer-events-none">
              <Image src={`/stack/${STACK_LIST[stackSelectorIndex]}.svg`} alt="" width={150} height={150} />
            </div>
            <div className="cursor-pointer">
              <VscChevronRight
                size={40}
                onClick={() => {
                  handleStackSelector("right");
                }}
              />
            </div>
          </div>
        </div>
        {/* Stack Desc */}
        <div className="flex flex-col justify-start items-start w-1/2 sm:w-1/3 max-sm:w-full h-96 max-sm:h-full p-3">
          {/* Stack Name */}
          <p className="text-3xl max-sm:text-2xl font-medium">{STACK_DESC[STACK_LIST[stackSelectorIndex]].title}</p>
          {/* Stack Badge */}
          <div className="flex flex-row flex-wrap gap-3 mt-3 mb-6">
            {Object.keys(STACK_BADGE).map((badge, index) => {
              if (STACK_DESC[STACK_LIST[stackSelectorIndex]].level > index) {
                return (
                  <Badge
                    icon={null}
                    iconSize={null}
                    key={index}
                    bgColor="bg-blue-600"
                    fontSize="text-sm"
                    fontColor="text-white"
                    context={STACK_BADGE[Number(badge)]}
                  />
                );
              }
            })}
          </div>
          {/* Stack Desc */}
          <div className="flex flex-col flex-wrap gap-3 pr-10 break-keep">
            {STACK_DESC[STACK_LIST[stackSelectorIndex]].points.map((context, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <p className="text-lg max-sm:text-base font-medium">{context[0]}</p>
                  <p className="max-sm:text-xs">{context[1]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface workExperienceProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const WorkExperienceSection = (props: workExperienceProps) => {
  const { sectionRef } = props;
  const [accordian, setAccordian] = useState(new Array(Object.keys(EXP_DESC).length).fill(false));
  const handleAccordian = (index: number) => {
    const updatedAccordian = [...accordian];
    updatedAccordian[index] = !updatedAccordian[index];
    setAccordian(updatedAccordian);
  };
  return (
    <div ref={sectionRef} className="relative flex flex-col gap-3 justify-center items-center w-full max-w-screen h-full p-20 max-sm:p-3 max-sm:mb-20">
      {/* Center Text */}
      <CenterText context="Work Experience" />
      {Object.keys(EXP_DESC).map((item, index) => {
        return (
          <WorkExperienceAccordion
            key={index}
            title={item}
            period={EXP_DESC[item].period}
            summary={EXP_DESC[item].summary}
            location={EXP_DESC[item].location}
            task={EXP_DESC[item].task}
            url={EXP_DESC[item].url}
            keyword={EXP_DESC[item].keyword}
            accordian={accordian}
            accordianIndex={index}
            handleAccordian={handleAccordian}
          />
        );
      })}
    </div>
  );
};

interface workExperienceAccordionProps {
  title: string;
  period: string;
  summary: string;
  location: string;
  task: { [key: string]: { title: string; content: string[] } };
  url: string[];
  keyword: string[];
  accordian: boolean[];
  accordianIndex: number;
  handleAccordian: (index: number) => void;
}
const WorkExperienceAccordion = (props: workExperienceAccordionProps) => {
  const { title, period, summary, location, task, url, keyword, accordian, accordianIndex, handleAccordian } = props;
  return (
    <div
      className={`flex flex-col w-2/3 max-sm:w-full max-sm:min-h-14 border px-3 py-1 rounded shadow-sm bg-white overflow-hidden transition-all duration-1000 ${
        accordian[accordianIndex] ? "max-h-screen" : "max-h-16"
      }`}
    >
      {/* Display */}
      <div className="flex justify-between items-center mb-6">
        {/* Title, Summary */}
        <div className={`flex flex-col break-keep max-sm:w-4/5 transition-all duration-700 ${accordian[accordianIndex] ? "text-black" : "text-gray-400"}`}>
          <p className="text-lg max-sm:text-sm font-medium">{title}</p>
          <p className="max-sm:text-xs">{summary}</p>
        </div>
        {/* Period */}
        <div className="flex max-sm:flex-col gap-3 max-sm:gap-1">
          <Badge icon={null} iconSize="1em" bgColor="bg-slate-600" fontSize="text-sm" fontColor="text-white" context={period} />
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              handleAccordian(accordianIndex);
            }}
          >
            {accordian[accordianIndex] ? <VscChevronUp size={20} /> : <VscChevronDown size={20} />}
          </div>
        </div>
      </div>
      {/* Selective Display */}
      <div className="flex flex-col">
        {/* Location, Url */}
        <div className="flex gap-3 mb-3">
          <Badge icon={FaLocationDot} iconSize="1em" bgColor="bg-blue-600" fontSize="text-sm" fontColor="text-white" context={location} />
          <a href={url[1]} target="_blank">
            <Badge icon={FiExternalLink} iconSize="1em" bgColor="bg-blue-600" fontSize="text-sm" fontColor="text-white" context={url[0]} />
          </a>
        </div>
        {Object.keys(task).map((task_key, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 w-full mb-3">
              {/* Task Title */}
              <p className="text-lg max-sm:text-base font-medium">{task[task_key].title}</p>
              {/* Task Content */}
              {task[task_key].content.map((content_item, index) => {
                return (
                  <div key={index} className="">
                    <p className="break-keep max-sm:text-xs">· {content_item}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* Keyword */}
        <div className="flex flex-wrap gap-3 my-3">
          <p className="font-medium">키워드</p>
          {keyword.map((keyword_item, index) => {
            return <Badge key={index} icon={null} iconSize={null} bgColor="bg-blue-600" fontColor="text-white" fontSize="text-sm" context={keyword_item} />;
          })}
        </div>
      </div>
    </div>
  );
};

interface workBannerProps {
  sectionRef: RefObject<HTMLDivElement>;
  router: ReturnType<typeof useRouter>;
}
const WorkBanner = (props: workBannerProps) => {
  const { sectionRef, router } = props;
  const [bannerKey] = useState(Object.keys(BANNER_DESC));
  const [bannerIndex, setBannerIndex] = useState(0);
  const handleBannerIndex = (direction: string) => {
    let index;
    if (direction === "left") {
      index = bannerIndex - 1;
      setBannerIndex(index < 0 ? bannerKey.length - 1 : index);
    } else {
      index = (bannerIndex + 1) % bannerKey.length;
      setBannerIndex(index);
    }
  };

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full max-w-screen h-full p-20 max-sm:p-3">
      {/* Center Text */}
      <CenterText context="Work Banner" />
      <div className="flex justify-center items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            handleBannerIndex("left");
          }}
        >
          <VscChevronLeft size={50} />
        </div>
        <div className="flex max-sm:flex-col gap-3 border w-2/3 max-sm:w-full h-full max-sm:h-full p-3 rounded shadow-sm">
          {/* Title & Summary */}
          <div className="flex flex-col justify-between items-start w-2/3 max-sm:w-full">
            <div>
              <p className="text-lg max-sm:text-sm font-medium">{BANNER_DESC[bannerKey[bannerIndex]].title}</p>
              <p className="max-sm:text-xs">{BANNER_DESC[bannerKey[bannerIndex]].summary}</p>
            </div>
            {/* Keyword */}
            <div className="flex flex-wrap gap-3 my-3">
              <p className="font-medium">키워드</p>
              {BANNER_DESC[bannerKey[bannerIndex]].keyword.map((keyword_item, index) => {
                return <Badge key={index} icon={null} iconSize={null} bgColor="bg-blue-600" fontColor="text-white" fontSize="text-sm" context={keyword_item} />;
              })}
            </div>
          </div>
          <div className="w-1/3 max-sm:w-full">
            <div className="flex justify-start items-start w-full h-full">
              <Image src={`/banner/${bannerKey[bannerIndex]}.png`} alt="" width={400} height={400} />
            </div>
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleBannerIndex("right");
          }}
        >
          <VscChevronRight size={50} />
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
        <CustomButton
          type="secondary"
          context="프로젝트 더보기"
          action={() => {
            router.push("/work");
          }}
        />
      </div>
    </div>
  );
};

export default Main;
export { MainSection, AboutSection, StackSection, WorkExperienceSection, WorkBanner };
