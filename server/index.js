const express = require("express");
const app = express();
const port = process.env.PORT || 3065;
const path = require("path");
require("dotenv").config();
const cors = require("cors");

// parsing
const parsing = require('./fetching.js');

// axios
const axios = require("axios");

// deploy mode
const isMode = 'development';

// body-parser
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

// CORS 허용
let corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://openapi.naver.com',
    'https://movie.daum.net',
    'https://mucvies.herokuapp.com'
  ],
  credentials: true
}
app.use(cors(corsOptions));

// 네이버 API 정보 (환경변수 사용)
const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// API 데이터 가져오기
app.get('/api/search', (req, res) => {
  // 클라이언트에서 보낸 검색어
  const searchKeyword = req.query.query;
  const searchGenre = req.query.genre;
  const searchCountry = req.query.country;

  axios.get('https://openapi.naver.com/v1/search/movie.json',
    {
      params: {
        display: 15, // 검색 결과 노출 개수
        query: searchKeyword,
        genre: searchGenre || '',
        country: searchCountry || '',
      },
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET
      }
    }).then((response) => {
    const { data } = response;
    // 클라이언트에 보내기
    res.json(data.items);
  }).catch((error) => {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    console.log(message);
  })
});

app.get('/api/boxoffice', (req, res) => {
  const period = req.query.period;

  parsing(period)
    .then((response) => {
      res.json(response);
    });
})

// Server
app.listen(port, () => {
  console.log(`server start ${port}`);
})