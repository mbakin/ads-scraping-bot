// arsa - bahce - satilik - sehirler

/*
curl 'https://www.hepsiemlak.com/individual-api/locations/countries/3/cities' \
  -H 'authority: www.hepsiemlak.com' \
*/
//  -H 'accept: application/json, text/plain, */*' \
/*
  -H 'accept-language: tr' \
  -H 'authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJNZWhtZXQgQmVyayIsImxhc3ROYW1lIjoiQWvEsW4iLCJwZXJtaXNzaW9uTmV3c2xldHRlciI6ZmFsc2UsInBlcm1pc3Npb25TaGFyZUVtYWlsIjpmYWxzZSwicGVybWlzc2lvblNoYXJlU01TIjpudWxsLCJmaXJtVXNlcklkIjozODc0MTYyLCJmaXJtVXNlckZpcm1JZCI6bnVsbCwiaXNBZG1pbiI6ZmFsc2UsInBlcm1pc3Npb25TTVMiOm51bGwsInBob25lQ29uZmlybWVkIjpmYWxzZSwiZW1haWwiOiJiZXJrQHRoZWNvZGViYXNlLmlvIiwiZXhwIjoxNzIyNzY2MDU3LCJpYXQiOjE2OTExMDcyMDB9.kB-cz5mWpReAQmwevd3OkEL4bRz8B0HYs-DagPhTEggKIgXR2m1XLLPGbwl0HJuwWsQ78MPcIocnIzolsAEkmg' \
  -H 'cookie: i18n_redirected=tr; _gcl_au=1.1.2109890327.1690466977; _tt_enable_cookie=1; _ttp=bGoXwgEnYUmotUmwqTpzzIfoern; _gcl_aw=GCL.1690986508.CjwKCAjw_aemBhBLEiwAT98FMsnDHreakI2A0RXF3ZCiY_C0c7KbLhXj_3QgEz6rYdTNKy_RWqNvahoCbGEQAvD_BwE; _gac_UA-5879168-1=1.1690986510.CjwKCAjw_aemBhBLEiwAT98FMsnDHreakI2A0RXF3ZCiY_C0c7KbLhXj_3QgEz6rYdTNKy_RWqNvahoCbGEQAvD_BwE; ShowUnlistedBanner=false; visited_city=34; visited_name=%C4%B0stanbul; visited_city_url=istanbul; xpid=dmFsdWUlM0QxNjkwNDY2OTc4MjA4LTI3NC01MzktdjEuNC44JTJDbHMlM0QxNjkxMTQzNDQwNzkwJTJDcnQlM0Qx; cto_bundle=CCHKr19oWGZtajBkRkFoUmo3SHpPb1U2OW5QNnNBUnZTWDhDRVhrY0Y4JTJGTnhsWlhtVEszWE9UWDFHZWExdlhFbkpGcXBNTjQ5WHlMYUtDcWN4cTNvRzlYVnRad2tVayUyQnU4MXQ1VyUyRmdIZ3E5RlpCb1Rrc0NwTzdwc1k4QXhEWmhjMHlCekFqQkh4Z01SOFlZckZWV3dQbHR0cmclM0QlM0Q; authKey=eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJNZWhtZXQgQmVyayIsImxhc3ROYW1lIjoiQWvEsW4iLCJwZXJtaXNzaW9uTmV3c2xldHRlciI6ZmFsc2UsInBlcm1pc3Npb25TaGFyZUVtYWlsIjpmYWxzZSwicGVybWlzc2lvblNoYXJlU01TIjpudWxsLCJmaXJtVXNlcklkIjozODc0MTYyLCJmaXJtVXNlckZpcm1JZCI6bnVsbCwiaXNBZG1pbiI6ZmFsc2UsInBlcm1pc3Npb25TTVMiOm51bGwsInBob25lQ29uZmlybWVkIjpmYWxzZSwiZW1haWwiOiJiZXJrQHRoZWNvZGViYXNlLmlvIiwiZXhwIjoxNzIyNzY2MDU3LCJpYXQiOjE2OTExMDcyMDB9.kB-cz5mWpReAQmwevd3OkEL4bRz8B0HYs-DagPhTEggKIgXR2m1XLLPGbwl0HJuwWsQ78MPcIocnIzolsAEkmg; user_name=Mehmet%20Berk; user_lastname=Ak%C4%B1n; user_phone=; user_email=berk@thecodebase.io; userImgPath=; userId=3874162; phoneConfirmed=false; CD_userType=Bireysel; new_vp=0; _gid=GA1.2.1536837712.1691317702; _uetsid=f77660b0344311ee8532b117ad1083b0; _uetvid=3899e7f02c8711ee8e9f5fe31c902587; _ga_1JXMT6R17H=GS1.1.1691395370.14.1.1691395371.0.0.0; _ga=GA1.2.660233338.1690466978' \
  -H 'referer: https://www.hepsiemlak.com/bireysel/ilanlarim/ilan-ver/41228035' \
  -H 'sec-ch-ua: "Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  --compressed

*/

