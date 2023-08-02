import axios from "axios";

const requestHeaders = {
  authority: "www.arabam.com",
  accept: "application/json, text/plain, */*",
  "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
  "content-type": "application/json;charset=UTF-8",
  cookie:
    "source=direct; sessionSource=direct; campaign=; G_ENABLED_IDPS=google; _gcl_au=1.1.1602247219.1690866267; _gid=GA1.2.631594116.1690866267; ln_or=eyI1MjY0NDE3IjoiZCJ9; _tt_enable_cookie=1; _ttp=oKYYvyShRJmnNTsSKB1NZ8BTpeO; _clck=nx3273|2|fds|0|1308; _hjSessionUser_163411=eyJpZCI6ImMyYmRjM2U0LTc5NzQtNTY1Yy1hODE1LTQ1Mjg1MTkzYTMwNSIsImNyZWF0ZWQiOjE2OTA4NjYyNjcxMDUsImV4aXN0aW5nIjp0cnVlfQ==; UserGuidValue=0e92fab5-0bc9-4a1d-9ed2-c9726f67f2ac; _hjSession_163411=eyJpZCI6ImE5ZDdkNGE2LTZhZjgtNDM2Zi05ODMxLWZiNjg3MmFmNmY0ZSIsImNyZWF0ZWQiOjE2OTA4NjgzNjYyNDMsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _hjIncludedInSessionSample_163411=0; _gat_UA-24874367-1=1; ASessionID=zCs3_fCs-JCiTF0JH1N74kkv1wJdX8fhQdQyYuD1entu20DA2HiWhA==; AMemberType=1; _ga_YBJ76TK7E7=GS1.1.1690868365.19.1.1690869751.44.0.0; cto_bundle=LEMOF19BeTllcmZ2NDMlMkJNNFJ2OXRtZ2k2azU1JTJGMmlYZENVOG1KZ05rMUgwbkVJZ3BIbkw2NkhaS2ZISWdUZkFuVlJaTjBmaDVvTjNzN3h2ZVU1WWtGRG1hb1pYejJsM3p0V00wT0N1YVVnYUN3M1pOMlNxJTJCM3A1OEhvMmhIT3FTaWJRNXhObXY0TlY3Mlh1OCUyRlZBVDhnZk5WN0h5OUpCM3ZyOHFBVElUbHBVYU5OcTAwN2VWOWFJbnFGV0N3cGJXR0x3YQ; _clsk=l8nuvu|1690869752221|6|1|o.clarity.ms/collect; _ga_Z5BTS8E943=GS1.1.1690868365.19.1.1690869753.43.0.0; _ga=GA1.2.781301635.1690866267",
  origin: "https://www.arabam.com",
  referer: "https://www.arabam.com/panelim/ilan-ver",
  "sec-ch-ua":
    '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  "x-requested-with": "XMLHttpRequest",
};

// const requestBody = (CategoryId) => {
//   return {
//     year: "2022",
//     fuel: "7",
//     CategoryId: CategoryId,
//     patternStep: "cat",
//   };
// };

// async function makeRequest(CategoryId) {
//   try {
//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestBody(CategoryId),
//       { headers: requestHeaders }
//     );
//     console.log(JSON.stringify(response.data, null, 2));
//     return response.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// async function main() {
//   try {
//     const res1 = await makeRequest("59181");
//     const nextKey1 = res1.Data.AdvertCreationStepDto[0].Key;

//     const res2 = await makeRequest(nextKey1);
//     const nextKey2 = res2.Data.AdvertCreationStepDto[0].Key;

//     const res3 = await makeRequest(nextKey2);
//     const nextKey3 = res3.Data.AdvertCreationStepDto[0].Key;

//     const res4 = await makeRequest(nextKey3);
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// main();
// const requestBody = (CategoryId) => {
//   return {
//     year: "2011",
//     fuel: "3",
//     CategoryId: CategoryId,
//     patternStep: "cat",
//   };
// };

