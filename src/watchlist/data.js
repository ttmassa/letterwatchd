const scrapeLetterboxdWatchlist = require('./letterboxd-scraper');

async function main() {
  const filmData = await scrapeLetterboxdWatchlist();
  console.log(filmData);
}

main();