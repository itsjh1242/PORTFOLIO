import React, { useState, useEffect } from "react";

// Style
import * as S from "./Style";

const About = ({ aboutRef }) => {
  const date = new Date();
  const Year = date.getFullYear();

  const verticalLineDefine = [0, 20, 40, 60, 80, 100];
  const [verticalLineHeight, setVerticalLineHeight] = useState(0);

  function handleScrollAboutText() {
    const TextElements = document.querySelectorAll(".about-text p");
    const screenCenter = window.innerHeight / 2;

    TextElements.forEach((p, index) => {
      const introPosition = p.getBoundingClientRect().top;
      if (introPosition < screenCenter) {
        p.style.color = "#000000";
        setVerticalLineHeight(Math.min(5, index));
      } else {
        p.style.color = "#d3d3d3";
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollAboutText);
    return () => {
      window.removeEventListener("scroll", handleScrollAboutText);
    };
  }, []);

  return (
    <S.AboutFrame ref={aboutRef}>
      <S.AboutTitle handlecolor={verticalLineHeight}>
        <p>About</p>
      </S.AboutTitle>
      <S.AboutMain className="about-text">
        <S.AboutVerticalLine />
        <S.AboutVerticalLineColor height={verticalLineDefine[verticalLineHeight]} />
        <p>
          <span>Intro</span>
          <br />
          안녕하세요,
          <br />
          개발자 김준현입니다
        </p>
        <p>
          <span>Motto</span>
          <br />
          코드를 짜는 일이라면, 무엇이든 좋아합니다
          <br />
          저에게 코드는 언어이고, 웹은 캔버스입니다
        </p>
        <p>
          <span>Info</span>
          <br />
          저는
          <br />
          1999년 11월 4일 생으로 현재 {Year - 1999 + 1}세입니다
        </p>
        <p>
          <span>Education</span>
          <br />
          2018년부터 2023년까지
          <br />
          동서대학교 소프트웨어학과에 재학했으며
          <br />
          UbSE (Ubiquitous Software Engineering) 연구실에서
          <br />
          다양한 프로젝트와 공모전 활동을 했습니다
        </p>
        <p>
          <span>Strength</span>
          <br />
          저는 개발만큼이나 디자인에도 관심이 많습니다
          <br />
          디자인을 전공하지는 않았지만,
          <br />
          UI/UX와 디자인을 고려하여 개발하는 것을 좋아합니다
        </p>
        <p>
          <span>End</span>
          <br />
          지치지않는 열정으로 끊임없이 공부하며 발전하는
          <br />
          <strong>상승불패의 개발자</strong>가 되겠습니다
        </p>
      </S.AboutMain>
    </S.AboutFrame>
  );
};

export default About;