// async function makeRequest(CategoryId) {
//   try {
//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestBody(CategoryId),
//       { headers: requestHeaders }
//     );
//     console.log(JSON.stringify(response.data, null, 2));
//     return response.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// async function exploreOptions(CategoryId) {
//   const response = await makeRequest(CategoryId);
//   const options = response.Data.AdvertCreationStepDto;

//   if (options.length > 0) {
//     // Bu seviyede seçenekler var, her birini keşfet
//     for (let option of options) {
//       await exploreOptions(option.Key);
//     }
//   } else {
//     // Bu seviyede seçenek yok, sonuca ulaştık
//     console.log(response);
//   }
// }

// async function main() {
//   await exploreOptions("59181");
// }

// main();

// const requestBody = (CategoryId) => {
//   return {
//     year: CategoryId, // Burada yıl bilgisini belirtiyoruz
//     patternStep: "cat",
//   };
// };

// async function makeRequest(CategoryId) {
//   try {
//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestBody(CategoryId),
//       { headers: requestHeaders }
//     );
//     console.log(JSON.stringify(response.data, null, 2));
//     return response.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// async function exploreOptions(CategoryId) {
//   const response = await makeRequest(CategoryId);
//   const options = response.Data.AdvertCreationStepDto;

//   if (options.length > 0) {
//     // Bu seviyede seçenekler var, her birini keşfet
//     for (let option of options) {
//       await exploreOptions(option.Key);
//     }
//   } else {
//     // Bu seviyede seçenek yok, sonuca ulaştık
//     console.log(response);
//   }
// }

// async function main() {
//   const years = ["2022"]; // Yıl seçenekleri

//   for (let year of years) {
//     await exploreOptions(year);
//   }
// }

// main();

// const requestBody = (year, fuel, CategoryId, patternStep) => {
//   return {
//     year: year,
//     fuel: fuel,
//     CategoryId: CategoryId,
//     patternStep: patternStep,
//   };
// };

// async function makeRequest(year, fuel, CategoryId, patternStep) {
//   try {
//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       // requestBody(year, fuel, CategoryId, patternStep),
//       null,
//       { headers: requestHeaders }
//     );
//     console.log(JSON.stringify(response.data, null, 2));
//     return response.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// async function exploreOptions(year, fuel, CategoryId, patternStep) {
//   const response = await makeRequest(year, fuel, CategoryId, patternStep);
//   const options = response.Data.AdvertCreationStepDto;

//   if (options.length > 0) {
//     for (let option of options) {
//       await exploreOptions(year, fuel, option.Key, "cat");
//     }
//   } else {
//     console.log(response);
//   }
// }

// async function main() {
//   const years = ["2022", "2021"];
//   const fuels = ["7"];

//   for (let year of years) {
//     for (let fuel of fuels) {
//       await exploreOptions(year, fuel, null, "brand");
//     }
//   }
// }

// main();

// const requestBody = (year, fuel, CategoryId, patternStep) => {
//   return {
//     year: year,
//     fuel: fuel,
//     CategoryId: CategoryId,
//     patternStep: patternStep,
//   };
// };

// async function makeRequest(year, fuel, CategoryId, patternStep) {
//   try {
//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestBody(year, fuel, CategoryId, patternStep),
//       { headers: requestHeaders }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// async function main() {
//   const response = await makeRequest(null, null, null, "brand");
//   //console.dir(response, { depth: null }); // console.dir kullanımı
//   // veya
//   console.log(JSON.stringify(response, null, 2)); // JSON.stringify kullanımı
// }

// main();

// ** @params Arac turleri. **

// async function main() {
//   const response = await makeRequest(null, null, null, "brand");
//   const data = JSON.parse(JSON.stringify(response));
//   const options = data.Data.AdvertCreationStepDto;

//   console.log("VASITA SECIMI:");
//   for (let option of options) {
//     console.log(option.Value);
//   }

//   console.log("\nOTOMOBIL SECIMI:");
//   for (let option of options) {
//     if (option.Key === "18" && option.Value === "Otomobil") {
//       console.log(option);
//       // "Key": "18", "Value": "Otomobil" olan option nesnesi.
//       // Burada ne yapmak istediğinize bağlı olarak bu nesneyi işleyebilirsiniz.
//     }
//   }
// }

