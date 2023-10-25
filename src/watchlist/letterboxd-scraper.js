const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeLetterboxdWatchlist(username) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const watchlistUrl = `https://letterboxd.com/${username}/watchlist/`;

  await page.goto(watchlistUrl);
  await page.waitForSelector("li.poster-container");

  await page.waitForTimeout(5000); 

  const filmData = [];

  async function scrapePage() {
    const filmContainers = await page.$$("li.poster-container");

    for (const filmContainer of filmContainers) {
      const filmInfo = await filmContainer.evaluate((element) => {
        const id = 1;
        const title = element.querySelector("img").getAttribute("alt");
        const releaseYear =
          element.getAttribute("data-film-release-year") || "";
        const director = element.getAttribute("data-film-director") || "";
        const imageUrl = element.querySelector("img").getAttribute("src");

        return {
          id,
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

  // Écrivez les données dans data.js
  const dataFileContent = `const filmData = ${JSON.stringify(
    filmData,
    null,
    2
  )};\n\nexport default filmData;\n`;
  fs.writeFileSync("data.js", dataFileContent);

  console.log(`Scraped ${filmData.length} films from the watchlist.`);
  console.log(filmData);

  await browser.close();
}

// Specify the username for the watchlist you want to scrape
const username = "balakazx";
scrapeLetterboxdWatchlist(username);
