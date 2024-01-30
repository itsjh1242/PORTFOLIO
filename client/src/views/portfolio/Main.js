import React, { useState, useEffect } from "react";

// Navigation Bar
import Nav from "./Nav";

// Style
import * as S from "./Style";

function Main() {
  return (
    <>
      <Nav />
      <S.Frame>
        <S.FrameLeft>
          <p className="title">개발자, 디자이너</p>
          <p className="title">김준현입니다.</p>
          <p className="subtitle">코드는 나의 언어, 웹은 나의 캔버스입니다.</p>
        </S.FrameLeft>
        <S.FrameRight>d</S.FrameRight>
      </S.Frame>
    </>
  );
}

export default Main;