// main();
// async function main() {
//   const response = await makeRequest(null, null, null, "brand");
//   const data = JSON.parse(JSON.stringify(response));
//   const options = data.Data.AdvertCreationStepDto;

//   console.log("VASITA SECIMI:");
//   for (let option of options) {
//     console.log(option.Value);
//   }

//   console.log("\nOTOMOBIL SECIMI:");
//   for (let option of options) {
//     if (option.Key === "18" && option.Value === "Otomobil") {
//       console.log(option);
//       // "Key": "18", "Value": "Otomobil" olan option nesnesi.
//       // Burada ne yapmak istediğinize bağlı olarak bu nesneyi işleyebilirsiniz.

//       // Otomobil seçeneği için yılları getir
//       const yearResponse = await makeRequest(
//         null,
//         null,
//         option.Key,
//         option.Pattern
//       );
//       const years = JSON.parse(JSON.stringify(yearResponse));
//       const yearOptions = years.Data.AdvertCreationStepDto;

//       console.log("\nYILLAR:");
//       for (let yearOption of yearOptions) {
//         console.log(yearOption.Value);
//       }
//     }
//   }
// }

// main();

// ** yillar ve vasita secimi ayri ayri yilar **

// async function main() {
//   const vehicleResponse = await makeRequest(null, null, null, "brand");
//   const vehicleData = JSON.parse(JSON.stringify(vehicleResponse));
//   const vehicleOptions = vehicleData.Data.AdvertCreationStepDto;

//   const vehicles = [];
//   for (let option of vehicleOptions) {
//     vehicles.push(option.Value);
//   }
//   console.log(JSON.stringify({ VASITA_SECIMI: vehicles }, null, 2));

//   let otomobilKey;
//   for (let option of vehicleOptions) {
//     if (option.Value === "Otomobil") {
//       otomobilKey = option.Key;
//       break;
//     }
//   }

//   if (otomobilKey) {
//     const yearResponse = await makeRequest(null, null, otomobilKey, "year");
//     const yearData = JSON.parse(JSON.stringify(yearResponse));
//     const yearOptions = yearData.Data.AdvertCreationStepDto;

//     const years = [];
//     for (let yearOption of yearOptions) {
//       years.push(yearOption.Value);
//     }
//     console.log(JSON.stringify({ YILLAR: years }, null, 2));
//   }
// }

// main();

// async function main() {
//   const vehicleResponse = await makeRequest(null, null, null, "brand");
//   const vehicleData = JSON.parse(JSON.stringify(vehicleResponse));
//   const vehicleOptions = vehicleData.Data.AdvertCreationStepDto;

//   const vehicles = [];
//   for (let option of vehicleOptions) {
//     vehicles.push(option.Value);
//   }
//   console.log(JSON.stringify({ VASITA_SECIMI: vehicles }, null, 2));

//   let otomobilKey;
//   for (let option of vehicleOptions) {
//     if (option.Value === "Otomobil") {
//       otomobilKey = option.Key;
//       break;
//     }
//   }

//   if (otomobilKey) {
//     const yearResponse = await makeRequest(null, null, otomobilKey, "year");
//     const yearData = JSON.parse(JSON.stringify(yearResponse));
//     const yearOptions = yearData.Data.AdvertCreationStepDto;

//     const years = [];
//     for (let yearOption of yearOptions) {
//       years.push(yearOption.Value);
//     }
//     console.log(JSON.stringify({ YILLAR: years }, null, 2));

//     const chosenYear = "2002"; // bu kullanıcı tarafından seçilir.

//     const fuelResponse = await makeRequest(
//       chosenYear,
//       null,
//       otomobilKey,
//       "fuel"
//     );
//     const fuelData = JSON.parse(JSON.stringify(fuelResponse));
//     const fuelOptions = fuelData.Data.AdvertCreationStepDto;

