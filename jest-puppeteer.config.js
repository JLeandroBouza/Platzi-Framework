const { launch, BrowserContext } = require("puppeteer");

module.exports = {
    launch: {
        headless: false,
        slowMo: 100,
    },
    BrowserContext: 'default'
}