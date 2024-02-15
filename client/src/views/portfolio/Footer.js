import React, { useState, useRef, useEffect, forwardRef } from "react";

// Style
import * as S from "./Style";

const Footer = ({ contactRef }) => {
  return (
    <S.FooterFrame ref={contactRef}>
      <div className="element">
        <S.CopyRight>
          <p>©2024 JunHyeon Kim.</p>
          <p>All rights reserved</p>
        </S.CopyRight>
        <S.Contact>
          <div className="icon">
            <a href="https://github.com/itsjh1242" target="_blank" rel="noopener noreferrer">
              <img src="/portfolio/Github.png" alt="github" />
            </a>
          </div>
          <div className="icon">
            <a href="mailto:itsjh@kakao.com" target="_blank" rel="noopener noreferrer">
              <img src="/portfolio/Email.png" alt="github" />
            </a>
          </div>
          <div className="icon">
            <a href="https://jundev717.tistory.com/" target="_blank" rel="noopener noreferrer">
              <img src="/portfolio/Blog.png" alt="github" />
            </a>
          </div>
          <p>Kakao ID: itsjh</p>
        </S.Contact>
        <S.DesignedBy>
          <p>Designed & Developed by</p>
          <p className="name">JunHyeon Kim</p>
        </S.DesignedBy>
      </div>
    </S.FooterFrame>
  );
};

export default Footer;
