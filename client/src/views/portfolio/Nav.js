import React from "react";
// Style
import * as S from "./Style";

function Nav() {
  return (
    <>
      <S.Nav>
        <S.NavLogo>
          <p>김준현 포트폴리오</p>
        </S.NavLogo>
        <S.NavMenu>
          <a href="/">About</a>
          <a href="/">Works</a>
          <a href="/">Contact</a>
        </S.NavMenu>
      </S.Nav>
    </>
  );
}

export default Nav;
