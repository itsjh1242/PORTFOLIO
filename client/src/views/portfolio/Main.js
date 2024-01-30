import React, { useState, useEffect, useRef } from "react";

// Navigation Bar
import Nav from "./Nav";

// Style
import * as S from "./Style";

function Main() {
  const IDCardRef = useRef();

  useEffect(() => {
    const idCard = IDCardRef.current;
    const overlay = idCard.querySelector("div");

    idCard.addEventListener("mousemove", (e) => {
      var x = e.offsetX;
      var y = e.offsetY;
      var rotateY = (-1 / 5) * x + 20;
      var rotateX = (1 / 5) * y - 20;

      overlay.style = `background-position: ${x / 5 + y / 5}%`;
      idCard.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
    idCard.addEventListener("mouseleave", () => {
      idCard.style.transform = `perspective(350px) rotateY(0deg) rotateX(0deg)`;
    });
  });

  return (
    <>
      <Nav />
      <S.Frame>
        <S.FrameLeft>
          <p className="title">개발자, 디자이너</p>
          <p className="title">김준현입니다.</p>
          <p className="subtitle">코드는 나의 언어, 웹은 나의 캔버스</p>
        </S.FrameLeft>
        <S.FrameRight>
          <S.ImageBox ref={IDCardRef}>
            <div className="overlay"></div>
            <img src="portfolio/idcard.png" alt="main" />
          </S.ImageBox>
        </S.FrameRight>
      </S.Frame>
    </>
  );
}

export default Main;
