const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

var papago_client_id = "WNuFVwBjucKghLUUB3_g";
var papago_client_secret = "i00xiYKcp6";

app.post("/translate", function (req, res) {
  const { query } = req.body;
  var api_url = "https://openapi.naver.com/v1/papago/n2mt";
  var request = require("request");
  var options = {
    url: api_url,
    form: { source: "ko", target: "en", text: query },
    headers: { "X-Naver-Client-Id": papago_client_id, "X-Naver-Client-Secret": papago_client_secret },
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
