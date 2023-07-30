import puppeteer from "puppeteer";
import * as path from "path";
import { ChromeExecPath } from "./consts.js";

export const browser = {
  browserOpened: false,

  async init(headless = false) {
    if (this.browserOpened) return;

    let instance;
    const symbol = Symbol("browser");

    browser[symbol] = instance = await puppeteer.launch({
      headless: headless,
      executablePath: ChromeExecPath,
      width: 1600,
      height: 900,
    });

    browser.browserOpened = true;

    const [page] = await instance.pages();

    instance.on("connected", () => {
      browser.browserOpened = true;
    });

    instance.on("disconnected", () => {
      browser.browserOpened = false;
    });

    page.setDefaultNavigationTimeout(60000);

    browser.getInstance = () => browser[symbol];
  },
  getInstance() {},
};
