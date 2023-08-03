import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { cars } from "./src/cars.js";
import { filters } from "./src/filters.js";
import { fileOperations } from "./src/file.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let main = {
  async init() {
    const type = process.argv.find((arg) => arg.startsWith("type=")).substr(5);

    switch (type) {
      case "car":
        let carDir = path.join(__dirname, "db", "summary", "car");

        if (!fs.existsSync(carDir)) {
          fs.mkdirSync(carDir, { recursive: true });
        }
        for (const arg of process.argv) {
          if (arg.startsWith("car=")) {
            const model = arg.substr(4);

            console.log("starting car: " + model);

            const serviceResult = await cars.getByFilters(
              filters[`get${model}filter`]()
            );
            console.log(`found ${serviceResult.length} ${model}`);

            const fileName = `db/summary/car/${model}.json`;

            const dbData = fileOperations.readFile(fileName);

            const updatedDbData = await cars.getUpdatedDbData(
              dbData,
              serviceResult
            );

            fileOperations.writeToFile(fileName, updatedDbData);

            let changes = updatedDbData
              .filter(
                (x) =>
                  Array.isArray(x.prices) &&
                  x.prices.length > x.notifyFlagByPrices
              )
              .sort(
                (a, b) =>
                  a.prices[0] -
                  a.prices[a.prices.length - 1] -
                  (b.prices[0] - b.prices[b.prices.length - 1])
              );
            console.log(changes);
          }
        }
        break;
      case "estate":
        let estateDir = path.join(__dirname, "db", "summary", "estate");

        if (!fs.existsSync(estateDir)) {
          fs.mkdirSync(estateDir, { recursive: true });
        }
        for (const arg of process.argv) {
          if (arg.startsWith("estate=")) {
            const estateFilter = arg.substr(7);

            console.log("starting estate: " + estateFilter);

            const serviceResult = await estates.getByFilters(
              filters[`get${estateFilter}filter`]()
            );
            console.log(`found ${serviceResult.length} estates`);

            const fileName = `db/summary/estate/${estateFilter}.json`;

            const dbData = fileOperations.readFile(fileName);

            const updatedDbData = await estates.getUpdatedDbData(
              dbData,
              serviceResult
            );

            fileOperations.writeToFile(fileName, updatedDbData);
          }
        }
        break;
      default:
        console.log("Invalid type. Please enter a valid type (car or estate).");
    }
  },
};
main.init();
