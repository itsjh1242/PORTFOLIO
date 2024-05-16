"use client";
import React, { useState } from "react";
import Image from "next/image";

// UI Components
import * as Wrapper from "../Wrapper";
import Badge from "../badge";

// Data Import
import { WorkAllDesc } from "../../WorkAllDesc";

// Icons
import { VscChevronLeft, VscChevronRight, VscCode, VscBracketDot, VscCircle, VscCircleFilled } from "react-icons/vsc";

export interface WorkDetailInterface {
  params: {
    identifier: string;
  };
}

export const WorkDetailPage = (props: WorkDetailInterface) => {
  const { params } = props;
  const data = WorkAllDesc[params.identifier];

  const [uicurrentUIIndex, setUIUIIndex] = useState(0);
  const func = data.detail.func;
  const func_index = Object.keys(data.detail.func);

  const handleBannerIndex = (direction: string) => {
    let index;
    if (direction === "left") {
      index = uicurrentUIIndex - 1;
      setUIUIIndex(index < 0 ? func_index.length - 1 : index);
    } else if (direction === "right") {
      index = (uicurrentUIIndex + 1) % func_index.length;
      setUIUIIndex(index);
    } else {
      setUIUIIndex(parseInt(direction));
    }
  };

  const handleOnClickMove = (url: string) => {
    if (url === "") {
      return alert("준비되지 않았거나 실행할 수 없습니다.");
    }
    window.open(url, "_blank");
  };

  return (
    <Wrapper.Center className="flex-col max-sm:w-full max-sm:text-xs break-keep">
      {/* 대표 이미지 */}
      <Wrapper.MaxWidth className="w-fit rounded-b-3xl max-sm:rounded-3xl max-sm:mt-3 mb-12 overflow-hidden">
        <Image src={`/workall/${data.pid}/${data.pid}.png`} alt="" width={920} height={580} />
      </Wrapper.MaxWidth>
      <Wrapper.MaxWidth>
        <Wrapper.TitleText>{data.title}</Wrapper.TitleText>
        <HorizontalDivider />
        <Wrapper.FlexRow className="max-sm:flex-col">
          {/* 헤더 부분 */}
          <Wrapper.HalfWidthWrapper className="max-sm:w-full">
            <table>
              <tbody>
                {Object.keys(data.detail.header).map((header_key, index) => {
                  return (
                    <tr key={index} className="align-top text-left">
                      <th className="pr-3">{data.detail.header[header_key].title}</th>
                      <td className="pb-3">
                        {data.detail.header[header_key].content.map((content_item, index) => {
                          return <p key={index}>{content_item}</p>;
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Wrapper.HalfWidthWrapper>
          {/* 요약 부분 */}
          <Wrapper.HalfWidthWrapper className="flex flex-col max-sm:w-full">
            <p className="font-bold">개요</p>
            {data.detail.long_summary.map((summary, index) => {
              return (
                <p key={index} className="mb-2">
                  {summary}
                </p>
              );
            })}
          </Wrapper.HalfWidthWrapper>
        </Wrapper.FlexRow>
      </Wrapper.MaxWidth>
      {/* 구현 기능 */}
      <Wrapper.MaxWidth className="flex flex-col justify-center items-start mt-6">
        <Wrapper.TitleText>구현 기능</Wrapper.TitleText>
        <HorizontalDivider />
        <table>
          <tbody>
            <tr className="align-top text-left">
              <th className="pr-3">명칭</th>
              <td className="pb-3">{func[func_index[uicurrentUIIndex]].name}</td>
            </tr>
            <tr className="align-top text-left">
              <th className="pr-3">설명</th>
              <td className="pb-3">{func[func_index[uicurrentUIIndex]].desc}</td>
            </tr>
            <tr className="align-top text-left">
              <th className="pr-3">기능</th>
              <td className="pb-3">
                {func[func_index[uicurrentUIIndex]].func.map((func_item, index) => {
                  return <p key={index}>{func_item === "" ? "-" : "· " + func_item}</p>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
        {/* UI Image */}
        <div className="relative">
          <div
            className="absolute top-1/2 -left-10 max-sm:left-0 cursor-pointer"
            onClick={() => {
              handleBannerIndex("left");
            }}
          >
            <VscChevronLeft size={50} />
          </div>
          <Image
            src={func[func_index[uicurrentUIIndex]].ui ? `/workall/${data.pid}/${func_index[uicurrentUIIndex]}.png` : ""}
            alt={data.pid}
            width={1200}
            height={580}
          />
          <div
            className="absolute top-1/2 -right-10 max-sm:right-0 cursor-pointer"
            onClick={() => {
              handleBannerIndex("right");
            }}
          >
            <VscChevronRight size={50} />
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-fit">
          {func_index.map((func_item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  handleBannerIndex(index.toString());
                }}
              >
                {index === uicurrentUIIndex ? <VscCircleFilled size={20} /> : <VscCircle size={20} />}
              </div>
            );
          })}
        </div>
      </Wrapper.MaxWidth>
      {/* 트러블 슈팅 */}
      {Object.keys(data.detail.trouble).length !== 0 ? (
        <Wrapper.MaxWidth className="flex flex-col justify-center items-start mt-6">
          <Wrapper.TitleText>트러블 슈팅</Wrapper.TitleText>
          <HorizontalDivider />
          {Object.keys(data.detail.trouble).map((trouble_key, index) => {
            return (
              <div key={index} className="mb-3">
                <p className="text-2xl max-sm:text-base font-medium">{trouble_key}</p>
                {data.detail.trouble[trouble_key].map((trouble_item, index) => {
                  return (
                    <p key={index} className="mb-3">
                      ·{trouble_item}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </Wrapper.MaxWidth>
      ) : null}
      {/* 회고 */}
      <Wrapper.MaxWidth className="flex flex-col justify-center items-start mt-6">
        <Wrapper.TitleText>회고</Wrapper.TitleText>
        <HorizontalDivider />
        {data.detail.review.map((review_item, index) => {
          return (
            <p key={index} className="mb-3">
              {review_item}
            </p>
          );
        })}
      </Wrapper.MaxWidth>
      {/* 링크 */}
      <Wrapper.MaxWidth className="flex flex-col justify-center items-start my-6">
        <Wrapper.TitleText>링크</Wrapper.TitleText>
        <HorizontalDivider />
        <Wrapper.FlexRow className="gap-3">
          {/* Github Repository */}
          <div className={` ${data.detail.github ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={() => handleOnClickMove(data.detail.github)}>
            <Badge icon={VscCode} iconSize="50" bgColor="bg-black" fontColor="text-white" fontSize="text-base" context="Github 레포지토리 " />
          </div>
          {/* Demo Link */}
          <div className={` ${data.detail.demo ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={() => handleOnClickMove(data.detail.demo)}>
            <Badge icon={VscBracketDot} iconSize="50" bgColor="bg-blue-500" fontColor="text-white" fontSize="text-base" context="Demo 사이트 " />
          </div>
        </Wrapper.FlexRow>
      </Wrapper.MaxWidth>
    </Wrapper.Center>
  );
};

const HorizontalDivider = () => {
  return <div className="w-full border h-0 my-3" />;
};
