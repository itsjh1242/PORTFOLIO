"use client";
import React, { useState, RefObject } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Interface
import { WorkBannerDescInterface } from "../../WorkBannerDesc";

// UI Components
import CenterText from "../centerText";
import Badge from "../badge";
import CustomButton from "../button";

// Icons
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

interface workBannerInterface {
  script: { banner_desc: WorkBannerDescInterface };
  sectionRef: RefObject<HTMLDivElement>;
}

const WorkBannerSection = (props: workBannerInterface) => {
  const { script, sectionRef } = props;
  const banner_desc = script.banner_desc;
  const router = useRouter();
  const [bannerKey] = useState(Object.keys(banner_desc));
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
    <div ref={sectionRef} className="relative flex flex-col w-full max-w-screen h-full max-sm:min-h-sm-apple p-20 max-sm:p-3">
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
              <p className="text-lg max-sm:text-sm font-medium">{banner_desc[bannerKey[bannerIndex]].title}</p>
              <p className="max-sm:text-xs">{banner_desc[bannerKey[bannerIndex]].summary}</p>
            </div>
            {/* Keyword */}
            <div className="flex flex-wrap gap-3 my-3">
              <p className="font-medium">키워드</p>
              {banner_desc[bannerKey[bannerIndex]].keyword.map((keyword_item, index) => {
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

export default WorkBannerSection;
