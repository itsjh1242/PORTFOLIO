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
  z-index: 2;
  transition: all 0.3s ease-in-out;
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
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  & > .background-text {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -3;

    & > p {
      font-family: "Pretendard-Bold";
      font-size: 196px;
      color: #000000;
      transition: all 0.8s ease-in-out;
    }
  }

  & > .center-image {
    z-index: -2;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    width: 580px;
    height: 650px;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: all 0.8s ease-in-out;
    }
  }

  & > .lottie-scrolldown {
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
  }
`;

export const FrameLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-left: 50px;
`;

export const FrameRight = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 50px;
`;

export const BlurFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  transition: all 0.8s ease-in-out;
  backdrop-filter: ${(props) => (props.selected ? "" : "blur(5px)")};
`;

export const FrameTitle = styled.div`
  & > p {
    width: 500px;
    text-align: ${(props) => (props.position === "left" ? "left" : "right")};
    font-family: "Pretendard-Bold";
    font-size: 72px;
    transition: all 0.8s ease-in-out;
    color: ${(props) => (props.selected ? "#000000" : "#d3d3d3")};
  }

  & > p:nth-child(2) {
    text-align: left;
    font-family: "Pretendard-Regular";
    font-size: 24px;
    color: ${(props) => (props.selected ? "#000000" : "#d3d3d3")};
    transition: all 0.8s ease-in-out;
  }
`;

// About Section
export const AboutFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;

  width: 100vw;
  max-width: 1200px;
  height: 1200px;
`;

export const AboutTitle = styled.div`
  & > p {
    text-align: center;
    font-family: "Pretendard-Bold";
    font-size: 196px;
  }
`;

export const AboutMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 100%;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 50px;

  & > p {
    font-family: "Pretendard-Regular";
    font-size: 24px;
    color: #9d9d9d;
    transition: all 0.8s ease-in-out;

    & > span {
      font-family: "Pretendard-Bold";
      font-size: 12px;
      color: #000000;
    }
  }
  & > p:nth-child(even) {
    transform: translateX(-55%);
    text-align: right;
  }
  & > p:nth-child(odd) {
    transform: translateX(55%);
    text-align: left;
  }
`;

export const AboutVerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #d3d3d3;
`;

export const AboutVerticalLineColor = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: ${(props) => props.height}%;
  background-color: #000000;
  transition: all 0.8s ease-in-out;
`;

// Stack Section
export const StackFrame = styled.div`
  width: 100vw;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: flex-center;
  align-items: center;
`;

export const StackSlide = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StackSlideItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-right: 50px;

  animation: slide 33s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    & > img {
      width: 80%;
      height: 90%;
      object-fit: cover;
      object-position: center;
    }

    & > p {
      font-family: "Pretendard-Bold";
      font-size: 16px;
      color: #000000;
      margin-top: 10px;
    }
  }
`;
