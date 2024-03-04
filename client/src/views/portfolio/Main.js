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
import Experienced from "./Experienced";
import Work from "./Work";
import Footer from "./Footer";

function Main() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const [leftSelected, setleftSelected] = useState(true);
  const [rightSelected, setRightSelected] = useState(false);

  function onMove(index) {
    index === 0
      ? aboutRef.current.scrollIntoView({ behavior: "smooth" })
      : index === 1
      ? workRef.current.scrollIntoView({ behavior: "smooth" })
      : index === 2
      ? contactRef.current.scrollIntoView({ behavior: "smooth" })
      : homeRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
      <Nav onMove={onMove} />
      <S.Frame ref={homeRef}>
        <div className="background-text">
          <p>PORTFOLIO</p>
        </div>
        <S.FrameLeft className="left">
          <S.BlurFrame selected={leftSelected}></S.BlurFrame>
          <S.FrameTitle selected={leftSelected} position={"left"}>
            <p className="title">Designer;</p>
            <p className="desc">개발만큼이나 디자인하는 것도 좋아합니다. 저만의 디자인을 제 다양한 프로젝트에 녹여봤습니다.</p>
          </S.FrameTitle>
        </S.FrameLeft>
        <S.FrameRight className="right">
          <S.BlurFrame selected={rightSelected}></S.BlurFrame>
          <S.FrameTitle selected={rightSelected} $position={"right"}>
            <p className="title">
              {"<"}Coder {"/>"}
            </p>
            <p className="desc">깔끔한 코드를 적는 개발자입니다. 코드는 저에게 언어이고, 웹은 제 캔버스입니다.</p>
          </S.FrameTitle>
        </S.FrameRight>
        <div className="center-image">
          <img src="./portfolio/profileImage.png" alt="profile" />
        </div>
        <div className="lottie-scrolldown">
          <Lottie.ScrollDown />
        </div>
      </S.Frame>
      <About aboutRef={aboutRef} />
      <Stack />
      <Experienced />
      <Work workRef={workRef} />
      <Footer contactRef={contactRef} />
    </>
  );
}

export default Main;