//     const fuels = [];
//     for (let fuelOption of fuelOptions) {
//       fuels.push(fuelOption.Value);
//     }
//     console.log(JSON.stringify({ YAKIT_TURU: fuels }, null, 2));
//   }
// }

// main();

// Yillara gore yakit cesitlerinin listelenmesi

// async function main() {
//   const vehicleResponse = await makeRequest(null, null, null, "brand");
//   const vehicleData = JSON.parse(JSON.stringify(vehicleResponse));
//   const vehicleOptions = vehicleData.Data.AdvertCreationStepDto;

//   const vehicles = [];
//   for (let option of vehicleOptions) {
//     vehicles.push(option.Value);
//   }
//   console.log(JSON.stringify({ VASITA_SECIMI: vehicles }, null, 2));

//   let otomobilKey;
//   for (let option of vehicleOptions) {
//     if (option.Value === "Otomobil") {
//       otomobilKey = option.Key;
//       break;
//     }
//   }

//   if (otomobilKey) {
//     const yearResponse = await makeRequest(null, null, otomobilKey, "year");
//     const yearData = JSON.parse(JSON.stringify(yearResponse));
//     const yearOptions = yearData.Data.AdvertCreationStepDto;

//     const yearFuelOptions = {};
//     for (let yearOption of yearOptions) {
//       const fuelResponse = await makeRequest(
//         yearOption.Value,
//         null,
//         otomobilKey,
//         "fuel"
//       );
//       const fuelData = JSON.parse(JSON.stringify(fuelResponse));
//       const fuelOptions = fuelData.Data.AdvertCreationStepDto;

//       const fuels = [];
//       for (let fuelOption of fuelOptions) {
//         fuels.push(fuelOption.Value);
//       }
//       yearFuelOptions[yearOption.Value] = fuels;
//     }
//     console.log(
//       JSON.stringify({ YIL_YAKIT_TURLERI: yearFuelOptions }, null, 2)
//     );
//   }
// }

// main();

// ** Butun yillarin icerisinde bulunan araba modellerin listelenmesi **
// async function main() {
//   const vehicleResponse = await makeRequest(null, null, null, "brand");
//   const vehicleData = JSON.parse(JSON.stringify(vehicleResponse));
//   const vehicleOptions = vehicleData.Data.AdvertCreationStepDto;

//   const vehicles = [];
//   for (let option of vehicleOptions) {
//     vehicles.push(option.Value);
//   }
//   console.log(JSON.stringify({ VASITA_SECIMI: vehicles }, null, 2));

//   let otomobilKey;
//   for (let option of vehicleOptions) {
//     if (option.Value === "Otomobil") {
//       otomobilKey = option.Key;
//       break;
//     }
//   }

//   if (otomobilKey) {
//     const yearResponse = await makeRequest(null, null, otomobilKey, "year");
//     const yearData = JSON.parse(JSON.stringify(yearResponse));
//     const yearOptions = yearData.Data.AdvertCreationStepDto;

//     const yearFuelBrandOptions = {};
//     for (let yearOption of yearOptions) {
//       const fuelResponse = await makeRequest(
//         yearOption.Value,
//         null,
//         otomobilKey,
//         "fuel"
//       );
//       const fuelData = JSON.parse(JSON.stringify(fuelResponse));
//       const fuelOptions = fuelData.Data.AdvertCreationStepDto;

//       const fuels = {};
//       for (let fuelOption of fuelOptions) {
//         const brandResponse = await makeRequest(
//           yearOption.Value,
//           fuelOption.Value,
//           otomobilKey,
//           "brand"
//         );
//         const brandData = JSON.parse(JSON.stringify(brandResponse));
//         const brandOptions = brandData.Data.AdvertCreationStepDto;

//         const brands = [];
//         for (let brandOption of brandOptions) {
//           brands.push(brandOption.Value);
//         }
//         fuels[fuelOption.Value] = brands;
//       }
//       yearFuelBrandOptions[yearOption.Value] = fuels;
//     }
//     console.log(
//       JSON.stringify({ YIL_YAKIT_MARKALAR: yearFuelBrandOptions }, null, 2)
//     );
//   }
// }

