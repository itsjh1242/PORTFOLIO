import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  width: 100vw;
  height: 100vh;
  background-color: #040a22;

  & > .gradient {
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translateX(-50%) translateY(50%);

    width: 500px;
    height: 500px;
    filter: blur(50px);
    background-image: linear-gradient(#4ddc9e, #5b37eb, #f1307e);
    animation: rotate 10s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 12px;

  width: 1100px;
  height: 600px;
  border: none;
  background-color: transparent;

  & > .name {
    font-family: Roboto;
    font-size: 120px;
    font-weight: bold;
    color: #fff;
  }
  & > .song {
    font-family: Roboto;
    font-size: 48px;
    color: #fff;
  }
  & > .desc {
    width: 450px;
    font-family: Roboto;
    font-size: 20px;
    color: #aaaaaa;
    text-align: justify;
  }
  & > .img {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 500px;
    height: 700px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 800px;
  height: 150px;
  border: none;
  background-color: transparent;

  margin-bottom: 20px;

  overflow: hidden;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.position === "center" ? "150px" : "120px")};
  height: ${(props) => (props.position === "center" ? "150px" : "120px")};
  border-radius: 100%;
  background: radial-gradient(circle at bottom left, #f58529 20%, #c42d91);

  overflow: hidden;
  opacity: ${(props) => (props.position === "center" ? "1" : "0.5")};

  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
