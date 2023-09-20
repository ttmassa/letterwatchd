const puppeteer = require('puppeteer');

async function scrapeLetterboxdWatchlist() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const watchlistUrl = "https://letterboxd.com/ttmassa/watchlist/";

  await page.goto(watchlistUrl);

  const filmContainers = await page.$$("li.poster-container");

  const filmData = [];

  for (const filmContainer of filmContainers) {
    const filmInfo = await filmContainer.evaluate((element) => {
      const title = element.querySelector('img').getAttribute('alt');
      const releaseYear = element.getAttribute('data-film-release-year');
      
      const directorElement = element.querySelector('a.frame-title');
      const director = directorElement ? directorElement.textContent : '';
  
      const imageUrl = element.querySelector('img').getAttribute('src');
  
      return {
        title,
        director,
        releaseYear,
        imageUrl,
      };
    });
  
    filmData.push(filmInfo);
  }
  
  

  console.log(filmData);

  await browser.close();
}

module.exports = scrapeLetterboxdWatchlist;
