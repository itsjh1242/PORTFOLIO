const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// Weather Picker API
app.post("/translate", function (req, res) {
  const { query } = req.body;
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var request = require("request");
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

server.listen(8080, () => {
  console.log("server is running on 8080");
});
