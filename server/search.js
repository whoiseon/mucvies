const cheerio = require('cheerio');
const axios = require('axios');
const urlencode = require('urlencode');

const getHTML = async (searchKeyword) => {
  try {
    return await axios.get(`https://movie.daum.net/search?q=${searchKeyword}#tab=movie`);
  } catch (error) {
    console.error(error);
  }
}

const parsing = async (searchKeyword) => {
  const keyword = urlencode(searchKeyword)
  const html = await getHTML(keyword);
  const $ = cheerio.load(html.data);

  const search = $('.search_result > ul > li');

  const parsingData = [];

  search.each((idx, node) => {
    const image = $(node).find('.thumb_img span').attr('style');
    const title = $(node).find('.thumb_cont .tit_item a').text();

    if (title === "") {
      return;
    }

    parsingData.push({
      image,
      title,
    });
  });

  console.log(parsingData);
}

parsing('도라에몽');

// module.exports = parsing;
