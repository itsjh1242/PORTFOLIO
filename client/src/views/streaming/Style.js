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

  @keyframes ani {
    0% {
      transform: translateY(-50%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes ani-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  & > .name {
    font-family: Roboto;
    font-size: 120px;
    font-weight: bold;
    color: #fff;
    animation: ani 0.5s;
  }
  & > .song {
    font-family: Roboto;
    font-size: 48px;
    color: #fff;
    animation: ani 0.6s;
  }
  & > .desc {
    width: 450px;
    font-family: Roboto;
    font-size: 20px;
    color: #aaaaaa;
    text-align: justify;
    animation: ani 0.7s;
  }
  & > .img {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 500px;
    height: 700px;

    animation: ani-opacity 0.7s;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & > svg {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

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
  opacity: ${(props) => (props.position === "center" ? "1" : "0.3")};
  animation: ${(props) => (props.position === "center" ? "size-up 0.5s" : "size-down 0.5s")};

  cursor: pointer;

  @keyframes size-up {
    0% {
      width: 120px;
      height: 120px;
    }
    100% {
      width: 150px;
      height: 150px;
    }
  }
  @keyframes size-down {
    0% {
      width: 150px;
      height: 150px;
    }
    100% {
      width: 120px;
      height: 120px;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