// main();

// async function makeRequestRecursive(y, f, cId, p) {
//   try {
//     let requestModel = {
//       year: y,
//       fuel: f,
//       CategoryId: cId,
//       patternStep: p,
//     };

//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestModel,
//       { headers: requestHeaders }
//     );

//     const steps = JSON.parse(
//       JSON.stringify(response.data.Data.AdvertCreationStepDto)
//     );
//     for (let item of steps) {
//       var categoryId = cId;

//       if (item.Type === "cat") {
//         categoryId = item.Key;
//       }

//       if (item.Pattern === "year-fuel-cat") {
//         await makeRequestRecursive(item.Value, categoryId, item.Key, "year");
//       } else if (item.Type == "year") {
//         await makeRequestRecursive(item.Value, categoryId, item.Key, "fuel");
//       } else if (item.Type == "fuel") {
//         await makeRequestRecursive(item.Value, categoryId, item.Key, "cat");
//       } else {
//         await makeRequestRecursive(item.Value, categoryId, item.Key, "cat");
//       }
//       break;
//     }
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function main() {
//   const vehicleResponse = await makeRequestRecursive(null, null, null, "brand");
//   const vehicleData = JSON.parse(JSON.stringify(vehicleResponse));
//   const vehicleOptions = vehicleData.Data.AdvertCreationStepDto;

//   const vehicles = [];
//   for (let option of vehicleOptions) {
//     vehicles.push(option.Value);
//   }
//   console.log(JSON.stringify({ VASITA_SECIMI: vehicles }, null, 2));

//   let otomobilKey;
//   for (let option of vehicleOptions) {
//     if (option.Value === "Otomobil") {
//       otomobilKey = option.Key;
//       break;
//     }
//   }

//   if (otomobilKey) {
//     const yearResponse = await makeRequestRecursive(
//       null,
//       null,
//       otomobilKey,
//       "year"
//     );
//     const yearData = JSON.parse(JSON.stringify(yearResponse));
//     const yearOptions = yearData.Data.AdvertCreationStepDto;

//     const yearFuelBrandOptions = {};
//     const yearOption = yearOptions.find((option) => option.Value === "2022");

//     if (yearOption) {
//       const fuelResponse = await makeRequestRecursive(
//         yearOption.Value,
//         null,
//         otomobilKey,
//         "fuel"
//       );
//       const fuelData = JSON.parse(JSON.stringify(fuelResponse));
//       const fuelOptions = fuelData.Data.AdvertCreationStepDto;

//       const fuels = {};
//       for (let fuelOption of fuelOptions) {
//         const brandResponse = await makeRequestRecursive(
//           yearOption.Value,
//           fuelOption.Value,
//           otomobilKey,
//           "brand"
//         );
//         const brandData = JSON.parse(JSON.stringify(brandResponse));
//         const brandOptions = brandData.Data.AdvertCreationStepDto;

//         const brands = [];
//         for (let brandOption of brandOptions) {
//           brands.push(brandOption.Value);
//         }
//         fuels[fuelOption.Value] = brands;
//       }
//       yearFuelBrandOptions[yearOption.Value] = fuels;
//     }
//     console.log(
//       JSON.stringify({ YIL_YAKIT_MARKALAR: yearFuelBrandOptions }, null, 2)
//     );
//   }
// }

// main();

// async function makeRequestRec(y, f, cId, p, links) {
//   try {
//     let requestModel = {
//       year: y,
//       fuel: f,
//       CategoryId: cId,
//       patternStep: p,
//     };

//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestModel,
//       { headers: requestHeaders }
//     );

//     const steps = JSON.parse(
//       JSON.stringify(response.data.Data.AdvertCreationStepDto)
//     );
//     let counter = 0;
//     for (let item of steps) {
//       var categoryId = cId;

//       if (item.Type === "cat") {
//         categoryId = item.Key;
//       }

//       let itemLinks = links.map((x) => x);

//       itemLinks.push(item.Value);

//       if (item.Pattern === "year-fuel-cat") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "year",
//           itemLinks
//         );
//       } else if (item.Type == "year") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "fuel",
//           itemLinks
//         );
//       } else if (item.Type == "fuel") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       } else {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       }

//       if (counter++ > 1) {
//         break;
//       }

//       //console.log(item);
//     }

//     console.log(links);
//     return response.data;
//   } catch (error) {
//     console.error(`${error}`);
//   }
// }

// async function main() {
//   const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
//   console.log("vehicleResponse", vehicleResponse);
// }

// main();

// async function makeRequestRec(y, f, cId, p, links) {
//   try {
//     let requestModel = {
//       year: y,
//       fuel: f,
//       CategoryId: cId,
//       patternStep: p,
//     };

//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestModel,
//       { headers: requestHeaders }
//     );

//     const steps = JSON.parse(
//       JSON.stringify(response.data.Data.AdvertCreationStepDto)
//     );
//     let counter = 0;
//     for (let item of steps) {
//       var categoryId = cId;

//       if (item.Type === "cat") {
//         categoryId = item.Key;
//       }

//       let itemLinks = links.map((x) => x);

//       itemLinks.push(item.Value);

//       if (item.Pattern === "year-fuel-cat") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "year",
//           itemLinks
//         );
//       } else if (item.Type == "year") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "fuel",
//           itemLinks
//         );
//       } else if (item.Type == "fuel") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       } else if (item.Type == "cat") {
//         // Model bilgisini elde ettikten sonra başka bir işlem yapmak istemiyoruz, bu yüzden işlemi burada sonlandırıyoruz.
//         // İsteğe bağlı olarak bu kısmı genişletebilir ve daha fazla bilgi toplamak için yeni bir istek yapabilirsiniz.
//         itemLinks.push(item.Key); // model bilgisini ekleyin
//         console.log("Model Bilgileri: ", itemLinks);
//       } else {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       }

//       if (counter++ > 3) {
//         break;
//       }
//     }

//     console.log(links);
//     return response.data;
//   } catch (error) {
//     console.error(`${error}`);
//   }
// }

// async function main() {
//   const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
//   console.log("vehicleResponse", vehicleResponse);
// }

// main();

// async function makeRequestRec(y, f, cId, p, links) {
//   try {
//     let requestModel = {
//       year: y,
//       fuel: f,
//       CategoryId: cId,
//       patternStep: p,
//     };

//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestModel,
//       { headers: requestHeaders }
//     );

//     const steps = JSON.parse(
//       JSON.stringify(response.data.Data.AdvertCreationStepDto)
//     );

//     for (let item of steps) {
//       var categoryId = cId;

//       if (item.Type === "cat") {
//         categoryId = item.Key;
//       }

//       let itemLinks = links.map((x) => x);

//       itemLinks.push(item.Value);

//       if (item.Pattern === "year-fuel-cat") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "year",
//           itemLinks
//         );
//       } else if (item.Type == "year") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "fuel",
//           itemLinks
//         );
//       } else if (item.Type == "fuel") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       } else if (item.Type == "cat") {
//         itemLinks.push("Listeli araçlar"); // model bilgisini ekleyin
//         console.log("Model Bilgileri: ", itemLinks);
//       } else {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       }
//     }

//     console.log(links);
//     return response.data;
//   } catch (error) {
//     console.error(`${error}`);
//   }
// }

// async function main() {
//   const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
//   console.log("vehicleResponse", vehicleResponse);
// }

// main();

// async function makeRequestRec(y, f, cId, p, links) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let requestModel = {
//         year: y,
//         fuel: f,
//         CategoryId: cId,
//         patternStep: p,
//       };

//       const response = await axios.post(
//         "https://www.arabam.com/api/GetStepDefinitionV2",
//         requestModel,
//         { headers: requestHeaders }
//       );

//       const steps = JSON.parse(
//         JSON.stringify(response.data.Data.AdvertCreationStepDto)
//       );

//       for (let i = 0; i < steps.length; i++) {
//         let item = steps[i];
//         var categoryId = cId;

//         if (item.Type === "cat") {
//           categoryId = item.Key;
//         }

//         let itemLinks = links.map((x) => x);

//         itemLinks.push(item.Value);

//         if (item.Pattern === "year-fuel-cat") {
//           await makeRequestRec(
//             item.Value,
//             categoryId,
//             item.Key,
//             "year",
//             itemLinks
//           );
//         } else if (item.Type == "year") {
//           await makeRequestRec(
//             item.Value,
//             categoryId,
//             item.Key,
//             "fuel",
//             itemLinks
//           );
//         } else if (item.Type == "fuel") {
//           await makeRequestRec(
//             item.Value,
//             categoryId,
//             item.Key,
//             "cat",
//             itemLinks
//           );
//         } else if (item.Type == "cat") {
//           itemLinks.push("Listeli araçlar"); // model bilgisini ekleyin
//           console.log("Model Bilgileri: ", itemLinks);
//         } else {
//           await makeRequestRec(
//             item.Value,
//             categoryId,
//             item.Key,
//             "cat",
//             itemLinks
//           );
//         }
//       }

//       console.log(links);
//       resolve(response.data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// async function main() {
//   const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
//   console.log("vehicleResponse", vehicleResponse);
// }

// main();

// async function makeRequestRec(y, f, cId, p, links) {
//   try {
//     let requestModel = {
//       year: y,
//       fuel: f,
//       CategoryId: cId,
//       patternStep: p,
//     };

//     const response = await axios.post(
//       "https://www.arabam.com/api/GetStepDefinitionV2",
//       requestModel,
//       { headers: requestHeaders }
//     );

//     const steps = JSON.parse(
//       JSON.stringify(response.data.Data.AdvertCreationStepDto)
//     );
//     let counter = 0;
//     for (let item of steps) {
//       var categoryId = cId;

//       if (item.Type === "cat") {
//         categoryId = item.Key;
//       }

//       let itemLinks = links.map((x) => x);

//       itemLinks.push(item.Value);

//       if (item.Pattern === "year-fuel-cat") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "year",
//           itemLinks
//         );
//       } else if (item.Type == "year") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "fuel",
//           itemLinks
//         );
//       } else if (item.Type == "fuel") {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       } else {
//         await makeRequestRec(
//           item.Value,
//           categoryId,
//           item.Key,
//           "cat",
//           itemLinks
//         );
//       }

//       if (counter++ > 1) {
//         break;
//       }

//       //console.log(item);
//     }

//     console.log(links);
//     return response.data;
//   } catch (error) {
//     console.error(`${error}`);
//   }
// }

// async function main() {
//   const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
//   console.log("vehicleResponse", JSON.stringify(vehicleResponse, null, 2));
// }

// main();

async function makeRequestRec(y, f, cId, p, links) {
  try {
    let requestModel = {
      year: y,
      fuel: f,
      CategoryId: cId,
      patternStep: p,
    };

    const response = await axios.post(
      "https://www.arabam.com/api/GetStepDefinitionV2",
      requestModel,
      { headers: requestHeaders }
    );

    const steps = JSON.parse(
      JSON.stringify(response.data.Data.AdvertCreationStepDto)
    );
    let counter = 0;
    for (let item of steps) {
      var categoryId = cId;
      var patternStep = p;

      if (item.Type === "cat") {
        categoryId = item.Key;
      }

      let itemLinks = [...links];
      itemLinks.push(item.Value);

      if (item.Pattern === "year-fuel-cat") {
        patternStep = "year";
      } else if (item.Type == "year") {
        patternStep = "fuel";
      } else if (item.Type == "fuel") {
        patternStep = "cat";
      }

      await makeRequestRec(
        item.Value,
        categoryId,
        item.Key,
        patternStep,
        itemLinks
      );

      if (counter++ > 1) {
        break;
      }
    }

    console.log(links);
    return response.data;
  } catch (error) {
    console.error(`${error}`);
  }
}

async function main() {
  const vehicleResponse = await makeRequestRec(null, null, null, "brand", []);
  console.log("vehicleResponse", JSON.stringify(vehicleResponse, null, 2));
}

main();
