const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const request = require("request");
const moment = require("moment");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// Weather Picker API
app.post("/translate", function (req, res) {
  const { query } = req.body;
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var options = {
    url: api_url,
    form: { source: "ko", target: "en", text: query },
    headers: { "X-Naver-Client-Id": process.env.PAPAGO_CLIENT_ID, "X-Naver-Client-Secret": process.env.PAPAGO_CLIENT_SECRET },
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

// Lottery
// Get Week
app.get("/lottery/week", (req, res) => {
  return res.json(getWeek());
});

// Default API
app.post("/lottery/:drwNo", (req, res) => {
  try {
    request.get({ uri: "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=" + req.params.drwNo, strictSSL: false }, (error, response, body) => {
      return res.json(JSON.parse(body));
    });
  } catch (error) {
    console.log("@@@@getLastLottery", error);
  }
});
// 최신 회차 정보 가져오기
app.get("/lottery/last", (req, res) => {
  try {
    let week = getWeek();
    request.get({ uri: "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=" + week, strictSSL: false }, (error, response, body) => {
      return res.json(JSON.parse(body));
    });
  } catch (error) {
    console.log("@@@@getLastLottery", error);
  }
});

// 가장 최신 회차 주 구하기
const getWeek = () => {
  const firstDate = moment("20021207");
  const today = moment();
  const dff = moment.duration(today.diff(firstDate)).asDays();
  return Math.floor(dff / 7) + 1;
};

server.listen(8080, () => {
  console.log("server is running on 8080");
});
