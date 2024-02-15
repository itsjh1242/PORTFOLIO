import styled from "styled-components";

export const WorkAllFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const WorkAllHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 150px;
  padding-bottom: 8px;
  margin-bottom: 16px;

  & > .left {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 8px;

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;

      & > .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        & p {
          font-size: 16px;
          font-family: "Pretendard-Medium";
          padding: 0;
        }
      }
    }

    & > p {
      font-size: 48px;
      font-family: "Pretendard-Medium";
    }
  }

  & > .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;

    & > p {
      font-size: 14px;
      font-family: "Pretendard-Medium";
    }
    & > p:nth-child(1) {
      color: #8a8a8a;
      line-height: 0.3;
    }
  }
`;

export const WorkAllBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WorkCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;

export const CategoryItem = styled.p`
  font-size: ${(props) => (props.condition === "true" ? "16px" : "14px")};
  font-family: ${(props) => (props.condition === "true" ? "Pretendard-Bold" : "Pretendard-Regular")};
  border-bottom: ${(props) => (props.condition === "true" ? "2px solid #000" : "none")};
  padding: 4px 8px;
  margin-right: 16px;
  margin-bottom: 20px;
`;

export const WorkItemLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  padding: 20px;
  gap: 8px;

  & > .img-box:hover {
    cursor: none;
  }
  & > .img-box {
    width: 560px;
    height: 320px;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
      box-shadow: 0 60px 123px -25px hsla(225, 70%, 10%, 0.42), 0 35px 75px -35px hsla(225, 2%, 62%, 0.08);
      transform: perspective(800px) rotateY(25deg) scale(0.8) rotateX(10deg);

      &:hover {
        transform: perspective(800px) rotateY(0deg) scale(1) rotateX(0deg);
      }
    }
  }

  & > .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    width: 50%;
    height: 100%;

    & > .year {
      font-size: 12px;
      color: #8a8a8a;
    }
    & > .title {
      font-size: 28px;
      font-family: "Pretendard-Medium";
    }
    & > .desc {
      font-size: 16px;
      font-family: "Pretendard-Regular";
      line-height: 1.5;
      text-align: right;
      word-break: keep-all;
      color: #8a8a8a;
    }

    & > .tag {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;

      & > p {
        font-size: 12px;
        width: fit-content;
        padding: 8px 12px;
        border-radius: 20px;
        background-color: #112b38;
        color: #71d6cc;
      }
    }

    & > .use {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      gap: 8px;

      & > .icon {
        width: 30px;
        height: 30px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    & > .link {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      width: 100%;

      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 25px;
        height: 25px;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const WorkItemRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px;
  padding: 20px;
  gap: 8px;

  & > .img-box:hover {
    cursor: none;
  }
  & > .img-box {
    width: 560px;
    height: 320px;
    border-radius: 5px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;

      box-shadow: 0 60px 123px -25px hsla(225, 70%, 10%, 0.42), 0 35px 75px -35px hsla(225, 2%, 62%, 0.08);
      transform: perspective(800px) rotateY(-25deg) scale(0.8) rotateX(10deg);

      &:hover {
        transform: perspective(800px) rotateY(0deg) scale(1) rotateX(0deg);
      }
    }
  }

  & > .text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    width: 50%;
    height: 100%;

    & > .year {
      font-size: 12px;
      color: #8a8a8a;
    }
    & > .title {
      font-size: 28px;
      font-family: "Pretendard-Medium";
    }
    & > .desc {
      font-size: 16px;
      font-family: "Pretendard-Regular";
      line-height: 1.5;
      text-align: left;
      word-break: keep-all;
      color: #8a8a8a;
    }

    & > .tag {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      & > p {
        font-size: 12px;
        width: fit-content;
        padding: 8px 12px;
        border-radius: 20px;
        background-color: #112b38;
        color: #71d6cc;
      }
    }

    & > .use {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      gap: 8px;

      & > .icon {
        width: 30px;
        height: 30px;
        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    & > .link {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      width: 100%;

      & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 25px;
        height: 25px;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const ViewCursor = styled.div`
  display: ${(props) => (props.$visible ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #201d1d;
  opacity: 0.7;
  pointer-events: none;
  z-index: 100;

  & > p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-family: "Pretendard-Medium";
    color: #fff;
  }
`;

export const WorkAllDetailBackground = styled.div`
  display: ${(props) => (props.$visible ? "block" : "none")};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
export const WorkAllDetailFrame = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 90vh;
  overflow-y: scroll;
  box-shadow: 0 60px 123px -25px hsla(225, 70%, 10%, 0.42), 0 35px 75px -35px hsla(225, 2%, 62%, 0.08);
  z-index: 100;

  & > .detail-img-box {
    width: 100%;
    height: fit-content;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
