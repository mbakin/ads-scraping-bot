# nodesahbot Nodejs app

Example using

`node index.js type=car car=egea` & `node index.js type=estate estate=istanbulkiralik`

If you would to add a new filter for cars, you could change the filter.js file.

Example for citroen c3

filter.js

```JS

  getgolffilter() {
    return ["ikinci-el/otomobil/golf"];
  }
```

using with c3
`node index.js type=car car=golf`

Extra Note
if you use a different version of chrome from me, you could change the ChromeExecPath in consts.js

Features:

- running cmd by other args
- more filters
- real estate
