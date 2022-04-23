import creds from '../creds.config.json'
import { wait } from './utils.js'


export const login = async (page) => {
    await page.goto('https://www.instagram.com')
    await wait(3000)
    await page.click('#loginForm div.-MzZI:nth-child(1)')
    await page.keyboard.type(creds.username, {delay: 500})
    await page.click('#loginForm div.-MzZI:nth-child(2)')
    await page.keyboard.type(creds.password, {delay: 500})
    await page.click('#loginForm div.qF0y9:nth-child(1) button.sqdOP.L3NKy.y3zKF')
}