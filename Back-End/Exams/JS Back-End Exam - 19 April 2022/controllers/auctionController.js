const { hasUser } = require("../middlewares/guards");
const {
  createAuction,
  getAllAuctions,
  getOneById,
  makeBid,
  editAuction,
} = require("../services/auctionService");
const { parseError } = require("../util/parser");

const auctionController = require("express").Router();

auctionController.get("/", async (req, res) => {
  const auctions = await getAllAuctions();
  res.render("auctions", {
    title: "Catalog",
    auctions,
  });
});

auctionController.get('/closedAuctions', (req, res) => {
  res.render('closeAuctions', {
    title: 'My Profile', 

  })
})

auctionController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Auction",
  });
});

auctionController.post("/create", hasUser(), async (req, res) => {
  const auction = {
    title: req.body.title,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.startingPrice,
    description: req.body.description,
    author: req.user._id,
  };

  const auctionsCategories = {
    estate: "Real Estate",
    vehicles: "Vehicles",
    furniture: "Furniture",
    electronics: "Electronics",
    other: "Other",
  };
  auction.category = auctionsCategories[auction.category];

  try {
    if (Object.values(auction).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await createAuction(auction);
    res.redirect("/auctions");
  } catch (err) {
    auction.categoryValue = req.body.category;
    res.render("create", {
      title: "Create Auction",
      body: auction,
      errors: parseError(err),
    });
  }
});

auctionController.get("/:id", async (req, res) => {
  const auctionId = req.params.id;
  const auction = await getOneById(auctionId);
  auction.hasUser = req.user;
  auction.isOwner = auction.author._id == req.user?._id;
  auction.authorFullName = `${auction.author.firstName} ${auction.author.lastName}`;
  auction.isBidder = req.user?._id == auction.bidder?._id;

  res.render("details", {
    title: "Details page",
    auction,
  });
});

auctionController.get("/:id/edit", hasUser(), async (req, res) => {
  const auctionId = req.params.id;
  const auction = await getOneById(auctionId);

  if(auction.author._id != req.user._id) {
    return res.redirect('/404')
  }

  res.render("edit", {
    title: "Edit page",
    body: auction
  });
});

auctionController.post("/:id/edit", hasUser(), async (req, res) => {
  console.log(req.body);
  const auctionId = req.params.id;
  const auction = await getOneById(auctionId);

  if(auction.author._id != req.user._id) {
    return res.redirect('/404')
  }

  const editedAuction = {
    title: req.body.title,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
  };

  console.log(editedAuction)

  const auctionsCategories = {
    estate: "Real Estate",
    vehicles: "Vehicles",
    furniture: "Furniture",
    electronics: "Electronics",
    other: "Other",
  };

  editedAuction.category = auctionsCategories[editedAuction.category];

  try {
    if (Object.values(auction).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await editAuction(auctionId ,auction);
    res.redirect("/auctions/" + auctionId);
  } catch (err) {
    editedAuction.categoryValue = req.body.category;
    editedAuction._id = auction._id;

    res.render("edit", {
      title: "Edit page",
      body: editedAuction,
      errors: parseError(err),
    });
  }
});

auctionController.post("/:id/delete", async (req, res) => {
  const auction = await getOneById(req.params.id);
  if (auction.author._id != req.user._id) {
    return res.redirect("/404",);
  }
  res.render("/auctions");
});

auctionController.post("/:id/bid", async (req, res) => {
  const auctionId = req.params.id;
  const bid = req.body.bid;
  const auction = await getOneById(auctionId);

  try {
    if (bid <= auction.price) {
      throw new Error("Bid must be greather from current price!");
    }
    await makeBid(auctionId, req.user._id, bid);
    res.redirect("/auctions/" + auctionId);
  } catch (err) {
    auction.hasUser = req.user;
    auction.isOwner = auction.author._id == req.user._id;
    auction.authorFullName = `${auction.author.firstName} ${auction.author.lastName}`;
    auction.isBidder = req.user._id == auction.bidder?._id;

    res.render("details", {
      title: "Details page",
      auction,
      errors: parseError(err),
    });
  }
});

module.exports = auctionController;
