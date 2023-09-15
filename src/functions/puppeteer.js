const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://letterboxd.com/ttmassa/watchlist/');

    const movies = await page.evaluate(() => {
        const movieElements = document.querySelectorAll('.film-poster');
    
        const movieData = [];
        movieElements.forEach((element) => {
          const title = element.querySelector('.film-poster-title').innerText;
          const director = element.querySelector('.film-poster-director').innerText;
          movieData.push({ title, director });
        });
    
        return movieData;
      });
    
      console.log(movies);
    
      await browser.close();
})