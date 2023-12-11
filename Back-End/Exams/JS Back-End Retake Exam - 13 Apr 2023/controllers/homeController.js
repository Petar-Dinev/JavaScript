const { onSearch } = require("../services/gameService");

const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});
homeController.get("/search", (req, res) => {
  res.render("search", {
    title: "Search Page",
  });
});
homeController.post("/search", async (req, res) => {
  const results = await onSearch(req.body.name, req.body.platform);
  res.render("search", {
    title: "Search Page",
    results,
    data: {
      name: req.body.name,
      platform: req.body.platform,
    },
  });
});

module.exports = homeController;
