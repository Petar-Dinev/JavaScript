const adController = require("../controllers/adController");
const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use('/ads', adController)
  app.use("*", (req, res) => {
    res.render("404");
  });
};
