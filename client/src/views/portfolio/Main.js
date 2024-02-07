import React, { useState, useEffect, useRef } from "react";

// Lottie
import * as Lottie from "./Lottie";

// Navigation Bar
import Nav from "./Nav";

// Style
import * as S from "./Style";

// Views
import About from "./About";
import Stack from "./Stack";
import Work from "./Work";

function Main() {
  const [leftSelected, setleftSelected] = useState(true);
  const [rightSelected, setRightSelected] = useState(false);

  function handleSelected() {
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    left.addEventListener("mouseover", () => {
      setleftSelected(true);
      setRightSelected(false);
    });
    right.addEventListener("mouseover", () => {
      setleftSelected(false);
      setRightSelected(true);
    });
  }

  useEffect(() => {
    handleSelected();
  }, []);

  return (
    <>
      <Nav />
      <S.Frame>
        <div className="background-text">
          <p>PORTFOLIO</p>
        </div>
        <S.FrameLeft className="left">
          <S.BlurFrame selected={leftSelected}></S.BlurFrame>
          <S.FrameTitle selected={leftSelected} $position={"left"}>
            <p className="title">Designer</p>
            <p className="desc">개발만큼이나 UI/UX를 디자인하는 것도 좋아합니다. 저만의 독특한 디자인 개념을 제 다양한 프로젝트에 녹여봤습니다.</p>
          </S.FrameTitle>
        </S.FrameLeft>
        <S.FrameRight className="right">
          <S.BlurFrame selected={rightSelected}></S.BlurFrame>
          <S.FrameTitle selected={rightSelected} $position={"right"}>
            <p className="title">
              {"<"}Coder {"/>"}
            </p>
            <p className="desc">깔끔한 코드를 적는 개발자입니다. 코드를 짜는 일이라면 무엇이든 좋아합니다. 코드는 저에게 언어이고, 웹은 제 캔버스입니다.</p>
          </S.FrameTitle>
        </S.FrameRight>
        <div className="center-image">
          <img src="./portfolio/profileImage.png" alt="profile" />
        </div>
        <div className="lottie-scrolldown">
          <Lottie.ScrollDown />
        </div>
      </S.Frame>
      <About />
      <Stack />
      <Work />
    </>
  );
}

export default Main;
