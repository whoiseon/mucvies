const cheerio = require('cheerio');
const axios = require('axios');

const getHTML = async (movieCode) => {
  try {
    return await axios.get(`https://movie.daum.net/moviedb/main?movieId=${movieCode}`);
  } catch (error) {
    console.error(error);
  }
}

const parsing = async (movieCode) => {
  const html = await getHTML(movieCode);
  const $ = cheerio.load(html.data);

  // info
  const imageLink = $('.section_detail .box_basic .info_poster .thumb_img span:nth-child(1)').attr('style');
  const sliceImageLink = imageLink.substring(21);
  const image = sliceImageLink.slice(0, -1);
  const title = $('.section_detail .box_basic .info_detail .detail_tit .inner_tit span').text();
  const subTitle = $('.section_detail .box_basic .info_detail .detail_tit .head_origin span:nth-child(1)').text();
  const release = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(1) .list_cont:nth-child(1) dd').text();
  const genre = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(1) .list_cont:nth-child(2) dd').text();
  const country = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(1) .list_cont:nth-child(3) dd').text();
  const rank = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(1) .list_cont:nth-child(4) dd').text();
  const runningTime = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(1) .list_cont:nth-child(5) dd').text();
  const rating = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(2) .list_cont:nth-child(1) dd').text();
  const attendance = $('.section_detail .box_basic .info_detail .detail_cont .inner_cont:nth-child(2) .list_cont:nth-child(2) dd').text();

  // OTT service link
  const watcha = $('.section_detail .box_basic .info_detail .detail_btn .group_btn a:nth-child(1)').attr('href');
  const tiving = $('.section_detail .box_basic .info_detail .detail_btn .group_btn a:nth-child(2)').attr('href');
  const wave = $('.section_detail .box_basic .info_detail .detail_btn .group_btn a:nth-child(3)').attr('href');

  // content
  // const summary = $('.section_detail .box_detailinfo .contents .detail_basicinfo > .movie_summary > .info_desc > .desc_cont').hasClass();
  const summary = $('.section_detail .box_detailinfo .contents .detail_crewinfo .tit_section').text();


  const parsingData = {
    image,
    title,
    subTitle,
    release,
    genre,
    country,
    rank,
    runningTime,
    rating,
    attendance,
    ottLink: {
      watcha,
      tiving,
      wave,
    }
  };

  return parsingData;
};

module.exports = parsing;
