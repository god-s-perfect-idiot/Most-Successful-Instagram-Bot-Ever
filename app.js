// const puppeteer = require('puppeteer-extra')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')


// const {wait} = require('./helpers/utils.js')

import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { wait } from './helpers/utils.js';
import { login } from './helpers/_ig.js';

puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage()
    await login(page)
    await wait(10000)
    await page.close()
    await browser.close()
})()


