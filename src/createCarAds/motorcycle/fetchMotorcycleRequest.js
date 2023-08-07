//Motosiklet> Ducati> 1000 GT

/*
curl 'https://www.arabam.com/panelim/api/expressAdvert/creationvalues-v2?advertId=23185907' \
  -H 'authority: www.arabam.com' \
  -H 'accept: application/json, text/plain, --*' \
  -H 'accept-language: tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'cookie: source=direct; sessionSource=direct; campaign=; G_ENABLED_IDPS=google; _gcl_au=1.1.1602247219.1690866267; _tt_enable_cookie=1; _ttp=oKYYvyShRJmnNTsSKB1NZ8BTpeO; _hjSessionUser_163411=eyJpZCI6ImMyYmRjM2U0LTc5NzQtNTY1Yy1hODE1LTQ1Mjg1MTkzYTMwNSIsImNyZWF0ZWQiOjE2OTA4NjYyNjcxMDUsImV4aXN0aW5nIjp0cnVlfQ==; UserGuidValue=0e92fab5-0bc9-4a1d-9ed2-c9726f67f2ac; ASessionID=zCs3_fCs-JCiTF0JH1N74kkv1wJdX8fhQdQyYuD1entu20DA2HiWhA==; AMemberType=1; cookiePolicyBannerClosed=true; _gid=GA1.2.20237745.1691060780; _hjSession_163411=eyJpZCI6IjFjNmJhNGE1LTU4ZTAtNDk4NC04ZTJkLTJiZTVmODJlZjdkYiIsImNyZWF0ZWQiOjE2OTExNDM4MzQ2OTAsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _clck=nx3273|2|fdv|0|1308; _hjIncludedInSessionSample_163411=0; ln_or=eyI1MjY0NDE3IjoiZCJ9; _ga_YBJ76TK7E7=GS1.1.1691148608.24.1.1691148608.60.0.0; cto_bundle=z1lPgF9BeTllcmZ2NDMlMkJNNFJ2OXRtZ2k2a3g0aFZ5JTJGMlh4UUlTdFg1N0kxelRHVzZGeHVGdWl2azV3Q2V5ZWdCdjJGaWhWYVZsZzNZQ3NaNGozYlVmRzFzUG5XaiUyRk55cTM4WVptbE9mbjRVb2hsZUVGSlQlMkY4Z1BGb2lrU0g1aEVpU25QaHd2R1c2TElUVnVVQ21OUExxZiUyRmhlMkJ6cW9jMW5VUVk3WERPaUxOdzBDbGhlMkJZUWJ3Vjk0OVRlckJHeHlqaW1LaQ; _ga_Z5BTS8E943=GS1.1.1691148608.24.1.1691148610.58.0.0; _ga=GA1.2.781301635.1690866267; _clsk=kvd5ub|1691149980499|15|0|o.clarity.ms/collect; _gat_UA-24874367-1=1' \
  -H 'referer: https://www.arabam.com/panelim/ilan-ver' \
  -H 'sec-ch-ua: "Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  -H 'x-requested-with: XMLHttpRequest' \
  --compressed
*/

const fetchMotorcycleRequest = {
  method: "GET",
  url: "https://www.arabam.com/panelim/api/expressAdvert/creationvalues-v2?advertId=23185907",
  headers: {
    authority: "www.arabam.com",
    accept: "application/json, text/plain, --*",
    "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
    cookie:
      "source=direct; sessionSource=direct; campaign=; G_ENABLED_IDPS=google; _gcl_au=1.1.1602247219.1690866267; _tt_enable_cookie=1; _ttp=oKYYvyShRJmnNTsSKB1NZ8BTpeO; _hjSessionUser_163411=eyJpZCI6ImMyYmRjM2U0LTc5NzQtNTY1Yy1hODE1LTQ1Mjg1MTkzYTMwNSIsImNyZWF0ZWQiOjE2OTA4NjYyNjcxMDUsImV4aXN0aW5nIjp0cnVlfQ==; UserGuidValue=0e92fab5-0bc9-4a1d-9ed2-c9726f67f2ac; ASessionID=zCs3_fCs-JCiTF0JH1N74kkv1wJdX8fhQdQyYuD1entu20DA2HiWhA==; AMemberType=1; cookiePolicyBannerClosed=true; _gid=GA1.2.20237745.1691060780; _hjSession_163411=eyJpZCI6IjFjNmJhNGE1LTU4ZTAtNDk4NC04ZTJkLTJiZTVmODJlZjdkYiIsImNyZWF0ZWQiOjE2OTExNDM4MzQ2OTAsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=1; _clck=nx3273|2|fdv|0|1308; _hjIncludedInSessionSample_163411=0; ln_or=eyI1MjY0NDE3IjoiZCJ9; _ga_YBJ76TK7E7=GS1.1.1691148608.24.1.1691148608.60.0.0; cto_bundle=z1lPgF9BeTllcmZ2NDMlMkJNNFJ2OXRtZ2k2a3g0aFZ5JTJGMlh4UUlTdFg1N0kxelRHVzZGeHVGdWl2azV3Q2V5ZWdCdjJGaWhWYVZsZzNZQ3NaNGozYlVmRzFzUG5XaiUyRk55cTM4WVptbE9mbjRVb2hsZUVGSlQlMkY4Z1BGb2lrU0g1aEVpU25QaHd2R1c2TElUVnVVQ21OUExxZiUyRmhlMkJ6cW9jMW5VUVk3WERPaUxOdzBDbGhlMkJZUWJ3Vjk0OVRlckJHeHlqaW1LaQ; _ga_Z5BTS8E943=GS1.1.1691148608.24.1.1691148610.58.0.0; _ga=GA1.2.781301635.1690866267; _clsk=kvd5ub|1691149980499|15|0|o.clarity.ms/collect; _gat_UA-24874367-1=1",
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
  },
};
