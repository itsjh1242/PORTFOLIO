"use client";
import React, { useState, RefObject } from "react";

// Interface
import { ExpDescInterface } from "../../WorkExperienceDesc";

// UI Components
import CenterText from "../centerText";
import Badge from "../badge";

// Icons
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface workExperienceProps {
  prefix: string;
  script: { exp_desc: ExpDescInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

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

const WorkExperienceSection = (props: workExperienceProps) => {
  const { script, sectionRef } = props;
  const exp_desc = script.exp_desc;
  const [accordian, setAccordian] = useState(new Array(Object.keys(exp_desc).length).fill(false));
  const handleAccordian = (index: number) => {
    const updatedAccordian = [...accordian];
    updatedAccordian[index] = !updatedAccordian[index];
    setAccordian(updatedAccordian);
  };
  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col gap-3 justify-center items-center w-full max-w-screen h-full sm:min-h-sm-apple p-20 max-sm:p-3 max-sm:mb-20"
    >
      {/* Center Text */}
      <CenterText context="Work Experience" />
      {Object.keys(exp_desc).map((item, index) => {
        return (
          <WorkExperienceAccordion
            key={index}
            title={item}
            period={exp_desc[item].period}
            summary={exp_desc[item].summary}
            location={exp_desc[item].location}
            task={exp_desc[item].task}
            url={exp_desc[item].url}
            keyword={exp_desc[item].keyword}
            accordian={accordian}
            accordianIndex={index}
            handleAccordian={handleAccordian}
          />
        );
      })}
    </div>
  );
};

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

export default WorkExperienceSection;
