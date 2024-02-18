import React from "react";
// Style
import * as S from "./Style";

const NAV_ITEMS = [
  { index: 0, name: "About" },
  { index: 1, name: "Work" },
  { index: 2, name: "Contact" },
];

const Nav = ({ onMove }) => {
  return (
    <>
      <S.Nav>
        <S.NavLogo onClick={() => onMove(3)}>
          <p>김준현 포트폴리오</p>
        </S.NavLogo>
        <S.NavMenu>
          {NAV_ITEMS.map(({ index, name }) => {
            return (
              <p
                key={index}
                onClick={() => {
                  onMove(index);
                }}
              >
                {name}
              </p>
            );
          })}
        </S.NavMenu>
      </S.Nav>
    </>
  );
};

export default Nav;
