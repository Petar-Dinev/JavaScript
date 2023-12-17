const express = require("express");
const databaseConfig = require("./config/database");
const expressConfig = require("./config/express");
const routerConfig = require("./config/routes");

start();

async function start() {
  const app = express();

  await databaseConfig(app);
  expressConfig(app);
  routerConfig(app);

  app.listen(3000, () => console.log("Seerver listen on port 3000"));
}
