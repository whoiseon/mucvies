const cheerio = require('cheerio');
const axios = require('axios');

const getHTML = async () => {
  try {
    return await axios.get(`https://movie.daum.net/ranking/reservation`);
  } catch (error) {
    console.error(error);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);

  const ranking = $('.box_ranking > ol > li');

  const parsingData = [];

  ranking.each((idx, node) => {
    const image = $(node).find('.poster_movie img').attr('src');
    const info = $(node).find('.poster_info a').text();
    const title = $(node).find('.thumb_cont strong a').text();
    const grade = $(node).find('.thumb_cont .txt_append .txt_grade').text();
    const num = $(node).find('.thumb_cont .txt_append .info_txt .txt_num').text();
    const release = $(node).find('.thumb_cont .txt_info .txt_num').text();
    const rank = $(node).find('.poster_movie .rank_num').text();

    if (title === "") {
      return;
    }

    parsingData.push({
      image,
      info,
      title,
      grade,
      num,
      release,
      rank,
    });
  });

  return parsingData;
};

module.exports = parsing;