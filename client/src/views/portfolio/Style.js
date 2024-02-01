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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;

  & > .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  & > .lottie-scrolldown {
    height: 5vh;
  }
`;

export const FrameLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 95vh;
`;

export const FrameRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 60%;
  height: 95vh;
  padding-left: 50px;

  & > .title {
    font-family: "Pretendard-Regular";
    font-size: 96px;
    color: #000000;
  }
  & > .subtitle {
    margin-top: 30px;
    font-family: "Pretendard-Light";
    font-size: 24px;
    color: #9d9d9d;
  }
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
    background-size: 150% 150%;
    background-position: 100%;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
    color: #d3d3d3;
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
`;
