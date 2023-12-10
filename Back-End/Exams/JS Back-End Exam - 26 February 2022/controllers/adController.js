const {
  createAd,
  getAllAds,
  getOneAdById,
  editAd,
  deleteAd,
  applayToAd,
} = require("../services/adService");
const { hasUser } = require("../middlewares/guards");
const { parseError } = require("../util/parser");

const adController = require("express").Router();

adController.get("/", async (req, res) => {
  const ads = await getAllAds();
  res.render("ads", { title: "Catalog", ads });
});

adController.get("/create", hasUser(), (req, res) => {
  res.render("create", { title: "Create Ad" });
});

adController.post("/create", hasUser(), async (req, res) => {
  const ad = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: req.user._id,
  };
  try {
    await createAd(ad);
    res.redirect("/ads");
  } catch (err) {
    res.render("create", {
      title: "Create Ad",
      data: ad,
      errors: parseError(err),
    });
  }
});

adController.get("/:id", async (req, res) => {
  const adId = req.params.id;
  const ad = await getOneAdById(adId);

  res.locals.isOwner = res.locals.user?._id == ad.author._id;
  res.locals.canApplay = !ad.usersApplied.find(x => x == res.locals.user?._id);
  res.render("details", { title: "Details page", ad });
});

adController.get("/:id/edit", hasUser(), async (req, res) => {
  const adId = req.params.id;
  const ad = await getOneAdById(adId);

  if (req.user._id != ad.author._id) {
    return res.redirect("/");
  }

  res.render("edit", { title: "Edited page", ad });
});

adController.post("/:id/edit", hasUser(), async (req, res) => {
  const adId = req.params.id;
  
  const { headline, location, companyName, companyDescription } = req.body;
  
  const ad = {
    headline,
    location,
    companyName,
    companyDescription,
  };
  try {
    await editAd(adId, ad);
    res.redirect("/ads/" + adId);
  } catch (err) {
    res.render("edit", {
      title: "Edited page",
      editedAd,
      errors: parseError(err),
    });
  }
});

adController.get("/:id/delete", hasUser(), async (req, res) => {
  const ad = await getOneAdById(req.params.id);
  if (req.user._id != ad.author._id) {
    return res.redirect("/");
  }
  await deleteAd(ad._id);
  res.redirect("/ads");
});

adController.get("/:id/apply", hasUser(), async (req, res) => {
  const adId = req.params.id;
  const ad = await getOneAdById(adId);

  if (req.user._id != ad.author._id) {
    await applayToAd(adId, req.user._id);
  }
  res.redirect("/ads/" + adId);
});
module.exports = adController;
