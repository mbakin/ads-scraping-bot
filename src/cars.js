import { carListItemSelector, carUrl } from "./consts.js";
import { browser } from "./browser.js";
import { utilities } from "./utilities.js";

const getByFilterSym = Symbol("getByFilter");

export const cars = {
  async getByFilters(filterQueries = [], exportedData = []) {
    if (filterQueries.length == 0) return exportedData;

    await browser.init();
    let browserInstance = browser.getInstance();

    const [page] = await browserInstance.pages();

    const query = filterQueries[0];

    await page.goto(`${carUrl}/${query}`);

    await utilities.sleep(1500);

    let nextPage = true;
    let pageNumber = 1;
    while (nextPage && pageNumber <= 5) {
      let rows = await cars[getByFilterSym](page);

      exportedData = exportedData.concat(rows);

      console.log(`transaction in progress with ${rows.length} data.`);

      const nextButton = await page.$("#pagingNext");
      if (nextButton) {
        await Promise.all([
          nextButton.click(),
          page.waitForNavigation({ waitUntil: "networkidle0" }),
        ]);
        pageNumber++;
      } else {
        nextPage = false;
      }
    }

    let rows = await cars[getByFilterSym](page);

    exportedData = exportedData.concat(rows);

    console.log(`transaction in progress with ${rows.length} data.`);

    filterQueries = filterQueries.filter((x) => x != query);
    return await this.getByFilters(filterQueries, exportedData);
  },
  getUpdatedDbData(dbData, serviceResult) {
    this.createIfNotExist(dbData, serviceResult);
    this.updateIfPriceChanged(dbData, serviceResult);
    this.deleteIfNotExistInDb(dbData, serviceResult);

    return dbData;
  },
  createIfNotExist(dbData, serviceResult) {
    serviceResult.forEach((car) => {
      let carInDb = dbData.find((x) => x.dataId === car.dataId);

      if (carInDb == undefined)
        dbData.push({
          dataId: car.dataId,
          model: car.model,
          title: car.title,
          year: car.year,
          km: car.km,
          color: car.color,
          price: car.price,
          releaseDate: car.releaseDate,
          city: car.city,
          imageUrl: car.imageUrl,
          district: car.district,
          creationTime: car.releaseDate,
          priceChangeDates: [new Date().toJSON()],
          isDeleted: false,
          notifyFlagByPrices: 1,
        });
    });
  },
  updateIfPriceChanged(dbData, serviceResult) {
    serviceResult.forEach((car) => {
      let dbCar = dbData.find((x) => x.dataId === car.dataId);

      if (dbCar !== undefined && dbCar.prices) {
        if (car.price !== dbCar.prices[dbCar.prices.length - 1]) {
          dbCar.prices.push(car.price);
          dbCar.priceChangeDates.push(new Date().toJSON());
        }
      }
    });
  },

  deleteIfNotExistInDb(dbData, serviceResult) {
    dbData.forEach((car) => {
      let serviceCar = serviceResult.find((x) => x.dataId === car.dataId);

      if (serviceCar === undefined) {
        car.isDeleted = true;
      }
    });
  },

  async [getByFilterSym](page, exportedData = []) {
    await utilities.sleep(1500);

    const rows = await page.$$eval(carListItemSelector, (rows) => {
      function getSahBotHtmlToNumber(price) {
        let str = price
          .replace(".", "")
          .replace(",", ".")
          .replace(" TL", "")
          .trim();
        let num = parseFloat(str);

        if (str.replace(".", "").length >= 7) {
          num = num * 1000;
        }

        return num;
      }

      return rows.map((row) => {
        let dataIdElement = row.getAttribute("id");
        let modelElement = row.querySelector(
          ".listing-modelname div.listing-text-new"
        );
        let titleElement = row.querySelector(
          ".horizontal-half-padder-minus div.listing-text-new"
        );
        let yearElement = row.querySelector("td.listing-text:nth-child(4) a");
        let kmElement = row.querySelector("td.listing-text:nth-child(5) a");
        let colorElement = row.querySelector("td.listing-text:nth-child(6) a");
        let priceElement = row.querySelector(
          "td > div.fade-out-content-wrapper > a > span.listing-price"
        );
        let releaseDateElement = row.querySelector("td.listing-text.tac a");
        let cityElement = row.querySelector(
          "td.listing-text:nth-child(9) span:first-child"
        );
        let imageElement = row.querySelector("img.listing-image");
        let districtElement = row.querySelector(
          "td.listing-text:nth-child(9) span:last-child"
        );
        return {
          dataId: dataIdElement ? dataIdElement : null,
          model: modelElement ? modelElement.innerText.trim() : null,
          title: titleElement ? titleElement.innerText.trim() : null,
          year: yearElement ? yearElement.innerText.trim() : null,
          km: kmElement ? kmElement.innerText.trim() : null,
          color: colorElement ? colorElement.innerText.trim() : null,
          price: priceElement
            ? getSahBotHtmlToNumber(priceElement.innerText.trim())
            : null,
          releaseDate: releaseDateElement
            ? releaseDateElement.innerText.trim()
            : null,
          city: cityElement ? cityElement.title.trim() : null,
          imageUrl: imageElement ? imageElement.src : null,
          district: districtElement ? districtElement.title.trim() : null,
        };
      });
    });

    exportedData = exportedData.concat(rows);

    return exportedData;
  },
};
