const Animal = require("../models/Animal");

async function getAllAnimals() {
  return await Animal.find({}).lean();
}

async function getAnimalById(id) {
  return await Animal.findById(id).lean();
}

async function createAnimal(animalData) {
  return await Animal.create(animalData);
}
async function editAnimal(animalId, animalData) {
  const animal = await Animal.findById(animalId);
  animal.name = animalData.name;
  animal.years = animalData.years;
  animal.kind = animalData.kind;
  animal.imageUrl = animalData.imageUrl;
  animal.need = animalData.need;
  animal.location = animalData.location;
  animal.description = animalData.description;
  await animal.save();
}
async function deleteAnimal(animalId) {
  await Animal.findByIdAndDelete(animalId);
}
async function makeDonation(animalId, userId) {
  const animal = await Animal.findById(animalId);

  animal.donations.push(userId);
  await animal.save();
}

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  editAnimal,
  deleteAnimal,
  makeDonation
};
