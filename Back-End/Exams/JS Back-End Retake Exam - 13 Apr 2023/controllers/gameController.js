const { hasUser } = require("../middlewares/guards");
const {
  getAllGames,
  getOneGameById,
  createGameOffer,
  deleteGame,
  editGame,
  onGameBuy,
} = require("../services/gameService");
const { parseError } = require("../util/parser");

const gameController = require("express").Router();

gameController.get("/", async (req, res) => {
  const games = await getAllGames();

  res.render("games", {
    title: "Catalog",
    games,
  });
});
gameController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Offer",
  });
});
gameController.post("/create", hasUser(), async (req, res) => {
  console.log(req.body);
  const { name, price, platform, genre, image, description } = req.body;
  const game = {
    name,
    price,
    genre,
    platform,
    image,
    description,
    owner: req.user._id,
  };
  try {
    await createGameOffer(game);
    res.redirect("/games");
  } catch (err) {
    res.render("create", {
      title: "Create Offer",
      game,
      errors: parseError(err),
    });
  }
});
gameController.get("/:id", async (req, res) => {
  const gameId = req.params.id;
  const game = await getOneGameById(gameId);
  res.locals.isOwner = game.owner == res.locals.user?._id;
  res.locals.canBuy = !game.boughtBY.find((x) => x == res.locals.user?._id);
  res.render("details", {
    title: "Details page",
    game,
  });
});
gameController.get("/:id/edit", hasUser(), async (req, res) => {
  const gameId = req.params.id;
  const game = await getOneGameById(gameId);
  res.render("edit", {
    title: "Edit page",
    game,
  });
});
gameController.post("/:id/edit", hasUser(), async (req, res) => {
  const gameId = req.params.id;
  const game = await getOneGameById(gameId);

  game.name = req.body.name;
  game.price = req.body.price;
  game.genre = req.body.genre;
  game.platform = req.body.platform;
  game.image = req.body.image;
  game.description = req.body.description;

  try {
    await editGame(gameId, game);
    res.redirect("/games/" + gameId);
  } catch (err) {
    res.render("edit", {
      title: "Edit page",
      game,
      errors: parseError(err),
    });
  }
});

gameController.get("/:id/delete", hasUser(), async (req, res) => {
  const game = await getOneGameById(req.params.id);
  if (game.owner != req.user._id) {
    res.redirect("/404");
  }
  try {
    await deleteGame(req.params.id);
    res.redirect("/games");
  } catch (err) {
    console.log(err);
  }
});
gameController.get("/:id/buy", hasUser(), async (req, res) => {
  const gameId = req.params.id;
  const game = await getOneGameById(gameId);
  if (game.owner == req.user._id) {
    res.redirect("/404");
  }
  try {
    await onGameBuy(gameId, req.user._id);
    res.redirect("/games/" + gameId);
  } catch (err) {
    console.log(err);
  }
});

module.exports = gameController;
