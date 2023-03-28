const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3002);

app.get(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
