import 'regenerator-runtime/runtime';
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3000/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(async () => {
  browser.close();
});

describe('brand name render', async () => {

  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('renders brand name upon page load', async () => {
    var div = '.title';
    const brandName = await page.$eval(div, e => e.textContent);
    expect(brandName).toEqual('Jones - Morar');
  });

});