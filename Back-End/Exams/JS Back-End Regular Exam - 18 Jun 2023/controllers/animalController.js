const { hasUser } = require("../middlewares/guards");
const {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  deleteAnimal,
  makeDonation,
  editAnimal,
} = require("../services/animalService");
const { parseError } = require("../util/parser");

const animalController = require("express").Router();

animalController.get("/", async (req, res) => {
  const animals = await getAllAnimals();

  res.render("animals", {
    title: "Catalog",
    animals,
  });
});

animalController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Add animal",
  });
});

animalController.post("/create", hasUser(), async (req, res) => {
  const animal = {
    name: req.body.name,
    years: req.body.years,
    kind: req.body.kind,
    imageUrl: req.body.imageUrl,
    need: req.body.need,
    location: req.body.location,
    description: req.body.description,
    owner: req.user._id,
  };
  try {
    if (Object.values(animal).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await createAnimal(animal);
    res.redirect("/animals");
  } catch (err) {
    res.render("create", {
      title: "Add animal",
      errors: parseError(err),
      data: req.body,
    });
  }
});

animalController.get("/:id", async (req, res) => {
  const animalId = req.params.id;
  const animal = await getAnimalById(animalId);
  animal.hasUser = req.user;
  animal.isOwner = animal.owner == req.user?._id;
  animal.canDonate = !animal.donations.some(
    (x) => x.toString() == req.user?._id.toString()
  );

  res.render("details", {
    title: "Details page",
    animal,
  });
});

animalController.get("/:id/edit", hasUser(), async (req, res) => {
  const animal = await getAnimalById(req.params.id);
  if (animal.owner != req.user._id) {
    return res.redirect("/404");
  }
  res.render("edit", {
    title: "Edit page",
    data: animal,
  });
});

animalController.post("/:id/edit", hasUser(), async (req, res) => {
  const animalId = req.params.id;
  const animal = await getAnimalById(animalId);

  if (animal.owner != req.user._id) {
    return res.redirect("/404");
  }

  const editedAnimal = {
    name: req.body.name,
    years: req.body.years,
    kind: req.body.kind,
    imageUrl: req.body.imageUrl,
    need: req.body.need,
    location: req.body.location,
    description: req.body.description,
  };

  try {
    await editAnimal(animalId, editedAnimal);
    res.redirect("/animals/" + animalId);
  } catch (err) {
    editAnimal._id = animalId;
    res.render("edit", {
      title: "Edit page",
      data: editedAnimal,
    });
  }
});

animalController.get("/:id/delete", hasUser(), async (req, res) => {
  const animalId = req.params.id;
  const animal = await getAnimalById(animalId);

  if (animal.owner != req.user._id) {
    return res.redirect("/404");
  }
  try {
    await deleteAnimal(animalId);
    res.redirect("/animals");
  } catch (err) {
    res.redirect("/animals/" + animalId);
  }
});
animalController.get("/:id/donate", hasUser(), async (req, res) => {
  const animalId = req.params.id;
  const animal = await getAnimalById(animalId);
  animal.hasUser = req.user;
  animal.isOwner = animal.owner == req.user._id;
  animal.canDonate = !animal.donations.some(
    (x) => x.toString() == req.user?._id.toString()
  );

  if (animal.owner == req.user._id || !animal.canDonate) {
    return res.redirect("/404");
  }
  try {
    await makeDonation(animalId, req.user._id);
    res.redirect("/animals/" + animalId);
  } catch (err) {
    res.render("details", {
      title: "Details page",
      animal,
      errors: parseError(err),
    });
  }
});

module.exports = animalController;
