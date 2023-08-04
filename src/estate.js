import { estateUrl, estateListItemSelector } from "./consts.js";
import { browser } from "./browser.js";
import { utilities } from "./utilities.js";

const getByFilterSym = Symbol("getByFilter");

export const estate = {
  async getByFilters(filterQueries = [], exportedData = []) {
    if (filterQueries.length == 0) return exportedData;

    await browser.init();
    let browserInstance = browser.getInstance();

    const [page] = await browserInstance.pages();

    const query = filterQueries[0];

    await page.goto(`${estateUrl}/${query}`, {
      waitUntil: "networkidle2",
      timeout: "5000",
    });

    await utilities.sleep(1500);

    let nextPage = true;
    let pageNumber = 1;
    while (nextPage && pageNumber <= 20) {
      // TODO: page patladiginda kaldigi yerden devam etmesini sagla
      // TODO: kiralik dosyasi varsa uzerine yazmasin yeni bir dosya olustur timestamp ile
      // TODO: her fetch isleminden sonra birkac sayfa beklemesini sagla
      let rows = await estate[getByFilterSym](page);

      exportedData = exportedData.concat(rows);

      console.log(`transaction in progress with ${rows.length} data.`);

      const nextButton = await page.$("a.he-pagination__navigate-text--next");
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

    let rows = await estate[getByFilterSym](page);

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
    serviceResult.forEach((estate) => {
      let estateInDb = dbData.find((x) => x.dataId === estate.dataId);

      if (estateInDb == undefined)
        dbData.push({
          dataId: estate.dataId,
          title: estate.title,
          type: estate.type,
          roomCount: estate.roomCount,
          squareMeter: estate.squareMeter,
          buildingAge: estate.buildingAge,
          floorType: estate.floorType,
          price: estate.price,
          date: estate.date,
          city: estate.city,
          imageUrl: estate.imageUrl,
          creationTime: estate.date,
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

    const rows = await page.$$eval(estateListItemSelector, (rows) => {
      return rows.map((row) => {
        let dataIdElement = row.getAttribute("id");
        let titleElement = row.querySelector("article.listingView h3");
        let priceElement = row.querySelector("span.list-view-price");
        let dateElement = row.querySelector("span.list-view-date");
        let typeElement = row.querySelector("section.middle div.left span");
        let roomCountElement = row.querySelector("span.houseRoomCount");
        let squareMeterElement = row.querySelector("span.squareMeter");
        let buildingAgeElement = row.querySelector("span.buildingAge");
        let floorTypeElement = row.querySelector("span.floortype");
        let cityElement = row.querySelector(
          "div.list-view-location span:first-child"
        );
        let districtElement = row.querySelector(
          "div.list-view-location span:last-child"
        );
        let imageElement = row.querySelector("img.list-view-image");

        return {
          dataId: dataIdElement ? dataIdElement : null,
          title: titleElement ? titleElement.innerText.trim() : null,
          price: priceElement
            ? parseFloat(
                priceElement.innerText.replace(".", "").replace(",", ".")
              )
            : null,
          date: dateElement ? dateElement.innerText.trim() : null,
          type: typeElement ? typeElement.innerText.trim() : null,
          roomCount: roomCountElement
            ? roomCountElement.innerText.trim()
            : null,
          squareMeter: squareMeterElement
            ? parseFloat(
                squareMeterElement.innerText
                  .replace(" m2", "")
                  .replace(".", "")
                  .replace(",", ".")
              )
            : null,
          buildingAge: buildingAgeElement
            ? buildingAgeElement.innerText.trim()
            : null,
          floorType: floorTypeElement
            ? floorTypeElement.innerText.trim()
            : null,
          city: cityElement ? cityElement.innerText.trim() : null,
          district: districtElement ? districtElement.innerText.trim() : null,
          imageUrl: imageElement ? imageElement.src : null,
        };
      });
    });

    exportedData = exportedData.concat(rows);

    return exportedData;
  },
};