const fetchLandGardenCitiesRequest = {
  method: "GET",
  url: "https://www.hepsiemlak.com/individual-api/locations/countries/3/cities",
  headers: {
    authority: "www.hepsiemlak.com",
    accept: "application/json, text/plain, */*",
    "accept-language": "tr",
    authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJNZWhtZXQgQmVyayIsImxhc3ROYW1lIjoiQWvEsW4iLCJwZXJtaXNzaW9uTmV3c2xldHRlciI6ZmFsc2UsInBlcm1pc3Npb25TaGFyZUVtYWlsIjpmYWxzZSwicGVybWlzc2lvblNoYXJlU01TIjpudWxsLCJmaXJtVXNlcklkIjozODc0MTYyLCJmaXJtVXNlckZpcm1JZCI6bnVsbCwiaXNBZG1pbiI6ZmFsc2UsInBlcm1pc3Npb25TTVMiOm51bGwsInBob25lQ29uZmlybWVkIjpmYWxzZSwiZW1haWwiOiJiZXJrQHRoZWNvZGViYXNlLmlvIiwiZXhwIjoxNzIyNzY2MDU3LCJpYXQiOjE2OTExMDcyMDB9.kB-cz5mWpReAQmwevd3OkEL4bRz8B0HYs-DagPhTEggKIgXR2m1XLLPGbwl0HJuwWsQ78MPcIocnIzolsAEkmg",
    cookie:
      "i18n_redirected=tr; _gcl_au=1.1.2109890327.1690466977; _tt_enable_cookie=1; _ttp=bGoXwgEnYUmotUmwqTpzzIfoern; _gcl_aw=GCL.1690986508.CjwKCAjw_aemBhBLEiwAT98FMsnDHreakI2A0RXF3ZCiY_C0c7KbLhXj_3QgEz6rYdTNKy_RWqNvahoCbGEQAvD_BwE; _gac_UA-5879168-1=1.1690986510.CjwKCAjw_aemBhBLEiwAT98FMsnDHreakI2A0RXF3ZCiY_C0c7KbLhXj_3QgEz6rYdTNKy_RWqNvahoCbGEQAvD_BwE; ShowUnlistedBanner=false; visited_city=34; visited_name=%C4%B0stanbul; visited_city_url=istanbul; xpid=dmFsdWUlM0QxNjkwNDY2OTc4MjA4LTI3NC01MzktdjEuNC44JTJDbHMlM0QxNjkxMTQzNDQwNzkwJTJDcnQlM0Qx; cto_bundle=CCHKr19oWGZtajBkRkFoUmo3SHpPb1U2OW5QNnNBUnZTWDhDRVhrY0Y4JTJGTnhsWlhtVEszWE9UWDFHZWExdlhFbkpGcXBNTjQ5WHlMYUtDcWN4cTNvRzlYVnRad2tVayUyQnU4MXQ1VyUyRmdIZ3E5RlpCb1Rrc0NwTzdwc1k4QXhEWmhjMHlCekFqQkh4Z01SOFlZckZWV3dQbHR0cmclM0QlM0Q; authKey=eyJhbGciOiJIUzUxMiJ9.eyJmaXJzdE5hbWUiOiJNZWhtZXQgQmVyayIsImxhc3ROYW1lIjoiQWvEsW4iLCJwZXJtaXNzaW9uTmV3c2xldHRlciI6ZmFsc2UsInBlcm1pc3Npb25TaGFyZUVtYWlsIjpmYWxzZSwicGVybWlzc2lvblNoYXJlU01TIjpudWxsLCJmaXJtVXNlcklkIjozODc0MTYyLCJmaXJtVXNlckZpcm1JZCI6bnVsbCwiaXNBZG1pbiI6ZmFsc2UsInBlcm1pc3Npb25TTVMiOm51bGwsInBob25lQ29uZmlybWVkIjpmYWxzZSwiZW1haWwiOiJiZXJrQHRoZWNvZGViYXNlLmlvIiwiZXhwIjoxNzIyNzY2MDU3LCJpYXQiOjE2OTExMDcyMDB9.kB-cz5mWpReAQmwevd3OkEL4bRz8B0HYs-DagPhTEggKIgXR2m1XLLPGbwl0HJuwWsQ78MPcIocnIzolsAEkmg; user_name=Mehmet%20Berk; user_lastname=Ak%C4%B1n; user_phone=; user_email=berk@thecodebase.io; userImgPath=; userId=3874162; phoneConfirmed=false; CD_userType=Bireysel; new_vp=0; _gid=GA1.2.1536837712.1691317702; _uetsid=f77660b0344311ee8532b117ad1083b0; _uetvid=3899e7f02c8711ee8e9f5fe31c902587; _ga_1JXMT6R17H=GS1.1.1691395370.14.1.1691395371.0.0.0; _ga=GA1.2.660233338.1690466978",
    referer: "https://www.hepsiemlak.com/bireysel/ilanlarim/ilan-ver/41228035",
    "sec-ch-ua":
      '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  },
};
