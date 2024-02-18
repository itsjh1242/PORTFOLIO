import React from "react";

// Style
import * as S from "./Style";

export default function Stack() {
  const stack = ["React", "Node.js", "AWS", "Flutter", "MySQL", "Python", "Android", "HTML", "CSS", "JavaScript", "Github", "VSCode"];
  return (
    <>
      <S.StackFrame>
        <S.StackSlide>
          <S.StackSlideItem>
            {stack.map((item, index) => {
              const imagePath = item === "Node.js" ? `./portfolio/stack/Node.png` : `./portfolio/stack/${item}.png`;
              return (
                <div key={index}>
                  <img src={imagePath} alt=""></img>
                  <p>{item}</p>
                </div>
              );
            })}
          </S.StackSlideItem>
          <S.StackSlideItem>
            {stack.map((item, index) => {
              const imagePath = item === "Node.js" ? `./portfolio/stack/Node.png` : `./portfolio/stack/${item}.png`;
              return (
                <div key={index}>
                  <img src={imagePath} alt=""></img>
                  <p>{item}</p>
                </div>
              );
            })}
          </S.StackSlideItem>
        </S.StackSlide>
      </S.StackFrame>
    </>
  );
}
