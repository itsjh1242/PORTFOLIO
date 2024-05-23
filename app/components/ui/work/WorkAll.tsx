"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VscChevronLeft } from "react-icons/vsc";

// Data Import
import { WorkAllDesc } from "@/app/db/WorkAllDesc";
import { prefix } from "../../../../lib/prefix";

export interface UnitWrapperInterface {
  pid: string;
  title: string;
  summary: string;
  stacks: string[];
  fontColor: string;
}

export const WorkAllPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center w-full h-full pt-6 max-sm:p-3">
      {/* Container */}
      <div className="flex w-full max-w-6xl">
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

      {/* Projects Grid */}
      <div className="grid grid-cols-4 gap-6 max-sm:grid-cols-1 p-6 w-full max-w-6xl">
        {Object.keys(WorkAllDesc).map((work_key, index) => {
          const item = WorkAllDesc[work_key];
          return <UnitWrapper key={index} title={item.title} pid={item.pid} summary={item.summary} stacks={item.stacks} fontColor={item.fontColor} />;
        })}
      </div>
    </div>
  );
};

const UnitWrapper = (props: UnitWrapperInterface) => {
  const { pid, title, summary, stacks, fontColor } = props;
  const router = useRouter();
  return (
    <div
      className="flex flex-col cursor-pointer"
      onClick={() => {
        router.push(prefix + "/work/work-detail/" + pid);
      }}
    >
      <div className={`rounded-md overflow-hidden shadow-lg transition-transform transform ${fontColor}`}>
        {/* style={{ width: "259px", height: "259px", backgroundImage: `url(/workall/unit/${pid}_unit.svg)` }} */}
        <Image src={`workall/unit/${pid}_unit.svg`} alt={title} width={259} height={259} />
      </div>
      <div className="flex justify-start items-center gap-2 mt-1">
        {stacks.map((stack_item, index) => (
          <Image key={index} src={`stack/${stack_item}.svg`} alt={stack_item} width={20} height={20} />
        ))}
      </div>
      <p className="text-base font-medium  mt-2 max-sm:text-sm truncate">{title}</p>
      <p className="text-sm font-light text-gray-600 max-sm:text-xs truncate">{summary}</p>
    </div>
  );
};
