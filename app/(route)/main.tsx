"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import profile_image from "@/public/profile-image.png";

// Icons
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

// Data Import
import { STACK_LIST, STACK_BADGE, STACK_DESC } from "../components/stackDesc";

type mainProps = {};
export default function Main(props: mainProps) {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex w-full h-svh">
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
      {/* About Section */}
      <AboutSection />
      <StackSection />
    </div>
  );
}

type mainDescComponentProps = {
  title: string;
  desc: string;
  isRight: boolean;
};
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

type centerTextProps = { context: string };
const CenterText = (props: centerTextProps) => {
  const { context } = props;
  return (
    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-9xl text-center text-gray-400 font-medium opacity-50">{context}</p>
  );
};

type aboutSectionProps = {};
const AboutSection = (props: aboutSectionProps) => {
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
    <div className="relative w-full max-w-screen h-full p-20">
      <div className="flex flex-col justify-start items-center w-full h-full">
        {/* Progress Bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 border border-transparent">
          <div className="relative top-0 left-0 border border-black transition-all duration-1000" style={{ height: `${progressBar}%` }} />
        </div>
        {/* Center Text */}
        <CenterText context="About Me" />
        {/* Components */}
        <div ref={introRef} className="opacity-0 transition-all duration-1000">
          <AboutSectionText
            header="intro"
            content={["안녕하세요, 주니어 개발자 김준현입니다.", "동서대학교 컴퓨터공학부에서 소프트웨어공학을 전공했습니다."]}
            isRight={true}
          />
          <AboutSectionText
            header=""
            content={[
              "소프트웨어 공학과 데이터베이스 구축을 집중적으로 깊이있게 공부할 수 있었고,",
              "API 구축을 통해 사용자와 시스템간의 상호작용이 가능한 서비스 기반의 다양한 웹/앱 개발을 했습니다.",
            ]}
            isRight={true}
          />
        </div>
        <div ref={mottoRef} className="opacity-0 transition-all duration-1000">
          <AboutSectionText
            header="motto"
            content={[
              "높은 완성도의 서비스 기반의 프로젝트를 개발하는 것은 효율적이고 클린한 코드를 적는 것 뿐만 아니라",
              "나타내고자하는 핵심 내용을 직관적이고 유연성있게 표현하는 것도 중요한 가치로 생각하고 있습니다.",
            ]}
            isRight={false}
          />
          <AboutSectionText
            header=""
            content={[
              "제게 코드는 붓과 물감이고, 웹/앱은 캔버스입니다.",
              "평소에 보고 듣는 모든 경험을 디자인 요소로 가공하여 다양한 프로젝트에 녹여냈습니다.",
            ]}
            isRight={false}
          />
        </div>
        <div ref={labRef} className="opacity-0 transition-all duration-1000">
          <AboutSectionText
            header="Lab"
            content={[
              "학부생 때, UbSE(Ubiquitous SW Engineering) 연구실에서 AI+X 연구원으로 활동하며",
              "개발 역량을 키우기 위해 선후배들과의 멘토링에 집중했고, 다양한 프로젝트와 공모전 경험을 쌓을 수 있었습니다.",
            ]}
            isRight={true}
          />
          <AboutSectionText
            header=""
            content={[
              "특히, 주간 업무 보고 세미나를 하면서 한 주간 수행한 개인 공부 및 프로젝트 진행상황 등을 보고하는 경험을 통해",
              "업무 수행 능력을 자가진단하고 자기 객관화하며 나를 성장시켰습니다.",
            ]}
            isRight={true}
          />
          <AboutSectionText
            header=""
            content={[
              "또한, 팀 프로젝트에서 팀원 상호간의 배려를 통한 원활한 의사소통이",
              "정해진 시간 내에 프로젝트를 완성시킬 수 있는 중요한 부분이라는 것을 깨달았습니다.",
            ]}
            isRight={true}
          />
        </div>
        <div ref={strengthRef} className="opacity-0 transition-all duration-1000">
          <AboutSectionText
            header="strength"
            content={[
              "성공과 실패는 다른 것 같으면서도 동일한 의미라고 생각합니다.",
              "저에게 있어서 실패란 도전하지 않는 것입니다.",
              "긍정적인 사고를 통해 동료와 함께 시너지를 발휘하는 것을 좋아합니다.",
            ]}
            isRight={false}
          />
          <AboutSectionText
            header=""
            content={["끊임없이 생각하며 지치지 않는 열정으로 상승불패하며", "함께 하고싶은 동료 개발자가 되겠습니다."]}
            isRight={false}
          />
        </div>
      </div>
    </div>
  );
};

type aboutSectionTextProps = {
  header: string;
  content: string[];
  isRight: boolean;
};
const AboutSectionText = (props: aboutSectionTextProps) => {
  const { header, content, isRight } = props;
  return (
    <div className={`flex flex-col p-3 max-sm:p-3 max-sm:w-44 ${isRight ? "translate-x-1/2 text-left" : "-translate-x-1/2 text-right"}`}>
      <p className="font-medium text-lg max-sm:text-sm">{header ? `${isRight ? "<" + header + " />" : header + ";"}` : null}</p>
      {content.map((paragraph, index) => (
        <p key={index} className="max-sm:text-xs break-keep">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

type stackSectionProps = {};
const StackSection = (props: stackSectionProps) => {
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
    <div className="relative w-full max-w-screen h-full pt-20 pb-20 overflow-hidden">
      {/* Center Text */}
      <CenterText context="Stacks" />
      {/* Stack Carousel */}
      <div className="flex max-sm:flex-col w-full h-full">
        {/* Stack Selector */}
        <div className="flex justify-center items-center w-1/2 max-sm:w-full h-96">
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
        <div className="flex flex-col justify-start items-start w-1/2 max-sm:w-full h-96 max-sm:h-full p-3">
          {/* Stack Name */}
          <p className="text-3xl font-medium">{STACK_DESC[STACK_LIST[stackSelectorIndex]].title}</p>
          {/* Stack Badge */}
          <div className="flex flex-row flex-wrap gap-3 mt-3 mb-6">
            {Object.keys(STACK_BADGE).map((badge, index) => {
              if (STACK_DESC[STACK_LIST[stackSelectorIndex]].level > index) {
                return (
                  <p key={index} className="px-2 py-1 text-white bg-blue-600 rounded-lg max-sm:text-xs">
                    {STACK_BADGE[Number(badge)]}
                  </p>
                );
              }
            })}
          </div>
          {/* Stack Desc */}
          <div className="flex flex-col flex-wrap gap-3 pr-10 break-keep">
            {STACK_DESC[STACK_LIST[stackSelectorIndex]].points.map((context, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <p className="text-xl font-medium">{context[0]}</p>
                  <p>{context[1]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
