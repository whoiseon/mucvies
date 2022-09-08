const cheerio = require('cheerio');
const axios = require('axios');

const getHTML = async () => {
  try {
    return await axios.get(`https://movie.daum.net/ranking/ott`);
  } catch (error) {
    console.error(error);
  }
};

const parsing = async () => {
  const html = await getHTML();
  const $ = cheerio.load(html.data);

  const ott = $('.section_ranking > .box_ranking > .detail_rankinginfo');

  const parsingData = [
    {
      title: '티빙',
      movie: [],
    },
    {
      title: '웨이브',
      movie: [],
    },
    {
      title: '왓챠',
      movie: [],
    }
  ];

  ott.each((idx, node) => {
    const movie = $(node).find('ol > li');
    const ott = $(node).find('.head_section .tit_section').text();

    parsingData[idx].title = ott;

    movie.each((i, n) => {
      const title = $(n).find('.item_poster .thumb_cont .tit_item a').text();
      const image = $(n).find('.item_poster .thumb_item .poster_movie img').attr('src');
      const rank = $(n).find('.item_poster .thumb_item .poster_movie .rank_num').text();
      const link = $(n).find('.item_poster > a').attr('href');
      const code = link.replace(/[^0-9]/g, "");

      if (title === "") {
        return;
      }

      parsingData[idx].movie.push({
        title,
        image,
        rank,
        code,
      })
    });
  });

  return parsingData;
};

module.exports = parsing;