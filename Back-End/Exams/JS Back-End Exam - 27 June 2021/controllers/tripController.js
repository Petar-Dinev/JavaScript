const { hasUser } = require("../middlewares/guards");
const {
  createTrip,
  getAllTrips,
  getOneTripById,
  deleteTrip,
  joinTrip,
} = require("../services/tripService");
const { addTripToUser } = require("../services/userService");
const parseError = require("../utils/parseError");

const tripController = require("express").Router();

tripController.get("/", async (req, res) => {
  const trips = await getAllTrips();
  res.render("trips", { title: "Catalog", trips });
});
tripController.get("/create", hasUser(), (req, res) => {
  res.render("create", { title: "Create page" });
});
tripController.post("/create", hasUser(), hasUser(), async (req, res) => {
  const tripData = {
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    date: req.body.date,
    time: req.body.time,
    carImage: req.body.carImage,
    carBrand: req.body.carBrand,
    seats: req.body.seats,
    price: req.body.price,
    description: req.body.description,
    creator: req.user._id,
  };

  try {
    const trip = await createTrip(tripData);
    await addTripToUser(trip.creator, trip._id);
    res.redirect("/trips");
  } catch (err) {
    res.render("create", {
      title: "Create page",
      data: tripData,
      errors: parseError(err),
    });
  }
});
tripController.get("/:id", async (req, res) => {
  const tripId = req.params.id;
  const trip = await getOneTripById(tripId);
  trip.hasUser = req.user;
  trip.owner = req.user?._id == trip.creator._id;
  trip.buddiesEmails = trip.buddies.map((b) => b.email).join(", ");
  trip.isJoined = trip.buddies.find((x) => x._id == req.user?._id);
  console.log(trip);

  res.render("details", { title: "Details", trip });
});

tripController.get("/:id/edit", hasUser(), (req, res) => {
  res.render("edit", { title: "Edit page" });
});

tripController.get("/:id/edit", hasUser(), (req, res) => {
  res.render("edit", { title: "Edit page" });
});
tripController.get("/:id/joinTrip", hasUser(), async (req, res) => {
  const tripId = req.params.id;
  const userId = req.user._id;
  try {
    const trip = await getOneTripById(req.params.id);
    if (trip.buddies.includes(userId)) {
      return;
    }
    await joinTrip(userId, tripId);
    res.redirect("/trips/" + tripId);
  } catch (err) {
    res.render("details", {
      title: "Detais page",
      trip,
      errors: parseError(err),
    });
  }
});

tripController.get("/:id/delete", hasUser(), async (req, res) => {
  const tripId = req.params.id;
  try {
    const trip = await getOneTripById(tripId);
    if (trip.creator._id != req.user._id) {
      res.redirect("/");
    } else {
      await deleteTrip(tripId);
      res.redirect("/trips");
    }
  } catch (err) {
    res.render("details", {
      title: "Detais page",
      trip,
      errors: parseError(err),
    });
  }
});

module.exports = tripController;
