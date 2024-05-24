"use client";
import React, { RefObject } from "react";
import Image from "next/image";

interface LandingInterface {
  prefix: string;
  sectionRef: RefObject<HTMLDivElement>;
}

const Landing = (props: LandingInterface) => {
  const { sectionRef } = props;
  return (
    <div ref={sectionRef} className="flex w-full h-svh">
      {/* Background Profile Image */}
      <div className="absolute top-0 left-0 w-full h-svh overflow-hidden">
        <Image
          src={`/profile-image.png`}
          alt="main-profile-image"
          className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 sm:scale-90 w-full h-full object-contain"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 max-sm:-translate-y-80 text-9xl max-sm:text-3xl font-medium -z-10">
          PORTFOLIO
        </p>
      </div>
      {/* Left Component */}
      <LandingDesc title="designer" desc="보고 듣는 모든 경험에서 영감을 얻어 저만의 디자인을 다양한 프로젝트에 적용시켰습니다." isRight={false} />
      {/* Right Component */}
      <LandingDesc title={"<coder />"} desc="깔끔하고 효율적인 코드 작성과 생각하는 것을 좋아하는 주니어 개발자입니다." isRight={true} />
    </div>
  );
};

interface LandingDescProps {
  title: string;
  desc: string;
  isRight: boolean;
}
const LandingDesc = (props: LandingDescProps) => {
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

export default Landing;
