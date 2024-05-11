"use client";
import React, { useState, RefObject } from "react";
import Image from "next/image";

// Interface
import { StackDescInterface, StackBadgeInterface } from "../../StackDesc";

// UI Components
import CenterText from "../centerText";
import Badge from "../badge";

// Icons
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

interface StackSectionProps {
  script: { stack_desc: StackDescInterface; stack_badge: StackBadgeInterface; stack_list: string[] };
  sectionRef: RefObject<HTMLDivElement>;
}

const StackSection = (props: StackSectionProps) => {
  const { script, sectionRef } = props;

  const stack_desc = script.stack_desc;
  const stack_badge = script.stack_badge;
  const stack_list = script.stack_list;

  const [stackSelectorIndex, setStackSelectorIndex] = useState(0);
  const handleStackSelector = (direction: string) => {
    var index;
    if (direction === "left") {
      index = stackSelectorIndex - 1;
      setStackSelectorIndex(index < 0 ? stack_list.length - 1 : index);
    } else {
      index = (stackSelectorIndex + 1) % stack_list.length;
      setStackSelectorIndex(index);
    }
  };
  return (
    <div ref={sectionRef} className="relative w-full max-w-screen h-full max-sm:min-h-sm-apple pt-20 pb-20 overflow-hidden">
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
              <Image src={`/stack/${stack_list[stackSelectorIndex]}.svg`} alt="" width={150} height={150} />
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
        <div className="flex flex-col justify-start items-start w-1/2 sm:w-1/3 max-sm:w-full h-full p-3">
          {/* Stack Name */}
          <p className="text-3xl max-sm:text-2xl font-medium">{stack_desc[stack_list[stackSelectorIndex]].title}</p>
          {/* Stack Badge */}
          <div className="flex flex-row flex-wrap gap-3 mt-3 mb-6">
            {Object.keys(stack_badge).map((badge, index) => {
              if (stack_desc[stack_list[stackSelectorIndex]].level > index) {
                return (
                  <Badge
                    icon={null}
                    iconSize={null}
                    key={index}
                    bgColor="bg-blue-600"
                    fontSize="text-sm"
                    fontColor="text-white"
                    context={stack_badge[Number(badge)]}
                  />
                );
              }
            })}
          </div>
          {/* Stack Desc */}
          <div className="flex flex-col flex-wrap gap-3 pr-10 break-keep">
            {stack_desc[stack_list[stackSelectorIndex]].points.map((context, index) => {
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

export default StackSection;
