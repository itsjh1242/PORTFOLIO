"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscChevronLeft } from "react-icons/vsc";

// UI Components
import CustomButton from "@/app/components/ui/button";

// Data Import
import { WorkAllDesc } from "@/app/components/WorkAllDesc";

export interface UnitWrapperInterface {
  pid: string;
  title: string;
  summary: string;
  stacks: string[];
  fontColor: string;
  url: string;
}

export const WorkAllPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-6 max-sm:p-3">
      {/* Container */}
      <div className="flex w-2/3 max-sm:w-full">
        {/* Page Header */}
        <div className="flex justify-between items-end w-full mb-3">
          {/* Left Side */}
          <div className="flex flex-col">
            <div
              className="flex justify-start items-center cursor-pointer text-gray-500 hover:text-black hover:font-medium transition"
              onClick={() => {
                router.back();
              }}
            >
              <VscChevronLeft />
              <p className="max-sm:text-sm">메인으로</p>
            </div>
            <p className="text-3xl font-medium max-sm:text-xl">모든 프로젝트</p>
          </div>
          {/* Right Side */}
          <p className="max-sm:text-xs">이 곳에서 모든 프로젝트를 보실 수 있습니다.</p>
        </div>
      </div>
      {/* Components, Reference: Apple UI/UX Design Guide */}
      {/* 대표 프로젝트 */}
      {Object.keys(WorkAllDesc).map((work_key, index) => {
        const item = WorkAllDesc[work_key];
        if (item.focus) {
          return (
            <UnitWrapperFocus
              key={index}
              pid={item.pid}
              title={work_key}
              summary={item.summary}
              stacks={item.stacks}
              fontColor={item.fontColor}
              url={item.url}
            />
          );
        }
      })}
      {/* 나머지 프로젝트 */}
      <div className="flex flex-row flex-wrap justify-around items-center max-sm:flex-col gap-3 w-full max-sm:w-screen h-full p-3 max-sm:p-0">
        {Object.keys(WorkAllDesc).map((work_key, index) => {
          const item = WorkAllDesc[work_key];
          if (!item.focus) {
            return (
              <UnitWrapper
                key={index}
                title={item.title}
                pid={item.pid}
                summary={item.summary}
                stacks={item.stacks}
                fontColor={item.fontColor}
                url={item.url}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

const UnitWrapperFocus = (props: UnitWrapperInterface) => {
  const { pid, title, summary, stacks, fontColor, url } = props;
  return (
    <div
      className={`flex flex-col justify-start items-center gap-6 w-screen h-apple max-sm:h-sm-apple pt-12 mb-3 bg-no-repeat ${fontColor}`}
      style={{ backgroundImage: `url(/workall_preview/${pid}.png)` }}
    >
      <p className="text-4xl max-sm:text-2xl font-bold text-center">{title}</p>
      <p className="text-2xl max-sm:text-lg font-light">{summary}</p>
      <div className="flex justify-center items-center gap-3">
        {stacks.map((stack_item, index) => {
          return (
            <div key={index}>
              <Image src={`/stack/${stack_item}.svg`} alt={stack_item} width={40} height={40} />
            </div>
          );
        })}
      </div>
      <CustomButton type="primary-rounded" context="자세히 보기" />
    </div>
  );
};

const UnitWrapper = (props: UnitWrapperInterface) => {
  const { pid, title, summary, stacks, fontColor, url } = props;
  return (
    <div
      className={`flex flex-col justify-start items-center gap-3 w-49% max-sm:w-full h-apple-grid max-sm:h-sm-apple pt-12 bg-no-repeat shadow-md hover:shadow-lg transition bg-cover max-sm:bg-center ${fontColor}`}
      style={{ backgroundImage: `url(/workall/${pid}.png)` }}
    >
      <p className="text-3xl max-sm:text-xl font-medium text-center">{title}</p>
      <p className="text-xl max-sm:text-lg font-light">{summary}</p>
      <div className="flex justify-center items-center gap-3">
        {stacks.map((stack_item, index) => {
          return (
            <div key={index}>
              <Image src={`/stack/${stack_item}.svg`} alt={stack_item} width={40} height={40} />
            </div>
          );
        })}
      </div>
      <CustomButton type="primary-rounded" context="자세히 보기" />
    </div>
  );
};
