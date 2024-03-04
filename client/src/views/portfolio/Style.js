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

  & > p {
    cursor: pointer;
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
  max-width: 1440px;
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
    width: 450px;
    text-align: ${(props) => (props.position === "left" ? "left" : "right")};
    font-family: "Pretendard-Bold";
    font-size: 72px;
    transition: all 0.8s ease-in-out;
    color: ${(props) => (props.selected ? "#000000" : "#d3d3d3")};
  }

  & > p:nth-child(2) {
    text-align: left;
    font-family: "Pretendard-Regular";
    font-size: 18px;
    color: ${(props) => (props.selected ? "#000000" : "#d3d3d3")};
    transition: all 0.8s ease-in-out;
  }
`;

// About Section
export const AboutFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;

  width: 100vw;
  max-width: 1200px;
  height: 900px;
`;

export const AboutTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
  opacity: ${(props) => props.handlecolor * 0.2};
  transition: all 0.8s ease-in-out;
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 196px;
    color: #bababa;
  }
`;

export const AboutMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  height: 100%;
  gap: 75px;
  margin-top: 50px;

  & > p {
    font-family: "Pretendard-Regular";
    font-size: 18px;
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

// Work Section
export const WorkFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;

  width: 100vw;
  max-width: 1000px;
  height: 100%;

  & > .worktitle {
    font-family: "Pretendard-Medium";
    font-size: 60px;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const WorkHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
  width: 100vw;
  max-width: 1000px;

  & > .quote {
    font-family: "Roboto";
    font-size: 28px;
    color: #000000;
    letter-spacing: -1px;
    word-spacing: 0.5px;
  }
  & > .quote-small {
    font-family: "Roboto";
    font-size: 18px;
    color: #8c98ac;
  }
  span {
    font-family: "Roboto";
    font-size: 14px;
    color: #6d6d6d;
  }

  & > .view-all-button {
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    border: 1px solid #aaaaaa;
    padding: 10px 20px;
    overflow: hidden;
    height: 20px;

    & > p {
      font-family: "Roboto";
      font-size: 18px;
      color: #000000;
    }
    &:hover {
      & > p {
        animation: text-move 0.5s ease-in-out;
      }
    }
    @keyframes text-move {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-150%);
      }
    }
  }
`;

export const WorkMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100vw;
  max-width: 1100px;
  height: 700px;

  & > div:hover {
    & > img {
      transform: scale(1.1);
    }
  }
  & > div {
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 4px 0px #d3d3d3;

    & > img {
      transition: all 0.5s ease-in-out;
    }

    & > .pop-up {
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      opacity: 0;
      transition: all 0.3s ease-in-out;
      padding: 20px;
      background-color: #0f172ad3;
      color: #dce3ed;

      & > p {
        font-family: "Pretendard-Regular";
        font-size: 20px;
      }
      & > p:nth-child(2) {
        font-family: "Pretendard-Regular";
        font-size: 14px;
        color: #8c98ac;
      }

      & > .footer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 12px;
        width: 100%;
        height: 100%;
      }
    }
  }

  & > .item1 {
    grid-row: 1 / 3;
  }

  & > .item2 {
    & > .pop-up {
      & > p {
        font-family: "Pretendard-Regular";
        font-size: 18px;
      }
      & > p:nth-child(2) {
        font-family: "Pretendard-Regular";
        font-size: 12px;
        color: #8c98ac;
      }
    }
  }
  & > .item3 {
    & > .pop-up {
      & > p {
        font-family: "Pretendard-Regular";
        font-size: 18px;
      }
      & > p:nth-child(2) {
        font-family: "Pretendard-Regular";
        font-size: 12px;
        color: #8c98ac;
      }
    }
  }
`;

export const WorkMainDescription = styled.div`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: #112b38;

  & > p {
    font-family: "Pretendard-Regular";
    font-size: ${(props) => (props.side === "true" ? "12px" : "14px")};
    color: #71d6cc;
  }
`;

// Footer Section
export const FooterFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 20px;
  width: 100vw;
  height: 100px;

  border-top: 1px solid #d3d3d3;

  & > .element {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100vw;
    max-width: 1000px;
  }

  p {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    color: #8c98ac;
  }

  .name {
    color: #465d85;
  }
`;

export const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & > .icon {
    width: 30px;
    height: 30px;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }
    & > a {
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const DesignedBy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

// Experience Section

export const ExperienceTitle = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 60px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ExperienceFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 20px;
  width: 100vw;
  max-width: 1000px;
  height: fit-content;
`;

export const ExperienceItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 50px;
  padding: 8px 16px;
  margin-bottom: 12px;
  box-shadow: 0px 0px 4px 0px #d3d3d3;

  p {
    transition: all 0.3s ease-in-out;
    color: ${(props) => (props.$visible === "true" ? "#000000" : "#8c98ac")};
  }
  & > .experience-item-title {
    font-family: "Pretendard-Medium";
    font-size: 16px;
  }
  & > .experience-item-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;

    & > p {
      font-family: "Pretendard-Regular";
      font-size: 14px;
    }
    & > svg {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const ExperiencePopup = styled.div`
  display: flex;
  display: ${(props) => (props.$visible === "true" ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 800px;
  height: 100%;
  padding: 20px 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #d3d3d3;
  animation: slide-up 0.3s ease-in-out;

  @keyframes slide-up {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }

  & > .experience-popup-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;

    p {
      font-family: "Pretendard-Medium";
      font-size: 14px;
      margin-right: 8px;
    }
  }

  & > .experience-popup-desc {
    font-family: "Pretendard-Regular";
    font-size: 14px;
    line-height: 1.4;
  }

  & > .experience-popup-stack {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;

    & > .experience-popup-stack-item {
      font-family: "Pretendard-Medium";
      font-size: 12px;
      padding: 8px 12px;
      border-radius: 25px;
      color: #71d6cc;
      background-color: #112b38;
    }
  }
`;
