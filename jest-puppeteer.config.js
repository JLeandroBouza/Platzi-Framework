const { launch, BrowserContext } = require("puppeteer");

module.exports = {
    launch: {
        headless: false,
        slowMo: 100,
        defaultViewport: null
    },
    BrowserContext: 'default'
}