import React, { useState, useRef, useEffect } from "react";

// Icons
import { HiArrowUpRight } from "react-icons/hi2";

// Style
import * as S from "./Style";

export default function Work() {
  const WorkMainDescriptionItem = [
    ["졸업작품", "Python", "Flask", "KoBERT", "AI_Hub", "MySQL", "GPT-3 Turbo"],
    ["Flutter", "Dart", "MySQL", "Node.js"],
    ["Arduino", "Node.js", "MySQL"],
  ];

  useEffect(() => {
    const mainItem = document.querySelectorAll("#main_item");
    mainItem.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.querySelector(".pop-up").style.opacity = "1";
        item.querySelector(".pop-up").style.bottom = "0";
      });
      item.addEventListener("mouseleave", () => {
        item.querySelector(".pop-up").style.opacity = "0";
        item.querySelector(".pop-up").style.bottom = "-50%";
      });
    });
  });
  return (
    <>
      <S.WorkFrame>
        <S.WorkHeader>
          <p>Show Room</p>
          <p>
            All Projects&nbsp;&nbsp;
            <HiArrowUpRight />
          </p>
        </S.WorkHeader>
        <S.WorkMain>
          <div className="item1" id="main_item">
            <img src="./portfolio/showroom1.png" alt="" />
            <div className="pop-up">
              <p>
                긍정적 감정 유발을 위한
                <br />
                AI챗봇 기반 일기 작성 시스템
              </p>
              <p>
                GPT-3 Turbo와 AI_Hub의 데이터셋을 활용하여 학습한 KoBERT 모델을 결합하였으며, 챗봇과의 대화를 통해 정제된 텍스트를 기반으로 감정 추출 및 분석,
                일기 생성을 하는 시스템을 개발하였습니다. 수기로 일기를 작성하는 것과 비교하여 챗봇과 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른
                나의 감정 분포도를 확인할 수 있습니다.
              </p>
              <div className="footer">
                {WorkMainDescriptionItem[0].map((item, index) => {
                  return (
                    <S.WorkMainDescription key={index}>
                      <p>{item}</p>
                    </S.WorkMainDescription>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="item2" id="main_item">
            <div className="pop-up">
              <p>모션 인식 기반의 이중 암호 인증 방안</p>
              <p>
                GPT-3 Turbo와 AI_Hub의 데이터셋을 활용하여 학습한 KoBERT 모델을 결합하였으며, 챗봇과의 대화를 통해 정제된 텍스트를 기반으로 감정 추출 및 분석,
                일기 생성을 하는 시스템을 개발하였습니다. 수기로 일기를 작성하는 것과 비교하여 챗봇과 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른
                나의 감정 분포도를 확인할 수 있습니다.
              </p>
              <div className="footer">
                {WorkMainDescriptionItem[1].map((item, index) => {
                  return (
                    <S.WorkMainDescription key={index} $side={"true"}>
                      <p>{item}</p>
                    </S.WorkMainDescription>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="item3" id="main_item">
            <div className="pop-up">
              <p>
                아두이노와 지문인식 센서를 활용한
                <br />
                연구실 근태 관리 시스템
              </p>
              <p>
                GPT-3 Turbo와 AI_Hub의 데이터셋을 활용하여 학습한 KoBERT 모델을 결합하였으며, 챗봇과의 대화를 통해 정제된 텍스트를 기반으로 감정 추출 및 분석,
                일기 생성을 하는 시스템을 개발하였습니다. 수기로 일기를 작성하는 것과 비교하여 챗봇과 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른
                나의 감정 분포도를 확인할 수 있습니다.
              </p>
              <div className="footer">
                {WorkMainDescriptionItem[2].map((item, index) => {
                  return (
                    <S.WorkMainDescription key={index} $side={"true"}>
                      <p>{item}</p>
                    </S.WorkMainDescription>
                  );
                })}
              </div>
            </div>
          </div>
        </S.WorkMain>
      </S.WorkFrame>
    </>
  );
}
