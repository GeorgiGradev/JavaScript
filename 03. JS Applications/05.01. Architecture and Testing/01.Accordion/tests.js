const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser;
let page;

describe('End-To-End Tests', function () {
    // this.timeout(2000);
    before(async () => {
        browser = await chromium.launch();
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });

    it('should load all titles', async function () {
        await page.goto('http://127.0.0.1:5500/index.html');
        let content = await page.content();

        expect(content).to.contains('Scalable Vector Graphics');
        expect(content).to.contains('Open standard');
        expect(content).to.contains('Unix');
        expect(content).to.contains('ALGOL');
    });

    it('should get content from server on button click', async function () {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('text=More');

        let isVisible = await page.isVisible('.extra p');
        expect(isVisible).to.be.true;

        let buttonLess = await page.textContent('text=LESS');
        expect(buttonLess).to.be.not.undefined;
    });

    it('should change button back to MORE on click after we it\'s been changed to LESS', async function () {
        await page.goto('http://127.0.0.1:5500/index.html');
        await page.click('text=More');
        await page.click('text=Less');

        let buttonMore = await page.textContent('text=More');
        expect(buttonMore).to.be.not.undefined;
    });
})