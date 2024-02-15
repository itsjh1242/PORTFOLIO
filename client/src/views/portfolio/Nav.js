import React, { useEffect, useRef } from "react";
// Style
import * as S from "./Style";

function Nav() {
  const NavRef = useRef();
  useEffect(() => {
    const Nav = NavRef.current;
    const NavMenu = Nav.querySelectorAll("a");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        Nav.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        NavMenu[0].style.color = "white";
        NavMenu[1].style.color = "white";
        NavMenu[2].style.color = "white";
      } else {
        Nav.style.backgroundColor = "transparent";
        NavMenu[0].style.color = "black";
        NavMenu[1].style.color = "black";
        NavMenu[2].style.color = "black";
      }
    };
    // window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <S.Nav ref={NavRef}>
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
