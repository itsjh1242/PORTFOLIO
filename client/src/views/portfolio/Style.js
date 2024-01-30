import styled from "styled-components";

// Navigation Bar
export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1440px;
  height: 75px;
  background-color: transparent;
  //   box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;

  & > p {
    font-family: "Pretendard-Bold";
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 50px;
  gap: 50px;

  & > a {
    width: fit-content;
    height: fit-content;
    border-radius: 25px;
    transition: all 0.3s ease-in-out;
  }
  & > a:hover {
    transform: scale(1.1);
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
`;

export const FrameLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100vh;
  padding-left: 50px;

  & > .title {
    font-family: "Pretendard-Bold";
    font-size: 96px;
    color: #000000;
  }
  & > .title:nth-child(2) {
    font-family: "Pretendard-Light";
  }
  & > .subtitle {
    margin-top: 30px;
    font-family: "Pretendard-Regular";
    font-size: 24px;
    color: #9d9d9d;
  }
`;

export const FrameRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100vh;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 460px;

  & > .overlay {
    z-index: 1;
    position: absolute;
    width: 320px;
    height: 460px;
    background: linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%);
    filter: brightness(1.1) opacity(0.8);
    mix-blend-mode: color-dodge;
    background-size: 150% 150%;
    background-position: 100%;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  }
`;
