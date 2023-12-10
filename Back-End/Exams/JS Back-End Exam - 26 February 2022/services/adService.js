const Ad = require("../models/Ad");

async function getAllAds() {
  return await Ad.find({}).lean();
}

async function getOneAdById(id) {
  return await Ad.findById(id).populate("author").lean();
}

async function createAd(adData) {
  return await Ad.create(adData);
}

async function editAd(id, editedAd) {
  const ad = await Ad.findById(id);
  ad.headline = editedAd.headline;
  ad.location = editedAd.location;
  ad.companyName = editedAd.companyName;
  ad.companyDescription = editedAd.companyDescription;
  await ad.save();
}

async function getAdsBySearch(search) {
  const ads = await Ad.find({}).populate("author").lean();
  return ads.filter((x) => x.author.email == search);
}

async function deleteAd(id) {
  await Ad.findByIdAndDelete(id);
}
async function applayToAd(id, userId) {
  const ad = await Ad.findById(id);
  ad.usersApplied.push(userId);
  await ad.save();
}

module.exports = {
  getAllAds,
  getOneAdById,
  createAd,
  editAd,
  getAdsBySearch,
  deleteAd,
  applayToAd,
};
