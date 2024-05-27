"use client";
import React, { RefObject } from "react";
import { useRouter } from "next/navigation";

import { WorkAllDesc } from "@/app/db/WorkAllDesc";
import { ProjectDescInterface } from "@/app/db/ProjectDesc";

// UI Components
import CenterText from "../CenterText";
import CustomButton from "../Button";

interface ProjectSectionInterface {
  prefix: string;
  script: { project_desc: ProjectDescInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

const ProjectSection = (props: ProjectSectionInterface) => {
  const { sectionRef, script } = props;
  const router = useRouter();

  const totalProjects = Object.keys(WorkAllDesc).length;

  const project_desc = script.project_desc;

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full max-w-screen h-full min-h-sm-apple p-20 max-sm:p-3">
      {/* Center Text */}
      <CenterText context="Project" />
      <div className="flex max-sm:flex-col justify-around items-center">
        {/* 지금까지 진행한 프로젝트 개수 */}
        <div className="flex justify-around items-center text-right gap-6">
          <div className="">
            <p className="text-7xl font-bold">{totalProjects}</p>
          </div>
          <div>
            <p>지금까지</p>
            <p>개의 프로젝트를</p>
            <p>진행했습니다.</p>
          </div>
        </div>
        {/* 논문 작성 */}
        <div className="flex justify-around items-center text-right gap-6">
          <div className="">
            <p className="text-7xl font-bold">3</p>
          </div>
          <div>
            <p>지금까지</p>
            <p>개의 논문을</p>
            <p>게재했습니다.</p>
          </div>
        </div>
        {/* 수상 내역 */}
        <div className="flex justify-around items-center text-right gap-6">
          <div className="">
            <p className="text-7xl font-bold">3</p>
          </div>
          <div>
            <p>지금까지</p>
            <p>개의 상장을</p>
            <p>수여받았습니다.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <CustomButton
          type="secondary"
          context="프로젝트 보러가기"
          action={() => {
            router.push("/portfolio/work");
          }}
        />
      </div>
    </div>
  );
};

export default ProjectSection;
