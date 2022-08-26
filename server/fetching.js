const cheerio = require('cheerio');
const axios = require('axios');
const urlencode = require('urlencode');

const getHTML = async () => {
  try {
    return await axios.get('https://movie.daum.net/ranking/boxoffice/weekly');
  } catch (error) {
    console.error(error);
  }
}

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);

  const boxoffice = $('.box_boxoffice > ol > li');

  const parsingData = [];

  boxoffice.each((idx, node) => {
    const image = $(node).find('.poster_movie img').attr('src');
    const title = $(node).find('.thumb_cont strong a').text();
    const attendance = $(node).find('.txt_info .info_txt:nth-child(2)').text();
    const rank = $(node).find('.poster_movie .rank_num').text();

    if (title === "") {
      return;
    }

    parsingData.push({
      image,
      title,
      attendance,
      rank,
    });
  });

  return parsingData;
}

module.exports = parsing;
