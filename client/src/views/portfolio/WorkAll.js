import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

// Style
import * as S from "./WorkAllStyle";

// Icon
import { IoIosArrowBack } from "react-icons/io";

export default function WorkAll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { category } = useParams();
  return (
    <>
      <S.WorkAllFrame>
        <S.WorkAllHeader>
          <div className="left">
            <Link to="/">
              <IoIosArrowBack size={36} />
            </Link>
            <p>PORTFOLIO</p>
          </div>
          <div className="right">
            <p>Kim Jun Hyeon's Works</p>
            <p>이곳에서 모든 프로젝트를 보실 수 있습니다</p>
          </div>
        </S.WorkAllHeader>
        <S.WorkAllBody>
          <S.WorkCategory>
            <Link to="/workall/default">
              <S.CategoryItem condition={category === "default" ? "true" : "false"}>All</S.CategoryItem>
            </Link>
            <Link to="/workall/project">
              <S.CategoryItem condition={category === "project" ? "true" : "false"}>Project</S.CategoryItem>
            </Link>
            <Link to="/workall/design">
              <S.CategoryItem condition={category === "design" ? "true" : "false"}>Design</S.CategoryItem>
            </Link>
          </S.WorkCategory>
          <S.WorkItemGridHead>
            <p>Name</p>
            <p>Skill</p>
            <p>Note</p>
            <p>Link • Demo</p>
          </S.WorkItemGridHead>
          <S.WorkGrid>
            <S.WorkItemGridItem>
              <div className="name">
                <p className="title">긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템</p>
                <p className="description">
                  웰니스 대화 스크립트를 활용하여 학습된 챗봇과 자유롭게 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른 나의 감정 분포도를 확인할 수
                  있습니다.
                </p>
              </div>
              <div className="skill">
                <img src=".././portfolio/stack/Python.png" alt="python" />
                <img src=".././portfolio/stack/MySQL.png" alt="python" />
                <img src=".././portfolio/stack/HTML.png" alt="python" />
              </div>
              <div className="note">
                <div className="item">
                  <p>졸업작품</p>
                </div>
                <div className="item">
                  <p>개인프로젝트</p>
                </div>
                <div className="item">
                  <p>특허 출원</p>
                </div>
                <div className="item">
                  <p>한국컴퓨터정보학회</p>
                </div>
              </div>
              <div className="link">
                <Link to="/">
                  <img src=".././portfolio/stack/Github.png" alt="" />
                </Link>
              </div>
            </S.WorkItemGridItem>
            <S.WorkItemGridItem>
              <div className="name">
                <p className="title">긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템</p>
                <p className="description">
                  웰니스 대화 스크립트를 활용하여 학습된 챗봇과 자유롭게 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른 나의 감정 분포도를 확인할 수
                  있습니다.
                </p>
              </div>
              <div className="skill">
                <img src=".././portfolio/stack/Python.png" alt="python" />
                <img src=".././portfolio/stack/MySQL.png" alt="python" />
                <img src=".././portfolio/stack/HTML.png" alt="python" />
              </div>
              <div className="note">
                <div className="item">
                  <p>졸업작품</p>
                </div>
                <div className="item">
                  <p>개인프로젝트</p>
                </div>
                <div className="item">
                  <p>특허 출원</p>
                </div>
                <div className="item">
                  <p>한국컴퓨터정보학회</p>
                </div>
              </div>
              <div className="link">
                <Link to="/">
                  <img src=".././portfolio/stack/Github.png" alt="" />
                </Link>
              </div>
            </S.WorkItemGridItem>
            <S.WorkItemGridItem>
              <div className="name">
                <p className="title">긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템</p>
                <p className="description">
                  웰니스 대화 스크립트를 활용하여 학습된 챗봇과 자유롭게 대화를 하면 자동으로 일기가 생성되고, 해당 일기에 따른 나의 감정 분포도를 확인할 수
                  있습니다.
                </p>
              </div>
              <div className="skill">
                <img src=".././portfolio/stack/Python.png" alt="python" />
                <img src=".././portfolio/stack/MySQL.png" alt="python" />
                <img src=".././portfolio/stack/HTML.png" alt="python" />
              </div>
              <div className="note">
                <div className="item">
                  <p>졸업작품</p>
                </div>
                <div className="item">
                  <p>개인프로젝트</p>
                </div>
                <div className="item">
                  <p>특허 출원</p>
                </div>
                <div className="item">
                  <p>한국컴퓨터정보학회</p>
                </div>
              </div>
              <div className="link">
                <Link to="/">
                  <img src=".././portfolio/stack/Github.png" alt="" />
                </Link>
              </div>
            </S.WorkItemGridItem>
          </S.WorkGrid>
        </S.WorkAllBody>
      </S.WorkAllFrame>
    </>
  );
}
