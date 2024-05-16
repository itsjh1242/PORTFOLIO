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

interface StackSectionInterface {
  prefix: string;
  script: { stack_desc: StackDescInterface; stack_badge: StackBadgeInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

interface StackContentDescInterface {
  stack_desc_key: string;
  context: { [key: string]: string[] };
}

const StackSection = (props: StackSectionInterface) => {
  const { script, sectionRef } = props;

  const stack_desc = script.stack_desc;
  const stack_badge = script.stack_badge;
  const stack_list = Object.keys(stack_desc);

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
    <div ref={sectionRef} className="relative flex justify-center items-center w-full max-w-screen h-apple max-sm:min-h-sm-apple py-20 max-sm:py-10">
      {/* Center Text */}
      <CenterText context="Stack" />
      {/* Stack Carousel */}
      <div className="flex justify-center items-center w-2/3 max-sm:w-full sm:gap-3">
        {/* Stack Selector */}
        <div className="cursor-pointer">
          <VscChevronLeft
            size={40}
            onClick={() => {
              handleStackSelector("left");
            }}
          />
        </div>
        {/* Stack Content */}
        <div className="flex flex-col justify-center items-start w-full max-sm:w-full h-full p-3">
          {/* Stack Name */}
          <div className="flex gap-3">
            <div className="flex justify-center items-center">
              <Image src={`/stack/${stack_list[stackSelectorIndex]}.svg`} alt="" width={40} height={40} />
            </div>
            <p className="text-3xl max-sm:text-2xl font-medium">{stack_desc[stack_list[stackSelectorIndex]].title}</p>
          </div>
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
          <div className="flex flex-col flex-wrap gap-3  break-keep">
            {Object.keys(stack_desc[stack_list[stackSelectorIndex]].points).map((stack_desc_key, index) => {
              return <StackContentDesc key={index} stack_desc_key={stack_desc_key} context={stack_desc[stack_list[stackSelectorIndex]].points} />;
            })}
          </div>
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
  );
};

const StackContentDesc = (props: StackContentDescInterface) => {
  const { stack_desc_key, context } = props;
  return (
    <div className="flex flex-col">
      <p className="text-lg max-sm:text-base font-medium">{stack_desc_key}</p>
      <div className="flex flex-col">
        {context[stack_desc_key].map((desc_item, index) => {
          return (
            <p key={index} className="max-sm:text-xs">
              {desc_item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StackSection;
