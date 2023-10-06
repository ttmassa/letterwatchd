const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeLetterboxdWatchlist(username) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const watchlistUrl = `https://letterboxd.com/${username}/watchlist/`;

  await page.goto(watchlistUrl);
  await page.waitForSelector('li.poster-container'); // Attendre que la page soit chargée

  const filmData = [];

  async function scrapePage() {
    const filmContainers = await page.$$("li.poster-container");

    for (const filmContainer of filmContainers) {
      const filmInfo = await filmContainer.evaluate((element) => {
        const title = element.querySelector('img').getAttribute('alt');
        const releaseYearElement = element.querySelector('span.number a');
        const releaseYear = releaseYearElement ? releaseYearElement.textContent.trim() : '';
        const directorElement = element.querySelector('p small a');
        const director = directorElement ? directorElement.textContent.trim() : '';
        const imageUrl = element.querySelector('img').getAttribute('src');

        return {
          title,
          director,
          releaseDate: releaseYear,
          coverImage: imageUrl,
        };
      });

      filmData.push(filmInfo);
    }
  }

  // Scrape the first page
  await scrapePage();

  fs.writeFileSync('filmData.json', JSON.stringify(filmData));

  console.log(`Scraped ${filmData.length} films from the watchlist.`);

  await browser.close();
}

// Specify the username for the watchlist you want to scrape
const username = "balakazx";
scrapeLetterboxdWatchlist(username);
