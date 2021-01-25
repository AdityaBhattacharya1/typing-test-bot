const puppeteer = require('puppeteer')

;(async () => {
  // Want to run it in a browser of your choice? For instructions, visit Google Developers' article:
  // https://developers.google.com/web/tools/puppeteer/get-started#:~:text=To%20use%20Puppeteer%20with%20a,Firefox%20Nightly%20(experimental%20support).
  // The browser must be Chromium based for Puppeteer to function properly. It also works with Firefox Nightly (experimental support).
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  // Website link
  await page.goto('https://typing-speed-test.aoeu.eu/')
  await page.waitForSelector('.nextword')
  const words = await page.evaluate(() => {
    const wordEls = document.querySelectorAll('.nextword')
    const wordList = [document.querySelector('.currentword').innerText]
    wordEls.forEach((word) => {
      wordList.push(word.innerText)
    })

    return wordList
  })

  for (let i = 0; i < words.length; i++) {
    await page.type('#input', words[i])
    await page.keyboard.press(String.fromCharCode(32)) // 32 = Keycode for spacebar.
  }
})()
