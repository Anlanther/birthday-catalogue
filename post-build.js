const fs = require("fs-extra");

fs.moveSync("docs/browser", "docs", (err) => {
  if (err) {
    return console.error(err);
  }
});
