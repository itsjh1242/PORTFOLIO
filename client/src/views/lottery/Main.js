import React, { useState, useEffect } from "react";

// Function
import * as F from "./function";

// Style
import * as S from "./Style";
// Icon
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const LOTTERY_SEQUENCE = ["drwtNo1", "drwtNo2", "drwtNo3", "drwtNo4", "drwtNo5", "drwtNo6"];
const BALL_COLOR = { 40: "B0D940", 30: "ABABAB", 20: "FE7272", 10: "68C8F2", 0: "FAC400" };

// 당첨번호 공 색상
function LotteryBallColor(number) {
  let color;
  Object.keys(BALL_COLOR).forEach((key, index) => {
    if (parseInt(number) > parseInt(key)) {
      color = BALL_COLOR[key];
    }
  });
  return color;
}

export default function Lottery() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [currentDrwNo, setCurrentDrwNo] = useState(0);
  const [lotteryData, setlotteryData] = useState({
    bnusNo: 0,
    drwNo: 0,
    drwNoDate: "",
    drwtNo1: 0,
    drwtNo2: 0,
    drwtNo3: 0,
    drwtNo4: 0,
    drwtNo5: 0,
    drwtNo6: 0,
    firstAccumamnt: 0,
    firstPrzwnerCo: 0,
    firstWinamnt: 0,
    returnValue: "",
    totSellamnt: 0,
  });
  const [lotteryHistoryData, setLotteryHistoryData] = useState({});

  // 생성 내역 및 최신회차 정보
  useEffect(() => {
    const getLotteryHistoryData = async () => {
      try {
        const data = await F.GetMyLottery();
        setLotteryHistoryData(data.sort((a, b) => b.drwNo - a.drwNo));
      } catch (error) {
        console.log("@@@@getLotteryHistoryData", error);
      }
    };
    getLotteryHistoryData();

    const getLastLottery = async () => {
      try {
        const data = await F.GetLastLottery();
        setlotteryData(data);
        setCurrentDrwNo(data.drwNo);
      } catch (error) {
        console.log("@@@@getLastLottery", error);
      }
    };
    getLastLottery();
  }, [isButtonClicked]);

  //   지난 회차 정보 가져오기
  async function getPrevWeek() {
    try {
      const data = await F.getLottery(lotteryData.drwNo - 1);
      setlotteryData(data);
    } catch (error) {
      console.log("@@@@getPrev", error);
    }
  }
  //   다음 회차 정보 가져오기
  async function getNextWeek() {
    try {
      const data = await F.getLottery(lotteryData.drwNo + 1);
      setlotteryData(data);
    } catch (error) {
      console.log("@@@@getPrev", error);
    }
  }

  // 번호 생성
  const handleGenerateClick = () => {
    F.GenerateLottery();
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <S.Window>
        <S.Frame>
          <S.Header>
            <p className="title">언젠간 되겠지</p>
            <p className="sub-title">동행 복권 번호 추첨 프로그램</p>
          </S.Header>
          <S.Body>
            <S.LotteryResultBox>
              <div className="header">
                <div className="title">
                  {currentDrwNo === 1 ? null : (
                    <IoIosArrowBack
                      size={18}
                      onClick={() => {
                        getPrevWeek();
                      }}
                    />
                  )}
                  <p>
                    <span>{lotteryData.drwNo}회</span> 당첨결과
                  </p>
                  {lotteryData.drwNo === currentDrwNo ? null : (
                    <IoIosArrowForward
                      size={18}
                      onClick={() => {
                        getNextWeek();
                      }}
                    />
                  )}
                </div>
                <p className="sub-title">{lotteryData.drwNoDate} 추첨</p>
              </div>
              <div className="body">
                <div className="left">
                  <div className="lottery-ball">
                    {LOTTERY_SEQUENCE.map((no, index) => {
                      return (
                        <S.LotteryBall key={index} $ballColor={LotteryBallColor(lotteryData[no])}>
                          <p>{lotteryData[no]}</p>
                        </S.LotteryBall>
                      );
                    })}
                  </div>
                  <p className="desc">당첨번호</p>
                </div>
                <FaPlus size={24} />
                <div className="right">
                  <div className="lottery-ball">
                    <S.LotteryBall $ballColor={LotteryBallColor(lotteryData.bnusNo)}>
                      <p>{lotteryData.bnusNo}</p>
                    </S.LotteryBall>
                  </div>
                  <p className="desc">보너스번호</p>
                </div>
              </div>
            </S.LotteryResultBox>
            <S.Row>
              <S.LotteryHistoryBox key={isButtonClicked}>
                <div className="overflow">
                  <div className="grid-row head">
                    <p>회차</p>
                    <p>내 번호</p>
                    <p>추첨 번호</p>
                    <p>당첨 개수</p>
                    <p>상태</p>
                  </div>
                  {Object.keys(lotteryHistoryData).map((key, index) => {
                    return (
                      <div className="grid-row" key={index}>
                        <p>{lotteryHistoryData[key].drwNo}</p>
                        <div className="mynum">
                          {lotteryHistoryData[key].myDrwNo.map((num, index) => {
                            return (
                              <div className="ball" key={index} style={{ background: `#${LotteryBallColor(num)}` }}>
                                <p>{num}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mynum">
                          {lotteryHistoryData[key].drwNoWin
                            ? lotteryHistoryData[key].drwNoWin.map((num, index) => {
                                if (index === 6) {
                                  return <FaPlus size={10} key={index} />;
                                } else {
                                  return (
                                    <div className="ball" key={index} style={{ background: `#${LotteryBallColor(num)}` }}>
                                      <p>{num}</p>
                                    </div>
                                  );
                                }
                              })
                            : "-"}
                        </div>
                        <p className="win-rate">
                          <span>{lotteryHistoryData[key].status["returnCount"] ? lotteryHistoryData[key].status["returnCount"] : "-"}</span> / 6
                        </p>
                        <p>{lotteryHistoryData[key].status["returnStatus"] ? lotteryHistoryData[key].status["returnStatus"] : "대기중"}</p>
                      </div>
                    );
                  })}
                </div>
              </S.LotteryHistoryBox>
              <S.LotteryGenerateButton
                onClick={() => {
                  handleGenerateClick();
                }}
              >
                <p>번호 생성</p>
              </S.LotteryGenerateButton>
            </S.Row>
          </S.Body>
        </S.Frame>
      </S.Window>
    </>
  );
}
