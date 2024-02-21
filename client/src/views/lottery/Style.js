import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100vw;
  max-width: 1200px;
  height: 100dvh;
  max-height: 800px;
  border: 1px solid #0000000a;
  border-radius: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 100px;

  & .title {
    font-family: "Pretendard-Medium";
    font-size: 28px;
  }
  & .sub-title {
    font-family: "Pretendard-Regular";
    font-size: 14px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 700px;
  gap: 30px;
`;

export const LotteryResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 280px;
  border: 1px solid #0000000a;
  border-radius: 30px;

  & > .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    width: 300px;

    & > .title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 16px;

      & > p {
        font-family: "Pretendard-Medium";
        font-size: 28px;
        & > span {
          font-family: "Pretendard-Bold";
          font-size: 28px;
          color: #bc4341;
        }
      }
    }
    & > .sub-title {
      font-family: "Pretendard-Regular";
      font-size: 14px;
    }
  }

  & > .body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 740px;
    height: 140px;

    & > .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 520px;
      height: 140px;
      gap: 12px;

      & > .lottery-ball {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 120px;
        background-color: #fafafa;
        border-radius: 30px;
      }
      & > .desc {
        font-family: "Pretendard-Bold";
        font-size: 14px;
      }
    }

    & > .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 140px;
      gap: 12px;

      & > .lottery-ball {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
        background-color: #fafafa;
        border-radius: 30px;
      }
      & > .desc {
        font-family: "Pretendard-Bold";
        font-size: 14px;
      }
    }
  }
`;

export const LotteryBall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #${(props) => props.$ballColor};

  & > p {
    font-family: "Pretendard-Bold";
    font-size: 28px;
    color: #ffffff;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LotteryHistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 250px;
  border: 1px solid #0000000a;
  overflow: hidden;

  & > .overflow {
    overflow: auto;
    width: 100%;
    height: 100%;

    & > .grid-row {
      display: grid;
      width: 100%;
      height: 30px;
      grid-template-columns: 20px 180px 210px 50px 40px;
      justify-content: space-around;
      align-items: center;

      & > p {
        font-family: "Pretendard-Regular";
        font-size: 11px;
        text-align: center;
      }

      & > .mynum {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 20px;
        gap: 4px;

        & > .ball {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;

          & > p {
            font-family: "Pretendard-Bold";
            font-size: 10px;
            color: #ffffff;
          }
        }
      }

      & > .win-rate {
        & > span {
          font-family: "Pretendard-Bold";
          font-size: 12px;
        }
      }
    }

    & .head {
      & > p {
        font-family: "Pretendard-Bold";
        font-size: 11px;
      }
    }
  }
`;

export const LotteryGenerateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 250px;
  border: 1px solid #0000000a;
  background-color: #fafafa;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #f0f0f0;
  }
  & > p {
    font-family: "Pretendard-Bold";
    font-size: 18px;
  }
`;
