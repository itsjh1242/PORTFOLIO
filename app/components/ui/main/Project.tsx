"use client";
import React, { RefObject } from "react";
import { useRouter } from "next/navigation";

import { WorkAllDesc } from "@/app/db/WorkAllDesc";
import { ProjectDescInterface } from "@/app/db/ProjectDesc";
// UI Components
import CenterText from "../CenterText";
import CustomButton from "../Button";
import Badge from "../Badge";

interface ProjectSectionInterface {
  prefix: string;
  script: { project_desc: ProjectDescInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

const ProjectSection = (props: ProjectSectionInterface) => {
  const { sectionRef, script } = props;
  const router = useRouter();

  const project_desc = script.project_desc;
  const works = WorkAllDesc;
  const totalProjects = Object.keys(works).length;
  const totalPapers = Object.keys(project_desc.paper).length;
  const totalAwards = Object.keys(project_desc.award).length;

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full max-w-screen h-full min-h-sm-apple p-20 max-sm:p-3 max-sm:text-xs">
      {/* Center Text */}
      <CenterText context="Project" />
      <div className="flex max-sm:flex-col max-sm:gap-16 justify-around items-start max-sm:items-end">
        {/* 지금까지 진행한 프로젝트 개수 */}
        <div className="flex flex-col justify-around items-end gap-3 text-right">
          <div className="flex justify-around items-center text-right gap-6">
            <p className="text-7xl font-bold">{totalProjects}</p>
            <div>
              <p>지금까지</p>
              <p>개의 프로젝트를</p>
              <p>진행했습니다.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {Object.keys(works).map((item, index) => {
              return (
                <div key={index}>
                  <div className="w-full flex justify-end items-center gap-3">
                    {works[item].detail.demo ? (
                      <Badge icon={null} iconSize={null} bgColor="bg-green-500" fontColor="text-white" fontSize="text-sm" context={"배포됨"} />
                    ) : null}
                    <p>{works[item].title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 논문 작성 */}
        <div className="flex flex-col justify-around items-end gap-3 text-right">
          <div className="flex justify-around items-center gap-6">
            <p className="text-7xl font-bold">{totalPapers}</p>
            <div>
              <p>지금까지</p>
              <p>개의 논문을</p>
              <p>투고했습니다.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {Object.keys(project_desc.paper).map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => {
                    if (project_desc.paper[item].url !== null) {
                      return router.push(project_desc.paper[item].url || "");
                    } else {
                      return alert("참조하는 페이지가 없습니다.");
                    }
                  }}
                >
                  <div className="w-full flex justify-end items-center gap-3">
                    <p className="truncate">{project_desc.paper[item].title}</p>
                    <Badge
                      icon={null}
                      iconSize={null}
                      bgColor="bg-gray-500"
                      fontColor="text-white"
                      fontSize="text-sm"
                      context={project_desc.paper[item].tag || ""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* 수상 내역 */}
        <div className="flex flex-col justify-around items-end gap-3 text-right">
          <div className="flex justify-around items-center gap-6 ">
            <p className="text-7xl font-bold">{totalAwards}</p>
            <div>
              <p>지금까지</p>
              <p>개의 상장을</p>
              <p>수여받았습니다.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {Object.keys(project_desc.award).map((item, index) => {
              return (
                <div key={index}>
                  <div className="w-full flex justify-end items-center gap-3">
                    <p>{project_desc.award[item].title}</p>
                    <Badge
                      icon={null}
                      iconSize={null}
                      bgColor="bg-blue-500"
                      fontColor="text-white"
                      fontSize="text-sm"
                      context={project_desc.award[item].tag || ""}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 gap-3">
        <p className="text-lg max-sm:text-base">
          프로젝트에 대한 <span className="font-medium">기술서 및 명세서</span>가 궁금하신가요?
        </p>
        <p>또는</p>
        <p className="text-lg max-sm:text-base">
          <span className="font-medium">논문이나 상장</span>에 대해 더 알고싶으신가요?
        </p>
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
