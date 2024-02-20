import { useState, useEffect } from "react";

import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const URL = "http://localhost:8080/";

async function GetLastLottery() {
  try {
    const response = await fetch(URL + "lottery/last");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("@@@@GetLastLottery", error);
    throw error;
  }
}

async function getLottery(drwNo) {
  try {
    const response = await fetch(URL + "lottery/" + drwNo, {
      method: "POST",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("@@@@getPrev", error);
    throw error;
  }
}

async function GetMyLottery() {
  try {
    const lotteryCollectionRef = collection(db, "lottery");
    const data = await getDocs(lotteryCollectionRef);
    const promises = data.docs.map(async (doc) => {
      const lotteryData = doc.data();
      const winData = await getLottery(lotteryData.drwNo); // lotteryData.drwNo
      if (winData.returnValue === "fail") {
        return {
          ...lotteryData,
          drwNoWin: null,
          status: ["대기중", "-"],
        };
      } else {
        const status = WinCheck(lotteryData, winData);
        return {
          ...lotteryData,
          drwNoWin: [winData.drwtNo1, winData.drwtNo2, winData.drwtNo3, winData.drwtNo4, winData.drwtNo5, winData.drwtNo6, 0, winData.bnusNo],
          status: status,
        };
      }
    });
    return await Promise.all(promises);
  } catch (error) {
    console.log("@@@@GetMyLottery", error);
    throw error;
  }
}

function WinCheck(myLotto, winLotto) {
  let returnStatus;
  let returnCount;
  const lotteryStatus = ["1등", "2등", "3등", "4등", "5등", "낙첨"];
  const myNumbers = myLotto.myDrwNo;
  const winNumbers = [winLotto.drwtNo1, winLotto.drwtNo2, winLotto.drwtNo3, winLotto.drwtNo4, winLotto.drwtNo5, winLotto.drwtNo6];
  const winBnusNo = winLotto.bnusNo;

  if (myNumbers.filter((value) => winNumbers.includes(value)).length === 6) {
    returnStatus = lotteryStatus[0];
    returnCount = 6;
  } else if (myNumbers.filter((value) => winNumbers.includes(value)).length === 5 && myNumbers.includes(winBnusNo)) {
    returnStatus = lotteryStatus[1];
    returnCount = 5;
  } else if (myNumbers.filter((value) => winNumbers.includes(value)).length === 5) {
    returnStatus = lotteryStatus[2];
    returnCount = 5;
  } else if (myNumbers.filter((value) => winNumbers.includes(value)).length === 4) {
    returnStatus = lotteryStatus[3];
    returnCount = 4;
  } else if (myNumbers.filter((value) => winNumbers.includes(value)).length === 3) {
    returnStatus = lotteryStatus[4];
    returnCount = 3;
  } else {
    returnStatus = lotteryStatus[5];
    if (myNumbers.filter((value) => winNumbers.includes(value)).length === 2) {
      returnCount = 2;
    } else if (myNumbers.filter((value) => winNumbers.includes(value)).length === 1) {
      returnCount = 1;
    } else {
      returnCount = 0;
    }
  }
  return { returnStatus: returnStatus, returnCount: returnCount };
}

export { GetLastLottery, getLottery, GetMyLottery };
