import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { cars } from "./src/cars.js";
import { filters } from "./src/filters.js";
import { fileOperations } from "./src/file.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let dir = path.join(__dirname, "db", "cars", "summary");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

let main = {
  async init() {
    for (const arg of process.argv) {
      if (arg.startsWith("car=")) {
        const model = arg.substr(4);

        console.log("starting car: " + model);

        const serviceResult = await cars.getByFilters(
          filters[`get${model}filter`]()
        );
        console.log(`found ${serviceResult.length} ${model}`);

        const fileName = `db/cars/summary/${model}.json`;

        const dbData = fileOperations.readFile(fileName);

        const updatedDbData = await cars.getUpdatedDbData(
          dbData,
          serviceResult
        );

        fileOperations.writeToFile(fileName, updatedDbData);

        let changes = updatedDbData
          .filter((x) => x.prices.length > x.notifyFlagByPrices)
          .sort(
            (a, b) =>
              a.prices[0] -
              a.prices[a.prices.length - 1] -
              (b.prices[0] - b.prices[b.prices.length - 1])
          );
        // console.log(changes)
        // and update notifyFlags

        // const fileName=`db/cars/${utilities.getCurrentDateForFileFormat()}${model}.json`;
        // fileOperations.writeToFile(fileName,serviceResult);
        // console.log(`writed ${serviceResult.length} ${model}`);
      }
    }
  },
};
main.init();
